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
    domains: ['gcdnb.pbrd.co'],
  },
  basePath: '',
  poweredByHeader: false,
  trailingSlash: false,
};

module.exports = nextConfig;
