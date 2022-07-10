import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        // apiKey: JSON.stringify(import.meta.env.VITE_API_KEY),
    },
});
