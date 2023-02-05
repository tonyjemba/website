import KUTE from 'kute.js'
import { defineNuxtPlugin } from 'nuxt/dist/app/nuxt'

export default defineNuxtPlugin(nuxtApp => nuxtApp.vueApp.use(KUTE))
