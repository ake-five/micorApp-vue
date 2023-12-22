// vite.config.js
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

export default defineConfig({
  base: 'micorApp-vue',
  build: {
    outDir: 'docs'
  },
  plugins: [
    vue(),
    qiankun('micorApp-vue', { // 微应用名字，与主应用注册的微应用名字保持一致
      useDevMode: true
    })
  ],
  server: {
    port: 3002 // 微应用端口号，与主应用注册的微应用保持一致
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})