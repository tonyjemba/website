// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', 'nuxt-svgo', '@pinia/nuxt'],
  buildModules: [
    '@nuxtjs/google-fonts',
  ],
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
  },
  googleFonts: {
    families: {
      'Open+Sans': [400, 500],
      'Jost': [500],
    },
  },
  typescript: {
    strict: true,
  },
})