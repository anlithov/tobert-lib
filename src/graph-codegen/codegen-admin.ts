import type { CodegenConfig } from "@graphql-codegen/cli";
import type { TypeScriptResolversPluginConfig } from "@graphql-codegen/typescript-resolvers";
import type { SchemaASTConfig } from "@graphql-codegen/schema-ast";
import { writeSummedSchemasIntoTs } from "./write-summed-schemas-into-ts.ts";

const config: CodegenConfig = {
  schema: "src/graph-schemas/apps/admin/**/*.graphql",
  generates: {
    "./src/api/graph-schema/admin.graphql": {
      plugins: ["schema-ast"],
      config: {
        commentDescriptions: true,
        includeDirectives: true,
      } as SchemaASTConfig,
      hooks: {
        afterOneFileWrite: [writeSummedSchemasIntoTs],
      },
    },
    "src/admin/types/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "./context.ts#AdminContext",
        useTypeImports: true,
      } as TypeScriptResolversPluginConfig,
    },
  },
};

export default config;
