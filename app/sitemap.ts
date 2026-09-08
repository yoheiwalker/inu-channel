import type { MetadataRoute } from 'next';
import { videos } from './data';

const siteUrl = 'https://inu-channel.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...videos.map((video) => ({
      url: `${siteUrl}/videos/${video.id}`,
      lastModified: new Date(video.published.replaceAll('.', '-')),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ];
}
