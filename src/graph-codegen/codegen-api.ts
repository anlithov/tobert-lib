import type { CodegenConfig } from "@graphql-codegen/cli";
import type { TypeScriptResolversPluginConfig } from "@graphql-codegen/typescript-resolvers";
import type { SchemaASTConfig } from "@graphql-codegen/schema-ast";
import { writeSummedSchemasIntoTs } from "./write-summed-schemas-into-ts.ts";

const config: CodegenConfig = {
  schema: "src/graph-schemas/apps/api/**/*.graphql",
  generates: {
    "./src/api/graph-schema/api.graphql": {
      plugins: ["schema-ast"],
      config: {
        commentDescriptions: true,
        includeDirectives: true,
      } as SchemaASTConfig,
      hooks: {
        afterOneFileWrite: [(file) => writeSummedSchemasIntoTs(file, 'apiTypeDefs')],
      },
    },
    "src/api/types/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "./context.ts#ApiContext",
        useTypeImports: true,
        avoidOptionals: true,
        allResolversTypeName: 'ApiResolvers',
        resolverTypeWrapperSignature: "T",
        onlyResolveTypeForInterfaces: true,
        skipTypename: true,
        allowParentTypeOverride: true,
      } as TypeScriptResolversPluginConfig,
    },
  },
};

export default config;
