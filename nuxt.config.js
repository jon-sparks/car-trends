import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    'nuxt-highcharts',
  ],
  css: [
    '@/assets/styles/style.scss',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ]
})
