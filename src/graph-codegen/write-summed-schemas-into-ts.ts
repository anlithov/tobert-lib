export const writeSummedSchemasIntoTs = async (filePath: string) => {
  const sdl = await Deno.readTextFile(filePath);

  const tsFilePath = filePath + ".ts";
  const tsContent = `export const typeDefs = \`${sdl}\`;\n`;

  // 3) Write the TS file
  await Deno.writeTextFile(tsFilePath, tsContent);
  console.log(`Wrote TS version of schema to ${tsFilePath}`);
  await Deno.remove(filePath);
  console.log(`Deleted original GraphQL file at ${filePath}`);
};
