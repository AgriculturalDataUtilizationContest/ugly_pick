import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import tailwindcss from "tailwindcss";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    ...(mode === "development" ? [screenGraphPlugin()] : [])
  ],
  publicDir: "./static",
  base: "./",
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
}));