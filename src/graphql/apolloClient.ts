import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { resolvers } from './resolvers'

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  resolvers
});

cache.writeData({ data: { history: { items: [], __typename: 'Orders' } } });

export default apolloClient;
