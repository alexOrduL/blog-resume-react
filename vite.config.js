import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    },
    assetsInlineLimit: 4096
  },
  server: {
    port: 3000
  },
  base: './',
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets'
    }
  }
})