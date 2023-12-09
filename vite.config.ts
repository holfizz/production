import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgLoader from "vite-svg-loader"
import legacy from "@vitejs/plugin-legacy"

export default defineConfig({
    plugins: [
        svgLoader(),
        react(),
        legacy({
            targets: ["defaults", "not IE 11"],
        }),
    ],
    resolve: {
        alias: [{ find: "@", replacement: "/src" }],
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify("http://localhost:8000"),
        __PROJECT__: JSON.stringify("frontend"),
    },
    server: {
        port: 8000,
        open: true,
    },
})
