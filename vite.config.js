import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Animate-Css/',
  build: {
    outDir: 'docs',
  },
  server: {
    open: true,
  },
})