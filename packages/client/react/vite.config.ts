import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [reactRefresh()],
  // 不生效
  alias: [{
    find: 'src',
    replacement: './src',
    // replacement: path.resolve(__dirname, 'src'),
    // customResolver
  }],
  server: {
    cors: true,
    host: process.env.NODE_ENV || '0.0.0.0',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:7002',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  }
})
