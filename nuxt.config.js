import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'FinanceManager',
    title: 'FinanceManager',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
    
  },
  // izitoast: {
  //   position: 'topLeft',
  //   transitionIn: 'bounceInLeft',
  //   transitionOut: 'fadeOutRight',
  // },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/css/demo.css',
    'assets/css/nucleo-icons.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-notification.js", ssr: false },
    { src: "~/plugins/dashboard-plugin.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
    'nuxt-i18n',
    ['@nuxtjs/firebase',
      {
        lazy: true,
        config: {
          apiKey: 'AIzaSyAxKh7Qr2DU2w5weYz1pPnnopa1dgy1qKg',
          authDomain: 'finageapi.firebaseapp.com',
          projectId: 'finageapi',
          storageBucket: 'finageapi.appspot.com',
          messagingSenderId: '149644929001',
          appId: '1:149644929001:web:a0b775d3292efcfb0b4d78',
          measurementId: 'G-ZYTBM992GQ'
        },
        services: {
          storage: true, // Just as example. Can be any other service.
          auth:true
        },
        auth: {
          persistence: 'local', // default
          initialize: {
            onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
            onAuthStateChangedAction: 'onAuthStateChangedAction',
            subscribeManually: false
          },
          ssr: false, // default
          emulatorPort: 9099,
          emulatorHost: 'http://localhost',
        }
      }
    ]
    // 'nuxt-izitoast',
    // '@plugins/vue-notification.js'
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.js'
      },
      {
        code: 'ar',
        file: 'ar.js'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    silentTranslationWarn: process.env.NODE_ENV === 'production'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: "2a1242",
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary:"2a1242"
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    babel: {
      plugins: [
        [
          'component',
          {
            'libraryName': 'element-ui',
            'styleLibraryName': 'theme-chalk'
          }
        ]
      ]
    }
  },
  axios: {
    // baseURL: 'http://localhost:8088'
    baseURL: 'https://finageapi.herokuapp.com/'
  }
}
