export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sammiekei-Portfolio',
    htmlAttrs: {
      lang: 'en',
      dir:"ltr"
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {'http-equiv':"x-ua-compatible",  content:"IE=edge"}
    ],
    link: [
      {rel:"stylesheet", href:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css", integrity:"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3", crossorigin:"anonymous" },
      {rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css", integrity:"sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==", crossorigin:"anonymous", referrerpolicy:"no-referrer"},
      {rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto&family=Saira+Stencil+One&text=SammieKei&display=swap"},
      {rel:"apple-touch-icon", sizes:"180x180", href:"favicon/apple-touch-icon.png"},
      {rel:"icon" ,type:"image/png", sizes:"32x32", href:"favicon/favicon-32x32.png"},
      {rel:"icon", type:"image/png" ,sizes:"16x16" ,href:"favicon/favicon-16x16.png"},
     {rel:"manifest", href:"favicon/site.webmanifest"}
    ],
    script: [
      {
        src: "/js/plugins.min.js",
        type: "text/javascript",
        body: true, 
        defer: true
      },
     
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/directive.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
