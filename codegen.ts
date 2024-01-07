import type { CodegenConfig } from '@graphql-codegen/cli';

const endpoint = process.env.HASURA_URL || '';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [endpoint]: {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET || '',
        },
      },
    },
  ],
  documents: 'backend/graphql/*.graphql',
  generates: {
    'backend/graphql/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        avoidOptionals: { field: true },
        skipTypename: false,
        scalars: {
          numeric: 'number',
        },
        enumsAsTypes: true,
        hooks: {
          afterOneFileWrite: ['gsed -i -e"s|graphql-request/dist/types.dom|graphql-request/src/types.dom|g"'],
        },
      },
    },
    'backend/graphql/generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
    'backend/graphql/generated/schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
};

export default config;
