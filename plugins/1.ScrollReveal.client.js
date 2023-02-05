import ScrollReveal from 'scrollreveal'
import { defineNuxtPlugin } from 'nuxt/dist/app/nuxt'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      ScrollReveal,
    },
  }
})
