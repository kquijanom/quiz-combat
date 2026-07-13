import { defineConfig } from 'vite'

export default defineConfig({
  root: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    minify: false,
    copyPublicDir: false,
    rollupOptions: {
      input: {
        main: './public/index.html'
      },
      output: {
        dir: '../dist'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
