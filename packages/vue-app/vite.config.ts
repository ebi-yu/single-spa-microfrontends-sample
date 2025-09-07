import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import vueDevTools from "vite-plugin-vue-devtools";
import { version } from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  preview: {
    port: 4173,
  },
  plugins: [vue(), vueDevTools(), cssInjectedByJsPlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: "src/main.ts",
      output: {
        entryFileNames: `assets/${version}-[name].js`,
        chunkFileNames: `assets/${version}-[name].js`,
        assetFileNames: `assets/${version}-[name].[ext]`,
        format: "system",
      },
      external: ["vue"],
      preserveEntrySignatures: "strict",
      plugins: [],
    },
    sourcemap: false,
  },
});
