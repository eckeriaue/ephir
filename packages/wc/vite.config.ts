
import { fileURLToPath, URL } from 'url'
import { join } from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    emptyOutDir: false,
    outDir: '../server/public/wc',
    lib: {
      name: 'wc',
      fileName: (format, name) => {
        return `${name}.${format === 'es' ? 'js' : 'umd.cjs'}`
      },
      entry: join(__dirname, './src/index.ts'),
    },
  },
})
