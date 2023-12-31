// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'vue3-carousel-nuxt', 'nuxt3-leaflet'],
  css: ['~/assets/css/global.css', '~/assets/css/icon.css']
  
})
