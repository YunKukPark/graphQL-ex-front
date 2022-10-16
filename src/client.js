import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/', // graphql server
  cache: new InMemoryCache(), // cache
});

client
  .query({
    query: gql`
      {
        allMovies {
          title
        }
      }
    `,
  })
  .then(console.log);

export default client;
