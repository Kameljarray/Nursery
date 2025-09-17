import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

const manifestIcons = [
  {
    src: 'pwa-192.png',
    sizes: '192x192',
    type: 'image/png',
  },
  {
    src: 'pwa-512.png',
    sizes: '512x512',
    type: 'image/png',
  }
]
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My Awesome App',
        short_name: 'PWA App',
        icons: manifestIcons,
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
