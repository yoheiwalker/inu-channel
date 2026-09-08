import { ownerApiGroupCount } from '../../../data';

export const runtime = 'nodejs';
export const maxDuration = 300;

type LatestVideo = {
  id: string;
  title: string;
  published: string;
  views: number | null;
};

type ChannelResult = {
  name?: string;
  channelId?: string;
  latest?: LatestVideo | null;
};

type RefreshResult = {
  complete?: boolean;
  channels?: Record<string, ChannelResult>;
};

async function fetchRefresh(url: string): Promise<RefreshResult> {
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Refresh request failed with ${response.status}`);
  return response.json() as Promise<RefreshResult>;
}

export async function GET(request: Request) {
  const startedAt = Date.now();
  const requestId = request.headers.get('x-vercel-id');
  const secret = process.env.CRON_SECRET;

  if (!secret || request.headers.get('authorization') !== `Bearer ${secret}`) {
    console.warn(JSON.stringify({ level: 'warn', message: 'Unauthorized weekly refresh', requestId }));
    return Response.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  console.log(JSON.stringify({ level: 'info', message: 'Weekly refresh started', requestId }));

  try {
    const origin = new URL(request.url).origin;
    const cacheBuster = Date.now();
    const results: RefreshResult[] = [];
    const failures: string[] = [];

    try {
      results.push(await fetchRefresh(`${origin}/api/youtube?weekly=${cacheBuster}`));
    } catch (error) {
      failures.push(error instanceof Error ? error.message : String(error));
    }

    for (let group = 0; group < ownerApiGroupCount; group += 1) {
      try {
        results.push(await fetchRefresh(`${origin}/api/owners?group=${group}&catalog=2&weekly=${cacheBuster}`));
      } catch (error) {
        failures.push(`group ${group}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }

    const channels = results.flatMap((result) => Object.values(result.channels || {}));
    const latestVideos = channels
      .flatMap((channel) => channel.latest ? [{ ...channel.latest, channel: channel.name || channel.channelId || '不明' }] : [])
      .sort((a, b) => b.published.localeCompare(a.published));
    const complete = failures.length === 0 && results.length === ownerApiGroupCount + 1 && results.every((result) => result.complete !== false);
    const payload = {
      ok: complete,
      complete,
      checkedAt: new Date().toISOString(),
      channelCount: channels.length,
      latestVideoCount: latestVideos.length,
      newestVideos: latestVideos.slice(0, 10),
      failures,
      durationMs: Date.now() - startedAt,
    };

    console.log(JSON.stringify({ level: 'info', message: 'Weekly refresh completed', requestId, ...payload }));
    return Response.json(payload, { status: complete ? 200 : 207, headers: { 'cache-control': 'no-store' } });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(JSON.stringify({ level: 'error', message: 'Weekly refresh failed', requestId, error: message, durationMs: Date.now() - startedAt }));
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}
