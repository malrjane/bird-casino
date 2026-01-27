// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.avif', '**/*.webp'],
   base: '/bird-casino/',
  
  // Добавьте явную обработку avif
  build: {
    assetsInlineLimit: 4096, // Файлы меньше 4kb инлайнятся
  },
  
  // Явно указываем обработчики
  optimizeDeps: {
    include: ['**/*.avif']
  }
});
 