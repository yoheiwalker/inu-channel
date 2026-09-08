import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.moemel.com' }],
        destination: 'https://moemel.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
