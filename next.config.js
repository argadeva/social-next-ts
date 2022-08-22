const nextConfig = {
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
    ]
  },
  env: {
    customKey: 'my-value',
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['source.unsplash.com'],
  },
};

module.exports = nextConfig;
