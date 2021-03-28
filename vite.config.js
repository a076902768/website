import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const pathSrc = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // __dirname, "src" 代表 /@/ 從src資料夾開始
      "/@": path.resolve(__dirname, "src"),
    }
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "${pathSrc}/scss/variables";` },
    },
  },
})
