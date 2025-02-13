import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://www.googleapis.com',
        changeOrigin: true,
        secure: true,
      },
    },
    headers: {
      'Cross-Origin-Embedder-Policy': 'credentialless', // Instead of require-corp
      'Cross-Origin-Opener-Policy': 'same-origin-allow-popups', // Allow popups & third-party scripts
    },
  }
});
