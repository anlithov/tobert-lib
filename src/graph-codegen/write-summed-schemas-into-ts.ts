import type { ObjectTypeDefinitionNode } from "graphql";
import { parse, visit } from "graphql";

export const writeSummedSchemasIntoTs = async (
  filePath: string,
  constName: string,
) => {
  try {
    const sdl = await Deno.readTextFile(filePath);

    const tsFilePath = filePath + ".ts";
    const tsContent = `export const ${constName}: string = \`${sdl}\`;\n`;

    // 3) Write the TS file
    await Deno.writeTextFile(tsFilePath, tsContent);
    console.log(`Wrote TS version of schema to ${tsFilePath}`);
    console.log(`Deleted original GraphQL file at ${filePath}`);

    const schemaFile = "./src/api/graph-schema/api.graphql"; // Path to your schema
    const schemaContent = await Deno.readTextFile(schemaFile);


// Parse GraphQL Schema
    const ast = parse(schemaContent);

// Extract all type names dynamically
    const typeNames: string[] = [];

    visit(ast, {
      ObjectTypeDefinition(node: ObjectTypeDefinitionNode) {
        if (node.name.value.includes("Read") || node.name.value.includes("Actions")) {
          typeNames.push(node.name.value);
        }
      },
    });

    const apiType = `export type ApiResolvers = Pick<ApiAllTypes, '${typeNames.join("' | '")}'>\n`;
    const additionalTypes = typeNames
      .map((typename) => `export type ${typename}Picked = Pick<ApiAllTypes, '${typename}'>;`)
      .join("\n");

    await Deno.writeTextFile('src/api/types/graphql.ts', apiType + additionalTypes, {
      append: true
    });

    await Deno.remove(filePath);
  } catch (e) {
    console.log(e)
  }
};
