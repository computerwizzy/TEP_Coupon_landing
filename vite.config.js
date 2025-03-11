import { defineConfig } from 'vite';

export default defineConfig({
  // ...existing code...
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
  // ...existing code...
});
