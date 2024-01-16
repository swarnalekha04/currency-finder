// apollo-client.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://datastory-cloud-v2.stellate.sh/', // Ensure this is your correct GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
