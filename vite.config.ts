import jotaiReactRefresh from "jotai/babel/plugin-react-refresh";
import jotaiDebugLabel from "jotai/babel/plugin-debug-label";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
export default defineConfig({
  base: "/svg-gradient-editor",
  plugins: [
    tailwindcss(),
    react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
  ],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
  },
});
