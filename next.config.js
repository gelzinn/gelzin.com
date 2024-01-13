/** @type {import('next').NextConfig} */

const nextConfig = {
  // Allow loading images from any domain.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;