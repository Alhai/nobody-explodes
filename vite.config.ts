import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        "theme_color": "#000000",
        icons: [
          {
            src: "icon-72x72.png",
            sizes: "72x72"
          },
          {
            src: "icon-96x96.png",
            sizes: "96x96"
          },
          {
            src: "icon-128x128.png",
            sizes: "128x128"
          }, {
            src: "icon-144x144.png",
            sizes: "144x144"
          },
          {
            src: "icon-152x152.png",
            sizes: "152x152"
          },
          {
            src: "icon-192x192.png",
            sizes: "192x192"
          },
          {
            src: "icon-384x384.png",
            sizes: "384x384"
          },
          {
            src: "icon-512x512.png",
            sizes: "512x512"
          }
        ]
      },
      devOptions: {
        enabled: true
      }
    })
  ],
})
