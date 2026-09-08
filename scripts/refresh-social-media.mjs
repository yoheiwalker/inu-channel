import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const source = await readFile(path.join(root, 'app/data.ts'), 'utf8');
const creators = [...source.matchAll(/handle:\s*'([^']+)'[^\n]+platform:\s*'(Instagram|TikTok)'/g)]
  .map((match) => ({ handle: match[1], platform: match[2] }))
  .filter((creator, index, list) => list.findIndex((item) => item.handle === creator.handle && item.platform === creator.platform) === index);

const browserHeaders = {
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/140 Safari/537.36',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
};
const instagramCrawlerHeaders = {
  ...browserHeaders,
  'user-agent': 'Googlebot/2.1 (+http://www.google.com/bot.html)',
  'accept-language': 'en-US,en;q=0.9',
};

const safeName = (value) => value.replace(/^@/, '').replace(/[^a-zA-Z0-9._-]/g, '_');
const publicPath = (platform, handle, suffix = '') => `/social/${platform.toLowerCase()}/${safeName(handle)}${suffix}.jpg`;
const absolutePath = (relativePath) => path.join(root, 'public', relativePath.replace(/^\//, ''));
const decodeHtml = (value) => value
  .replaceAll('&amp;', '&')
  .replaceAll('&quot;', '"')
  .replaceAll('&#39;', "'")
  .replaceAll('&lt;', '<')
  .replaceAll('&gt;', '>');

async function fetchOk(url, options = {}) {
  const response = await fetch(url, { redirect: 'follow', ...options });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response;
}

async function downloadImage(url, destination) {
  const response = await fetchOk(url, { headers: browserHeaders });
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length < 300) throw new Error(`image too small: ${url}`);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, bytes);
}

function parseEscapedJsonProperty(html, property) {
  const marker = `\"${property}\":\"`;
  const markerIndex = html.indexOf(marker);
  if (markerIndex < 0) throw new Error(`${property} not found`);
  const start = markerIndex + marker.length;
  let slashCount = 0;
  for (let index = start; index < html.length; index += 1) {
    const char = html[index];
    if (char === '\\') {
      slashCount += 1;
      continue;
    }
    if (char === '"' && slashCount % 2 === 0) {
      const encoded = html.slice(start, index);
      return JSON.parse(JSON.parse(`\"${encoded}\"`));
    }
    slashCount = 0;
  }
  throw new Error(`${property} is incomplete`);
}

async function instagramInfo(handle) {
  const username = handle.replace(/^@/, '');
  const html = await (await fetchOk(`https://www.instagram.com/${username}/embed/`, { headers: browserHeaders })).text();
  let context = null;
  try {
    context = parseEscapedJsonProperty(html, 'contextJSON').context;
  } catch {
    // Instagram sometimes omits the embedded profile payload for logged-out requests.
  }
  const media = (context?.graphql_media || [])
    .map((item) => item.shortcode_media)
    .filter(Boolean)
    .sort((a, b) => Number(Boolean(b.is_video)) - Number(Boolean(a.is_video)))
    .slice(0, 3)
    .map((item, index) => ({
      id: item.shortcode,
      title: item.is_video ? `トップリール ${index + 1}` : `トップ投稿 ${index + 1}`,
      embedUrl: `https://www.instagram.com/${item.is_video ? 'reel' : 'p'}/${item.shortcode}/embed/captioned/`,
      thumbnailUrl: item.display_url,
      viewCount: null,
    }));
  if (context?.profile_pic_url) return { avatarUrl: context.profile_pic_url, media };

  const profileHtml = await (await fetchOk(`https://www.instagram.com/${username}/`, { headers: instagramCrawlerHeaders })).text();
  const imageMatch = profileHtml.match(/<meta property="og:image" content="([^"]+)"/);
  if (!imageMatch) throw new Error('Instagram profile image not found');
  return {
    avatarUrl: decodeHtml(imageMatch[1]),
    media: media.length ? media : [{
      id: 'profile',
      title: '人気リール・最新投稿',
      embedUrl: `https://www.instagram.com/${username}/embed/`,
      thumbnailUrl: decodeHtml(imageMatch[1]),
      viewCount: null,
    }],
  };
}

