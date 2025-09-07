import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { version } from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  preview: {
    port: 4174,
  },
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    rollupOptions: {
      input: "src/main.tsx",
      output: {
        entryFileNames: `assets/${version}-[name].js`,
        chunkFileNames: `assets/${version}-[name].js`,
        assetFileNames: `assets/${version}-[name].[ext]`,
        format: "system",
      },
      external: ["react", "react-dom"],
      preserveEntrySignatures: "strict",
      plugins: [],
    },
    sourcemap: false,
    assetsInlineLimit: 0,
  },
  assetsInclude: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif"],
});
