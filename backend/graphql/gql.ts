import { createClient, Client } from 'graphqurl';

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

let client: Client | null = null;

export const graphql = (): Client => {
  if (!client) {
    client = createClient({
      endpoint: hasuraConfig().HASURA_URL,
      headers: { 'x-hasura-admin-secret': hasuraConfig().HASURA_ADMIN_SECRET },
    });
  }
  return client;
};
