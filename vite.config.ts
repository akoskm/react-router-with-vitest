/// <reference types="vitest" /> 

import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [!process.env.VITEST && reactRouter(), tsconfigPaths()],
  test: {
    globals: true,
    setupFiles: './test/setup.ts',
    environment: 'jsdom',
  },
});
