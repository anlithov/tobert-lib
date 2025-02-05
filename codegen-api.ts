import type {CodegenConfig} from "@graphql-codegen/cli";
import type {TypeScriptResolversPluginConfig} from "@graphql-codegen/typescript-resolvers";

const config: CodegenConfig = {
  schema: "src/graph-schemas/apps/api/**/*.graphql",
  generates: {
    "src/api/types/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "./context.ts#ApiContext",
        useTypeImports: true,
      } as TypeScriptResolversPluginConfig,
    },
  },
};

export default config;
