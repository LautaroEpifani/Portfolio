import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://lautaroepifani.github.io/Portfolio/src/index.html",
  plugins: [react()],
  assetsInclude: ['**/*.mp4'],
})
