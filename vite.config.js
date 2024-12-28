import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import laravel from 'laravel-vite-plugin'

export default defineConfig({
    plugins: [
        UnoCSS(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
})
