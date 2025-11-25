const filename = "./dist/index.es.js";
const cssImport = "import './index.css';";
const newline = "\n";

try {
  const existingContent = await Deno.readTextFile(filename);
  const newContent = cssImport + newline + existingContent;

  await Deno.writeTextFile(filename, newContent);

  console.log(`Successfully added a new header row to ${filename}.`);
} catch (error) {
  if (error instanceof Deno.errors.NotFound) {
    console.error(
      `File not found: ${filename}. Creating a new file with just the header.`,
    );
    try {
      await Deno.writeTextFile(filename, cssImport + newline);
    } catch (e) {
      if (e instanceof Error) {
        console.error(`Error Message: ${e.message}`);
      } else {
        console.error(`An unknown error occurred: ${e}`);
      }
    }
  } else {
    if (error instanceof Error) {
      console.error(`An error occurred: ${error.message}`);
    }
  }
}

Deno.copyFileSync("index.d.ts", "dist/index.d.ts");
