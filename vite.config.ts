import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: {
    sourcemap: false,
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    host: true,
    port: 5174,
    watch: {
      usePolling: true,
    },
  },
});
