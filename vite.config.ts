import jotaiReactRefresh from "jotai/babel/plugin-react-refresh";
import jotaiDebugLabel from "jotai/babel/plugin-debug-label";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/svg-gradient-editor",
  plugins: [
    react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
