import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  base: '/presentation/',
  plugins: [
    UnoCSS({
      mode: 'shadow-dom'
    })
  ],
  build: {
    rollupOptions: {
      external: [
        'node:fs',
        'node:path',
        'node:process',
        'node:module',
        'node:url',
        'node:assert',
        'node:fs/promises',
        'node:v8',
        'node:util',
        'fs',
        'path',
        'process',
        'child_process',
        'stream',
        'readline'
      ],
      output: {
        globals: {
          'node:fs': 'fs',
          'node:path': 'path',
          'node:process': 'process',
          'node:module': 'module',
          'node:url': 'url',
          'node:assert': 'assert',
          'node:fs/promises': 'fsPromises',
          'node:v8': 'v8',
          'node:util': 'util',
          'fs': 'fs',
          'path': 'path',
          'process': 'process',
          'child_process': 'childProcess',
          'stream': 'stream',
          'readline': 'readline'
        },
        manualChunks: {
          'lit': ['lit'],
          'gsap': ['gsap'],
          'chart': ['chart.js']
        }
      }
    }
  },
  define: {
    global: 'globalThis',
  },
  esbuild: {
    target: 'es2020'
  }
})