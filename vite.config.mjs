import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 2000,
  },
  plugins: [
    tsconfigPaths(),
    react(),
    tagger(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [],
      manifestFilename: "site.webmanifest",
      manifest: {
        name: "Marcelo Baía Advocacia",
        short_name: "MB Advocacia",
        description:
          "Assessoria jurídica em Rondonópolis/MT especializada em Direito Civil, Consumidor, Família e Empresarial.",
        theme_color: "#000000",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
      },
      pwaAssets: {
        preset: "minimal",
        image: "src/assets/logo.svg",
        outDir: "public",
      },
    }),
  ],
  server: {
    port: "4028",
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: ['.amazonaws.com']
  }
});

