import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'lit': ['lit'],
          'gsap': ['gsap'],
          'chart': ['chart.js']
        }
      }
    }
  },
  esbuild: {
    target: 'es2020'
  }
})