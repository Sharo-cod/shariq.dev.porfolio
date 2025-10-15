import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/myPortFolio/", // 👈 replace with your repo name
  assetsInclude: ["**/*.JPG", "**/*.jpg"],
});
