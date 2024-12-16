import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config(); // .envファイルの環境変数をロード

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react', 'openai'], // openaiをViteの依存関係最適化から除外
  },
  server: {
    port: 5173, // 開発サーバーのポート
  },
  define: {
    // Viteで環境変数を明示的に定義
    'process.env': process.env,
  },
});
