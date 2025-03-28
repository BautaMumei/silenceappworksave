import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/silenceapp/', // 👈 cette ligne est ESSENTIELLE pour GitHub Pages
  plugins: [react()],
})
