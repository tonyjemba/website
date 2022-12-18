<script setup lang="ts">
import { onBeforeMount, onMounted } from 'vue'
import gsap from 'gsap'
// import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

//registering gsap plugin for morphing svgs in the hero section
// gsap.registerPlugin(MorphSVGPlugin);

const colorMode = useColorMode()
onBeforeMount(() => {
  colorMode.preference = 'dark'
  colorMode.value = 'dark'
})
onMounted(() => {
  colorMode.preference = 'dark'
  colorMode.value = 'dark'
})
</script>

<template>
  <div class="$dark-mode">
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
  background-color: #061428;
  color: #8892B0;

}
.light-mode body {
  background-color: #f1f1f1;

}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
