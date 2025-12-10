import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js'
            ],
            refresh: true,
            // fuerza que la URL de los assets sea relativa
            // así Laravel + Vite no generará http:// sino https://
            publicDirectory: 'public',
        }),
    ],
    server: {
        // Esto es útil solo para dev local
        https: true,
    },
    build: {
        // fuerza que Vite use rutas relativas para producción
        assetsDir: 'build/assets',
        rollupOptions: {
            output: {
                entryFileNames: 'build/assets/[name]-[hash].js',
                chunkFileNames: 'build/assets/[name]-[hash].js',
                assetFileNames: 'build/assets/[name]-[hash].[ext]',
            },
        },
    },
});