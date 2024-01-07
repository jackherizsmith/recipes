import { GraphQLClient } from 'graphql-request';
import crossFetch from 'cross-fetch';
import fetchRetry from 'fetch-retry';
import { Sdk, getSdk } from './generated/graphql';

function GraphQL(uri: string, secret?: string) {
  const fetchImpl = global.fetch || crossFetch;
  const client = new GraphQLClient(uri, {
    headers: {
      'x-hasura-admin-secret': secret || '',
    },
    keepalive: true,
    fetch: fetchRetry(fetchImpl, { retries: 3, retryDelay: 1000, retryOn: [503, 429] }),
  });
  return getSdk(client);
}

type HasuraConfig = {
  HASURA_URL: string;
  HASURA_ADMIN_SECRET: string;
};
let hasuraConfigCache: HasuraConfig;

export const hasuraConfig = (): HasuraConfig => {
  if (!hasuraConfigCache) {
    hasuraConfigCache = {
      HASURA_URL: process.env.HASURA_URL || '',
      HASURA_ADMIN_SECRET: process.env.HASURA_ADMIN_SECRET || '',
    };
  }
  return hasuraConfigCache;
};

let client: Sdk | null = null;

export const graphql = (): Sdk => {
  if (!client) {
    client = GraphQL(hasuraConfig().HASURA_URL, hasuraConfig().HASURA_ADMIN_SECRET);
  }
  return client;
};
