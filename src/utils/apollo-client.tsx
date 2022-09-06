import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = () => {
  return new ApolloClient({
    uri: process.env.graphqlURI,
    cache: new InMemoryCache(),
  });
};

export default apolloClient;
