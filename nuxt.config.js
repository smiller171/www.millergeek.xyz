module.exports = {
  srcDir: 'app/',
  css: [
    'assets/main.css',
    'vuetify/dist/vuetify.min.css'
  ],
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/vue-async-computed'
  ],
  render: {
    static: {
      maxAge: 604800000
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'www.millergeek.xyz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal Website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merienda+One|Rubik|Istok+Web' }
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
    }
  }
};
