import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/', // graphql server
  cache: new InMemoryCache(), // cache
});

export default client;
