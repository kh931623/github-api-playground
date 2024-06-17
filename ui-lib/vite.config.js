import {
  resolve
} from 'path';

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.js'),
      name: 'UiLib',
      fileName: 'ui-lib',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
      ],
      output: {
        globals: {
          react: 'React',
          "react-dom": "ReactDOM"
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
})
