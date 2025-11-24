import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {
  fromFileUrl,
  resolve,
} from "https://deno.land/std@0.211.0/path/mod.ts";

const __dirname = fromFileUrl(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [
    react(),
  ],

  build: {
    outDir: "dist",
    cssCodeSplit: true,

    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "LayerStackTooltip",
      fileName: (format) => `index.${format}.js`,
      // formats: ["es", "umd"],
      formats: ["es"],
    },

    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
