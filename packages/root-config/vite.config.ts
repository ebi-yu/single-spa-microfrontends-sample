import path from "node:path";
import { defineConfig, loadEnv, type UserConfigExport } from "vite";

import pkg from "./package.json";

export default defineConfig(({ mode }) => {
  const port = 3334;
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const config: UserConfigExport = {
    base: process.env.VITE_BASE_PATH,

    resolve: {
      alias: {
        "@root-config": path.resolve(__dirname, "src"),
      },
    },
    server: {
      port,
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, "./src/main.ts"),
        fileName: "[name]",
        name: "",
      },
      rollupOptions: {
        external: Object.keys(pkg.dependencies || {}),
        output: [
          {
            dir: "dist/es",
            format: "es",
            preserveModules: true,
            preserveModulesRoot: path.join(__dirname, ""),
          },
        ],
      },
    },

    define: {
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    },
  };
  return config;
});
