export default defineNuxtConfig({
  compatibilityDate: '2025-10-29',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint'
  ],
  debug: false,
  ssr: true,
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
        { name: 'name', content: 'content' }
      ],
    },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  srcDir: 'src/',
})
