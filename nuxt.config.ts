export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  debug: false,
  ssr: false,
  experimental: {
    treeshakeClientOnly: false
  },
  runtimeConfig: {
    secret: '',
    public: {
      baseURL: ''
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      charset: 'utf-8',
      viewport: 'initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width',
      title: 'My App',
      meta: [
        { name: 'description', content: 'content' }
      ],
    },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  srcDir: 'src/',
})
