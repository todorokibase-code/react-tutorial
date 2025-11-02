import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-tutorial/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        contact: './contact.html',
        home: './home.html',
        filterableproducttable: './filterableproducttable.html',
      }
    }
  }

})
