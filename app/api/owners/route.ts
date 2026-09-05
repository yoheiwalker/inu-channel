import { extraOwnerChannels } from '../../data';

export const runtime = 'edge';

const decodeXml = (value: string) => value
  .replaceAll('&amp;', '&').replaceAll('&#39;', "'").replaceAll('&quot;', '"')
  .replaceAll('&lt;', '<').replaceAll('&gt;', '>');

function extractInitialData(html: string) {
  const markers = ['var ytInitialData = ', 'window["ytInitialData"] = '];
  for (const marker of markers) {
    const markerIndex = html.indexOf(marker);
    if (markerIndex < 0) continue;
    const start = html.indexOf('{', markerIndex + marker.length);
    if (start < 0) continue;
    let depth = 0;
    let quoted = false;
    let escaped = false;
    for (let index = start; index < html.length; index += 1) {
      const char = html[index];
      if (quoted) {
        if (escaped) escaped = false;
        else if (char === '\\') escaped = true;
        else if (char === '"') quoted = false;
      } else if (char === '"') quoted = true;
      else if (char === '{') depth += 1;
      else if (char === '}' && --depth === 0) {
        try { return JSON.parse(html.slice(start, index + 1)); } catch { break; }
      }
    }
  }
  return null;
}

function findObjectWithKey(value: unknown, key: string): Record<string, unknown> | null {
  if (!value || typeof value !== 'object') return null;
  if (!Array.isArray(value) && key in value) return (value as Record<string, unknown>)[key] as Record<string, unknown>;
  for (const child of Object.values(value)) {
    const found = findObjectWithKey(child, key);
    if (found) return found;
  }
  return null;
}

function parseLatest(xml: string) {
  const entry = xml.match(/<entry>([\s\S]*?)<\/entry>/)?.[1];
  if (!entry) return null;
  const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
  const title = entry.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  const published = entry.match(/<published>([^<]+)<\/published>/)?.[1];
  if (!id || !title || !published) return null;
  return { id, title: decodeXml(title), published };
}

async function fetchChannel(channel: typeof extraOwnerChannels[number]) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 9000);
  try {
    const [pageResponse, feedResponse] = await Promise.all([
      fetch(`https://www.youtube.com/channel/${channel.channelId}`, {
        headers: { 'user-agent': 'Mozilla/5.0' }, signal: controller.signal,
      }),
      fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channel.channelId}`, {
        headers: { 'user-agent': 'Mozilla/5.0' }, signal: controller.signal,
      }),
    ]);
    const [html, xml] = await Promise.all([pageResponse.text(), feedResponse.text()]);
    const initial = extractInitialData(html);
    const header = findObjectWithKey(initial, 'pageHeaderRenderer');
    const headerText = header ? JSON.stringify(header) : html;
    const subscriber = headerText.match(/チャンネル登録者数[\s ]*([0-9.,]+[万億]?)人/)?.[1]
      ?? headerText.match(/([0-9.,]+[MK]?) subscribers/i)?.[1]
      ?? null;
    const avatar = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1]?.replaceAll('&amp;', '&') ?? null;
    return { name: channel.name, channelId: channel.channelId, subscriber, avatar, latest: parseLatest(xml) };
  } finally {
    clearTimeout(timer);
  }
}

export async function GET() {
  const settled = await Promise.allSettled(extraOwnerChannels.map(fetchChannel));
  const channels = settled.flatMap((result) => result.status === 'fulfilled' ? [result.value] : []);
  return Response.json({
    updatedAt: new Date().toISOString(),
    refreshHours: 6,
    channels: Object.fromEntries(channels.map((channel) => [channel.channelId, channel])),
    videos: {},
  }, {
    headers: {
      'cache-control': 'public, s-maxage=21600, stale-while-revalidate=86400',
    },
  });
}
