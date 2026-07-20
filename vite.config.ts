import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import type { UserConfig } from 'vite'
import vikeLite from 'vike-lite/vite'
import vikeLiteSvelte from 'vike-lite-svelte/vite'

export default {
  root: 'src',
  cacheDir: '../.vite',
  plugins: [
    tailwindcss(),
    vikeLite({
      serverEntry: 'server/index.ts'
    }),
    vikeLiteSvelte(),
    ...process.env.NODE_ENV === 'production' ? [
      (await import('standaloner/vite')).default({
        bundle: true,
        minify: true
      })
    ] : []
  ],
  server: {
    port: 3000
  },
  build: {
    outDir: '../dist'
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src')
    }
  }
} satisfies UserConfig
