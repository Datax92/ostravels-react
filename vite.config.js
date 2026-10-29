import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Rolldown's native chunk groups (manualChunks doesn't reliably catch
        // React's CommonJS files, which then got bundled into the lazy
        // framer-motion chunk and loaded on every page).
        codeSplitting: {
          groups: [
            { name: "react-vendor", test: /[\/]node_modules[\/](react|react-dom|scheduler)[\/]/, priority: 30 },
            { name: "react-router", test: /[\/]node_modules[\/](react-router|react-router-dom)[\/]/, priority: 20 },
            { name: "framer-motion", test: /[\/]node_modules[\/](framer-motion|motion-dom|motion-utils)[\/]/, priority: 10 },
          ],
        },
      },
    },
  },
})
