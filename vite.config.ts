import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/bournecreative.github.io/react-text-animations/",
  plugins: [react()],
})
