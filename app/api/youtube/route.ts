import { channelSummaries } from '../../data';
import { fetchYouTubeChannel } from '../youtube-public';

export const runtime = 'edge';

export async function GET() {
  const settled = await Promise.allSettled(channelSummaries.map(fetchYouTubeChannel));
  const channels = settled.flatMap((result) => result.status === 'fulfilled' ? [result.value] : []);
  const complete = channels.length === channelSummaries.length && channels.every((channel) => channel.avatar && channel.latest);
  return Response.json({
    updatedAt: new Date().toISOString(),
    refreshHours: 6,
    complete,
    channels: Object.fromEntries(channels.map((channel) => [channel.channelId, channel])),
    videos: {},
  }, {
    headers: {
      'cache-control': complete ? 'public, s-maxage=21600, stale-while-revalidate=86400' : 'no-store',
    },
  });
}
