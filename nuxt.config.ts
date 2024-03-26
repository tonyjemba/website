// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-vercel-analytics', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss', 'nuxt-svgo', '@pinia/nuxt', '@vueuse/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        'Open+Sans': [400, 500],
        'Jost': [500],
      },
    }]],
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Tony Jemba',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          hid: 'description',
          content: 'As a passionate and experienced software engineer, I am dedicated to delivering innovative and efficient solutions that meet the needs of modern businesses.',
        },
        {
          name: 'og: title',
          hid: 'og: title',
          content: 'Tony Jemba',
        },
        {
          name: 'og: description',
          hid: 'og: description',
          content: 'As a passionate and experienced software engineer, I am dedicated to delivering innovative and efficient solutions that meet the needs of modern businesses.',
        },

      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
  typescript: {
    strict: true,
  },

})
