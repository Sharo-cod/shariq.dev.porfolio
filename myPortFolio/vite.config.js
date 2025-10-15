import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/myPortFolio/',
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.JPG', '**/*.jpg'],
})