async function tiktokInfo(handle) {
  const username = handle.replace(/^@/, '');
  const html = await (await fetchOk(`https://www.tiktok.com/embed/@${username}`, { headers: browserHeaders })).text();
  const match = html.match(/<script id="__FRONTITY_CONNECT_STATE__" type="application\/json">([\s\S]*?)<\/script>/);
  if (!match) throw new Error('TikTok embed state not found');
  const state = JSON.parse(match[1]);
  const key = Object.keys(state.source?.data || {}).find((item) => item.includes(`/embed/@${username}`));
  const profile = key ? state.source.data[key] : null;
  if (!profile?.userInfo) throw new Error('TikTok profile data not found');
  const media = [...(profile.videoList || [])]
    .sort((a, b) => (b.playCount || 0) - (a.playCount || 0))
    .slice(0, 3)
    .map((item, index) => ({
      id: item.id,
      title: item.desc?.trim() || `人気動画 ${index + 1}`,
      embedUrl: `https://www.tiktok.com/player/v1/${item.id}?autoplay=0&loop=0`,
      thumbnailUrl: item.coverUrl,
      viewCount: item.playCount || null,
    }));
  return { avatarUrl: profile.userInfo.avatarThumbUrl, media };
}

async function processCreator(creator) {
  const key = `${creator.platform}:${creator.handle}`;
  let info;
  try {
    info = creator.platform === 'Instagram'
      ? await instagramInfo(creator.handle)
      : await tiktokInfo(creator.handle);
  } catch {
    info = {
      avatarUrl: creator.platform === 'TikTok'
        ? `https://unavatar.io/tiktok/${creator.handle.replace(/^@/, '')}`
        : null,
      media: creator.platform === 'Instagram' ? [{
        id: 'profile',
        title: '注目リール・最新投稿',
        embedUrl: `https://www.instagram.com/${creator.handle.replace(/^@/, '')}/embed/`,
        thumbnailUrl: null,
        viewCount: null,
      }] : [],
    };
  }
  const icon = publicPath(creator.platform, creator.handle);
  let iconPath = icon;
  try {
    if (!info.avatarUrl) throw new Error('profile icon unavailable');
    await downloadImage(info.avatarUrl, absolutePath(icon));
  } catch {
    iconPath = '/favicon.svg';
  }
  const media = [];
  for (const [index, item] of info.media.entries()) {
    const thumbnail = publicPath(creator.platform, creator.handle, `-${index + 1}`);
    try {
      if (!item.thumbnailUrl) throw new Error('media thumbnail unavailable');
      await downloadImage(item.thumbnailUrl, absolutePath(thumbnail));
      media.push({ ...item, thumbnail });
    } catch {
      media.push({ ...item, thumbnail: iconPath });
    }
  }
  return [key, { icon: iconPath, media }];
}

const results = {};
const failures = [];
async function runGroup(group, concurrency, delayMs = 0) {
  let cursor = 0;
  async function worker() {
    while (cursor < group.length) {
      const creator = group[cursor++];
      if (delayMs) await new Promise((resolve) => setTimeout(resolve, delayMs));
      try {
        const [key, value] = await processCreator(creator);
        results[key] = value;
        console.log(`ok ${key}`);
      } catch (error) {
        failures.push(`${creator.platform}:${creator.handle} - ${error.message}`);
        console.warn(`failed ${creator.platform}:${creator.handle}: ${error.message}`);
      }
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
}

await runGroup(creators.filter((creator) => creator.platform === 'Instagram'), 1, 250);
await runGroup(creators.filter((creator) => creator.platform === 'TikTok'), 5);

const generated = `export type SocialMediaItem = {\n  id: string;\n  title: string;\n  embedUrl: string;\n  thumbnail: string;\n  viewCount: number | null;\n};\n\nexport type SocialMediaProfile = {\n  icon: string;\n  media: SocialMediaItem[];\n};\n\nexport const socialMediaProfiles: Record<string, SocialMediaProfile> = ${JSON.stringify(results, null, 2)};\n`;
await writeFile(path.join(root, 'app/social-media.generated.ts'), generated);

console.log(`complete ${Object.keys(results).length}/${creators.length}`);
if (failures.length) {
  console.log('failures:');
  failures.forEach((failure) => console.log(failure));
  process.exitCode = 2;
}
