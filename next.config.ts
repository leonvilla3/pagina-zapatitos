import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'huggingface.co' },
      { protocol: 'http', hostname: 'static.photos' },
    ],
  },
};

export default nextConfig;
