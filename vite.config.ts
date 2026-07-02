import path from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

function devIndexPlugin(): Plugin {
  return {
    name: "dev-index",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url === "/" || req.url === "/index.html") {
          req.url = "/index.dev.html";
        }
        next();
      });
    },
  };
}

export default defineConfig({
  base: process.env.VITE_BASE_PATH?.trim() || "/",
  publicDir: path.resolve(__dirname, "public"),
  plugins: [react(), devIndexPlugin()],
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.dev.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
