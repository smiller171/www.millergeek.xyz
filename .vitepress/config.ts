import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Scott Miller",
  titleTemplate: "millergeek.xyz",
  description: "Personal Website",
  srcDir: "app",
  cleanUrls: true,
  lastUpdated: true
})
