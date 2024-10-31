import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import { defineConfig } from 'vite'

/** @type {import('vite').Config} */
export default defineConfig({
  plugins: [vue()],
  build: {
    emptyOutDir: false,
    outDir: '../server/public/wc',
    lib: {
      name: 'wc',
      fileName: (format, name) => {
        return `${name}.${format === 'es' ? 'js' : 'umd.cjs'}`
      },
      entry: join(__dirname, './src/main.js'),
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})

