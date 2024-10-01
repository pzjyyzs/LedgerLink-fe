import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { svgstore } from './src/vite_plugin/svgstore'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/LedgerLink-fe/dist/',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [
    vue(),
    vueJsx({
      transformOn: true, 
      mergeProps: true
    }),
    svgstore(),
  ]
})
