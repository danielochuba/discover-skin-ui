import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import * as path from "path";
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
    extensions: [".mjs", ".js", ".jsx", ".json", ".ts", ".tsx"],
  },
})
