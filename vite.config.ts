import { defineConfig } from "vite"
import reactPlugin from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    exclude: ["e2e/**/*.ts", "e2e/**/*.tsx"],
  },
  server: {
    port: 5173,
    host: "0.0.0.0",
  },
  plugins: [reactPlugin(), svgr({ svgrOptions: { icon: true } })],
})
