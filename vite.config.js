import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ciam-demo/',
  plugins: [react()],
  server: {
    // Ensure all routes fall back to index.html for SPA routing
    historyApiFallback: true,
  },
  preview: {
    // Also configure for preview mode
    historyApiFallback: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
})
