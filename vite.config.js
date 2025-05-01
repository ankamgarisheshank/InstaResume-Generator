import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['jspdf'], // Mark jspdf as an external dependency
    },
  },
});