import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
