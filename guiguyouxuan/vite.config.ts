import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
  createSvgIconsPlugin({
    // Specify the icon folder to be cached
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    // Specify symbolId format
    symbolId: 'icon-[dir]-[name]'
   
  }
  )
  ],
  resolve: {
    alias: {
      find: '@',
      replacement: resolve(__dirname, './src')
    }
  }
})
