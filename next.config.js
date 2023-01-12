/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https:',
        hostname: 'salomonjesus.com',
        port: '',
        pathname: '/pics_and_memes/Thats%20me.jpg',
      },
    ],
  },
};

module.exports = nextConfig;
