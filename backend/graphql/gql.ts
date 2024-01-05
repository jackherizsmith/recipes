import { Sdk } from '../../generated/graphql';
import GraphQL from './GraphQL';

export * from '../../generated/graphql';

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

let graphqlClient: Sdk | null = null;

export const graphql = (): Sdk => {
  if (!graphqlClient) {
    graphqlClient = GraphQL(hasuraConfig().HASURA_URL, hasuraConfig().HASURA_ADMIN_SECRET);
  }
  return graphqlClient;
};
