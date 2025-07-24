import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',  // <-- Important for correct path resolving on Vercel
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
