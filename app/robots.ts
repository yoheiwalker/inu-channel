import type { MetadataRoute } from 'next';

const siteUrl = 'https://moemel.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/'] },
    host: siteUrl,
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
