/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true
      },
      {
        source: '/auth/register',
        destination: '/register',
        permanent: true
      },
      {
        source: '/auth/login',
        destination: '/login',
        permanent: true
      }
    ];
  },
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/auth/login'
      },
      {
        source: '/register',
        destination: '/auth/register'
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.dog.ceo'
      }
    ]
  }
};

module.exports = nextConfig;
