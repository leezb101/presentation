import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS({
      mode: 'shadow-dom'
    })
  ],
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