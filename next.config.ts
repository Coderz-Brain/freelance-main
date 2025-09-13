/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cb-assets.vercel.app',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;