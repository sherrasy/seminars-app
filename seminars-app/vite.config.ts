import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  base:'/seminars-app/',
  plugins: [react(),  tailwindcss(), svgr({ svgrOptions: { icon: true } })],
  server: {
    open: true,
    port: 4001,
  },
})
