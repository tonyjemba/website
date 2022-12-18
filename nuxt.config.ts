// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', 'nuxt-svgo', '@pinia/nuxt',
  ['@nuxtjs/google-fonts',{families:{
      'Open+Sans': [400, 500],
      'Jost': [500],
    }}]],
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
  },
  typescript: {
    strict: true,
  }
})
