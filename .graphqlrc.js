const endpoint = process.env.HASURA_URL || '';

/** @type {import('graphql-config').IGraphQLConfig} */
module.exports = {
  schema: [
    {
      [endpoint]: {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET || '',
        },
      },
    },
  ],
  documents: ['backend / graphql/*.graphql'],
  extensions: {
    codegen: {
      overwrite: true,
      generates: {
        'generated/graphql.ts': {
          plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
          config: {
            avoidOptionals: { field: true },
            skipTypename: false,
            scalars: {
              numeric: 'number',
            },
            // We need enums as types to avoid importing the sdk
            // into our frontend bundles.
            enumsAsTypes: true,
          },
        },
        'generated/graphql.schema.json': {
          plugins: ['introspection'],
        },
        'generated/schema.graphql': {
          plugins: ['schema-ast'],
        },
      },
    },
  },
};
