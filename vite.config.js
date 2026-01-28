// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'node:process';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.avif', '**/*.webp'],
base: process.env.NODE_ENV === 'production' ? '/bird-casino/' : '/',  
   build: {
    assetsInlineLimit: 4096,  
  },
  
   optimizeDeps: {
    include: ['**/*.avif']
  }
});
 