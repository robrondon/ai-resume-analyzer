import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  publicDir: 'public', // Aseguramos que public es el directorio de archivos estáticos
  server: {
    watch: {
      usePolling: true, // Mejora la detección de cambios
    },
  },
})
