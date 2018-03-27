const nodeExternals = require('webpack-node-externals');
// const resolve = (dir) => require('path').join(__dirname, dir);

module.exports = {
  srcDir: 'app/',
  css: [
    'vuetify/src/stylus/app.styl',
    'assets/main.scss'
  ],
  modules: [
    '@nuxtjs/pwa'
  ],
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
  ],
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
      { rel: 'preconnect', href: 'https://fonts.gstatic.com/', crossorigin: 'crossorigin'},
      { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css?family=Merienda+One%7CRubik%7CIstok+Web' }
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
    babel: {
      plugins: [
        ['transform-imports', {
          'vuetify': {
            'transform': 'vuetify/es5/components/${member}',
            'preventFullImport': true
          }
        }]
      ]
    },
    vendor: [
      '@/plugins/vuetify.js'
    ],
    extend (config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
      if (isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ];
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
