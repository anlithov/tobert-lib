import type {CodegenConfig} from "@graphql-codegen/cli";
import type {TypeScriptResolversPluginConfig} from "@graphql-codegen/typescript-resolvers";

const config: CodegenConfig = {
  schema: "src/apps/api/**/*.graphql",
  generates: {
    "src/types/api/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "./context.ts#ApiContext",
        useTypeImports: true,
      } as TypeScriptResolversPluginConfig,
    },
  },
};

export default config;
