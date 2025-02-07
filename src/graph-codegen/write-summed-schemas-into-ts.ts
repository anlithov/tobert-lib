import { ObjectTypeDefinitionNode, parse, visit } from "graphql";

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

    console.log(filePath);

    const schemaFile = "./src/api/graph-schema/api.graphql"; // Path to your schema
    console.log(schemaFile)
    const schemaContent = await Deno.readTextFile(schemaFile);
    console.log('schemaContent', schemaContent)

// Parse GraphQL Schema
    const ast = parse(schemaContent);

// Extract all type names dynamically
    const typeNames: string[] = [];

    visit(ast, {
      ObjectTypeDefinition(node: ObjectTypeDefinitionNode) {
        if (node.name.value.includes("Queries") || node.name.value.includes("Mutations")) {
          typeNames.push(node.name.value);
        }
      },
    });

    const additionalTypes = typeNames
      .map((typename) => `export type ${typename}Picked = Pick<ApiResolvers, '${typename}'>;`)
      .join("\n");

    await Deno.writeTextFile('src/api/types/graphql.ts', additionalTypes, {
      append: true
    });

    await Deno.remove(filePath);
  } catch (e) {
    console.log(e)
  }
};
