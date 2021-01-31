import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // alias: 
  // 代理配置需修改
  server: {
    cors: true,
    proxy: {
      '/api/': {
        target: 'http://localhost:7002',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
