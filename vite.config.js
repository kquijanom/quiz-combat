import { defineConfig } from 'vite'

export default defineConfig({
  root: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    minify: false,
    copyPublicDir: false,
    lib: {
      entry: 'index.html',
      formats: []
    }
  },
  server: {
    port: 3000,
    open: true,
    middlewareMode: false
  }
})
