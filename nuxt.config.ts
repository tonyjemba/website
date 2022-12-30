// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [['@nuxtjs/robots', { UserAgent: '*', Allow:'/' }],'@nuxtjs/color-mode', '@nuxtjs/tailwindcss', 'nuxt-svgo', '@pinia/nuxt','@vueuse/nuxt',
  ['@nuxtjs/google-fonts',{families:{
      'Open+Sans': [400, 500],
      'Jost': [500],
    }}]],
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
  },
    app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Tony Jemba',
      meta: [
        { name: 'Tony Jemba',
        content: 'This is my personal portfolio website',
        hid:'Tony Jemba is a software Engineer from kampala who is so passionate and dedicated to his work'
       }
      ],
    }
  },
  typescript: {
    strict: true,
  },

})
