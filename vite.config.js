import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  outDir: 'build',
  base:'/E-Commerce',
  plugins: [react()],
})
