/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cb-assets.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'project-assets-phi.vercel.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;