import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    cors: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5555",
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
