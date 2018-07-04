const { InMemoryCache } = require('apollo-cache-inmemory')
const cache = new InMemoryCache()

module.exports = {
  /*
  ** Build configuration
  */
  build: {},
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://outpost-gql-server.now.sh/en-prod',
        cache
      },
      pt: {
        httpEndpoint: 'http://localhost:4000/pt-prod'
      }
    }
  }
}
