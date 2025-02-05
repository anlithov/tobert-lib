import type {CodegenConfig} from "@graphql-codegen/cli";
import type {TypeScriptResolversPluginConfig} from "@graphql-codegen/typescript-resolvers";

const config: CodegenConfig = {
  schema: "src/graph-schemas/apps/admin/**/*.graphql",
  generates: {
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
