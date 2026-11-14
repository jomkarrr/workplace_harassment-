import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps the built site working from any sub-path,
// e.g. GitHub Pages (username.github.io/workplace_harassment-/)
export default defineConfig({
  plugins: [react()],
  base: './',
})
