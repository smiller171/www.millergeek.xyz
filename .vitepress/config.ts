import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Scott Miller",
  titleTemplate: "millergeek.xyz",
  description: "Personal Website",
  srcDir: "app",
  cleanUrls: true,
  lastUpdated: true,
  mpa: false,
  async transformHead({ assets }) {
    const Rubik = assets.find(file => file.includes('rubik'))
    const Istok = assets.find(file => file.includes('istok'))
    const Merienda = assets.find(file => file.includes('merienda'))

    let result = []
    if (Rubik) {
      result.push(
        [
          'link',
          {
            rel: 'preload',
            href: Rubik,
            as: 'font',
            type: 'font/woff2',
            crossorigin: ''
          }
        ]
      )
    }
    if (Istok) {
      result.push(
        [
          'link',
          {
            rel: 'preload',
            href: Istok,
            as: 'font',
            type: 'font/woff2',
            crossorigin: ''
          }
        ]
      )
    }
    if (Merienda) {
      result.push(
        [
          'link',
          {
            rel: 'preload',
            href: Merienda,
            as: 'font',
            type: 'font/woff2',
            crossorigin: ''
          }
        ]
      )
    }
    return result
  }
})
