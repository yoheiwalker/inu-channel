type PublicChannel = {
  name: string;
  channelId: string;
  thumbnail: string;
};

const decodeHtml = (value: string) => value
  .replaceAll('&amp;', '&').replaceAll('&#39;', "'").replaceAll('&quot;', '"')
  .replaceAll('&lt;', '<').replaceAll('&gt;', '>');

function extractInitialData(html: string): unknown {
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
  if (!Array.isArray(value) && key in value) {
    const found = (value as Record<string, unknown>)[key];
    return found && typeof found === 'object' && !Array.isArray(found) ? found as Record<string, unknown> : null;
  }
  for (const child of Object.values(value)) {
    const found = findObjectWithKey(child, key);
    if (found) return found;
  }
  return null;
}

function findStringWithKey(value: unknown, key: string): string | null {
  if (!value || typeof value !== 'object') return null;
  if (!Array.isArray(value) && typeof (value as Record<string, unknown>)[key] === 'string') {
    return (value as Record<string, string>)[key];
  }
  for (const child of Object.values(value)) {
    const found = findStringWithKey(child, key);
    if (found) return found;
  }
  return null;
}

function readPath(value: unknown, path: string[]): unknown {
  return path.reduce<unknown>((current, key) => current && typeof current === 'object'
    ? (current as Record<string, unknown>)[key]
    : undefined, value);
}

function collectStrings(value: unknown, output: string[] = []): string[] {
  if (typeof value === 'string') output.push(value);
  else if (value && typeof value === 'object') Object.values(value).forEach((child) => collectStrings(child, output));
  return output;
}

function parseViews(label?: string): number | null {
  if (!label) return null;
  const match = label.replaceAll(',', '').match(/([0-9.]+)\s*(万|億|K|M|B)?/i);
  if (!match) return null;
  const value = Number(match[1]);
  const multiplier = ({ '万': 10_000, '億': 100_000_000, K: 1_000, M: 1_000_000, B: 1_000_000_000 } as Record<string, number>)[match[2]?.toUpperCase() || ''] || 1;
  return Number.isFinite(value) ? Math.round(value * multiplier) : null;
}

function approximatePublished(label?: string): string {
  const date = new Date();
  const match = label?.match(/([0-9]+)\s*(秒|分|時間|日|週間|か月|ヶ月|年)前/i)
    ?? label?.match(/([0-9]+)\s*(second|minute|hour|day|week|month|year)s?\s+ago/i);
  if (!match) return date.toISOString();
  const amount = Number(match[1]);
  const units: Record<string, number> = {
    '秒': 1_000, second: 1_000,
    '分': 60_000, minute: 60_000,
    '時間': 3_600_000, hour: 3_600_000,
    '日': 86_400_000, day: 86_400_000,
    '週間': 604_800_000, week: 604_800_000,
    'か月': 2_592_000_000, 'ヶ月': 2_592_000_000, month: 2_592_000_000,
    '年': 31_536_000_000, year: 31_536_000_000,
  };
  date.setTime(date.getTime() - amount * units[match[2].toLowerCase()]);
  return date.toISOString();
}

function parseLatest(initialData: unknown) {
  const lockup = findObjectWithKey(initialData, 'lockupViewModel');
  if (lockup) {
    const id = findStringWithKey(lockup, 'videoId');
    const title = readPath(lockup, ['metadata', 'lockupMetadataViewModel', 'title', 'content']);
    const labels = collectStrings(readPath(lockup, ['metadata', 'lockupMetadataViewModel', 'metadata']));
    const viewLabel = labels.find((label) => /視聴|views?/i.test(label));
    const publishedLabel = labels.find((label) => /前|ago/i.test(label));
    if (id && typeof title === 'string') {
      return { id, title: decodeHtml(title), published: approximatePublished(publishedLabel), views: parseViews(viewLabel) };
    }
  }

  const video = findObjectWithKey(initialData, 'videoRenderer') ?? findObjectWithKey(initialData, 'gridVideoRenderer');
  if (!video) return null;
  const id = typeof video.videoId === 'string' ? video.videoId : null;
  const title = readPath(video, ['title', 'runs', '0', 'text']) ?? readPath(video, ['title', 'simpleText']);
  const publishedLabel = readPath(video, ['publishedTimeText', 'simpleText']);
  const viewLabel = readPath(video, ['viewCountText', 'simpleText']);
  if (!id || typeof title !== 'string') return null;
  return {
    id,
    title: decodeHtml(title),
    published: approximatePublished(typeof publishedLabel === 'string' ? publishedLabel : undefined),
    views: parseViews(typeof viewLabel === 'string' ? viewLabel : undefined),
  };
}

export async function fetchYouTubeChannel(channel: PublicChannel) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12_000);
  try {
    const response = await fetch(`https://www.youtube.com/channel/${channel.channelId}/videos`, {
      headers: { 'user-agent': 'Mozilla/5.0', 'accept-language': 'ja-JP,ja;q=0.9,en;q=0.7' },
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`YouTube response unavailable (${response.status})`);
    const html = await response.text();
    const initialData = extractInitialData(html);
    const header = findObjectWithKey(initialData, 'pageHeaderRenderer');
    const headerText = header ? JSON.stringify(header) : html;
    const subscriber = headerText.match(/チャンネル登録者数[\s ]*([0-9.,]+[万億]?)人/)?.[1]
      ?? headerText.match(/([0-9.,]+[MK]?) subscribers/i)?.[1]
      ?? null;
    const avatar = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1]?.replaceAll('&amp;', '&')
      ?? channel.thumbnail;
    return { name: channel.name, channelId: channel.channelId, subscriber, avatar, latest: parseLatest(initialData) };
  } finally {
    clearTimeout(timer);
  }
}
