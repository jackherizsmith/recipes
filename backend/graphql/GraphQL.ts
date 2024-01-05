import crossFetch from 'cross-fetch';
import fetchRetry from 'fetch-retry';
import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../../generated/graphql';

declare var global: any;

export default (uri: string, secret?: string) => {
  const fetchImpl = global.fetch || crossFetch;
  const client = new GraphQLClient(uri, {
    headers: {
      'x-hasura-admin-secret': secret || '',
    },
    keepalive: true,
    fetch: fetchRetry(fetchImpl, { retries: 3, retryDelay: 1000, retryOn: [503, 429] }),
  });
  return getSdk(client);
};
