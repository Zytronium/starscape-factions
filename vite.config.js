import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { ViteReactSSG } from "vite-react-ssg"

export default defineConfig({
  plugins: [
    react(),
    ViteReactSSG({
      script: "async",
      dirStyle: "nested",
    })
  ]
})
