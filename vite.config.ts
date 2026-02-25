import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssr: {
    // react-helmet-async's ESM file is not resolvable by Node.js v24's ESM loader.
    // Bundling it into the SSR output lets Rollup handle the interop (same as client build).
    noExternal: ["react-helmet-async"],
  },
}));
