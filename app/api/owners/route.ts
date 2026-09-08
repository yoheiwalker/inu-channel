import { extraOwnerChannels, ownerApiGroupCount, ownerApiGroupSize } from '../../data';
import { fetchYouTubeChannel } from '../youtube-public';

export const runtime = 'edge';

export async function GET(request: Request) {
  const requestedGroup = Number(new URL(request.url).searchParams.get('group') || 0);
  const group = Number.isInteger(requestedGroup) && requestedGroup >= 0 && requestedGroup < ownerApiGroupCount ? requestedGroup : 0;
  const selectedChannels = extraOwnerChannels.slice(group * ownerApiGroupSize, (group + 1) * ownerApiGroupSize);
  const settled = await Promise.allSettled(selectedChannels.map(fetchYouTubeChannel));
  const channels = settled.flatMap((result) => result.status === 'fulfilled' ? [result.value] : []);
  const complete = channels.length === selectedChannels.length && channels.every((channel) => channel.avatar && channel.latest);
  return Response.json({
    updatedAt: new Date().toISOString(),
    refreshHours: 6,
    group,
    groupCount: ownerApiGroupCount,
    complete,
    channels: Object.fromEntries(channels.map((channel) => [channel.channelId, channel])),
    videos: {},
  }, {
    headers: {
      'cache-control': complete ? 'public, s-maxage=21600, stale-while-revalidate=86400' : 'no-store',
    },
  });
}
