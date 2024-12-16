import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables in .env file

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react', 'openai'], // Exclude openai from Vite dependency optimization
  },
  server: {
    port: 5173, // Development Server Port
  },
  define: {
    // Explicitly define environment variables in Vite
    'process.env': process.env,
  },
});
