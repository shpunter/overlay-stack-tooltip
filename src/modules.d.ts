// This declaration file teaches TypeScript (and the Deno Language Server)
// how to correctly interpret files ending in '.module.css' and treat them
// as objects containing string class names.

declare module "*.module.css" {
  // Use 'readonly' for better type safety, as class names are constant strings.
  const classes: { readonly [key: string]: string };
  export default classes;
}

