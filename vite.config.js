import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), viteSingleFile()],
  base: './',
  build: {
    assetsInlineLimit: 1000000, // 将小于1MB的资源内联为base64
  }
})
