import { defineNuxtPlugin } from 'nuxt/dist/app/nuxt'

export default defineNuxtPlugin((/* nuxtApp */) => {
  // manually add the script to the DOM
  const script = document.createElement('script')
  script.src
    = 'https://cdn.jsdelivr.net/npm/mariordev/mailtoui@1.0.3/dist/mailtoui-min.js'
  script.async = 'async'
  document.head.appendChild(script)
})
