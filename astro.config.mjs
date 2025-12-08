// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://srinivas.ai', // Replace with your actual domain
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});