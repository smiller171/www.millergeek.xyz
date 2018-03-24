module.exports = {
  srcDir: 'app/',
  css: [
    'assets/main.scss'
  ],
  modules: [
    '@nuxtjs/pwa'
  ],
  vuetify: {
    theme: {
      primary: '#691b99',
      secondary: '#e1e2e1',
      accent: '#00b0ff'
    },
    css: true,
    materialIcons: false
  },
  render: {
    http2: {
      push: true
    }
  },
  manifest: {
    theme_color: '#691b99',
    start_url: '/about/',
    short_name: 'MillerGeek'
  },
  plugins: [
    '@/plugins/vuetify'  
  ]
  /*
  ** Headers of the page
  */
  head: {
    title: 'millergeek.xyz',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal Website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', as: 'font', href: 'https://fonts.googleapis.com/css?family=Merienda+One%7CRubik%7CIstok+Web' }
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
      config.module.rules.push({
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: {
          wrapper: 'div'
        }
      });
    }
  }
};
