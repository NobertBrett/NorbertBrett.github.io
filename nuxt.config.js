export default {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: 'Norbert Brett',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'My personal Blog'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,700&family=Poppins:wght@500;700&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Docs: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Docs: https://github.com/nuxt-community/analytics-module
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-177350053-1'
      }
    ],
    // Docs: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Docs: https://github.com/nuxt-community/tailwindcss-module
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxt/content',
    '@nuxtjs/axios',
    '@nuxtjs/feed',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Feed module configuration
   ** See https://github.com/nuxt-community/feed-module
   */
  feed: [

  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    fallback: '404.html',
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content('blog').fetch()

      return files.map((file) => (file.path === '/index' ? '/' : file.path))
    }
  }
}
