// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.avif', '**/*.webp'],
   base: '/',
  
   build: {
    assetsInlineLimit: 4096,  
  },
  
   optimizeDeps: {
    include: ['**/*.avif']
  }
});
 