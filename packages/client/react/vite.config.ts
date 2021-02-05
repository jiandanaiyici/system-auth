import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite';
// import path from 'path';
// import resolve from '@rollup/plugin-node-resolve';


// const customResolver = resolve({
//   extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss']
// });
// const projectRootDir = path.resolve(__dirname);
// https://vitejs.dev/config/
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
    proxy: {
      '/api': {
        target: 'http://localhost:7002',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  }
})
