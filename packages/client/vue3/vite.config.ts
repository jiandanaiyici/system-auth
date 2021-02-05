import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import proxy from 'koa-proxy';

// export default {
//   plugins: [vue()],
//   // configureServer: ({ app }) => app.use(proxy({
//   //   host: 'http://localhost:7002',
//   //   match: /^\/api\//
//   // })),
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://127.0.0.1:7002/',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, '')
//       }
//     }
//   }
// } as UserConfigExport

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // alias: 
  // 代理配置需修改
  server: {
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:7002',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  }
})
