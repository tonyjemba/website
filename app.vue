<script setup lang="ts">
import { onBeforeMount, onMounted ,ref} from 'vue'
import { useDrawerStore } from '~/stores/drawer'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import KUTE from 'kute.js'
const colorMode = useColorMode()
onBeforeMount(() => {
  colorMode.preference = 'dark'
  colorMode.value = 'dark'
})
onMounted(() => {
  colorMode.preference = 'dark'
  colorMode.value = 'dark'
})
const drawerStore = useDrawerStore()
const breakpoints = useBreakpoints(breakpointsTailwind)
const smallerThanMd = breakpoints.smaller('md')

// fade in
const overlay = ref(null)
let fadeInTween = KUTE.to(overlay.value, { opacity: 1 })
</script>

<template>
  <div class="$dark-mode relative"  >
    <!-- Drawer Overlay -->
    <div ref="overlay" class="fixed top-0 z-30 " v-show="drawerStore.isOpen && smallerThanMd && fadeInTween.start()">
      <div  class="h-screen w-screen absolute top-0 left-0 icy   "></div>
    </div>
    <Navigation />
    <Hero />
    <div>
      <AboutMe />
      <ProjectSection />
      <ContactSection />
    </div>
    <footer>
      <TheFooter />
    </footer>
  </div>
</template>

<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: rgb(6, 20, 40);
  color: #8892B0;

}
.light-mode body {
  background-color: #f1f1f1;

}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
.icy{
  background: linear-gradient(135deg, rgba(6, 20, 40,0.1), rgba(6, 20, 40,0));
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
}
</style>
