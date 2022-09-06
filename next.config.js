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
    baseURI: 'https://argadeva.herokuapp.com/',
    graphqlURI: 'https://social-graphql-backend.herokuapp.com/graphql',
    publicGAID: 'G-MNDSH02DP2'
  },
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['source.unsplash.com', 'images.unsplash.com'],
  },
  basePath: '',
  poweredByHeader: false,
  trailingSlash: true,
};

module.exports = nextConfig;
