import type { MetadataRoute } from 'next';
import { videos } from './data';
import { breedLandings, categoryLandings, contentUpdated } from './seo-data';

const siteUrl = 'https://moemel.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(contentUpdated),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...['about', 'editorial-policy'].map((path) => ({
      url: `${siteUrl}/${path}`,
      lastModified: new Date(contentUpdated),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
    ...breedLandings.map((landing) => ({
      url: `${siteUrl}/dog-breeds/${landing.slug}`,
      lastModified: new Date(contentUpdated),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...categoryLandings.map((landing) => ({
      url: `${siteUrl}/categories/${landing.slug}`,
      lastModified: new Date(contentUpdated),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...videos.map((video) => ({
      url: `${siteUrl}/videos/${video.id}`,
      lastModified: new Date(video.published.replaceAll('.', '-')),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ];
}
