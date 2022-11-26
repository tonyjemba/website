<script setup lang="ts">
import { onBeforeMount, onMounted } from 'vue'
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
    <TheNavigation />
    <TheHero />
    <div>
      <TheProjectSection />
      <TheAboutMe />
    </div>
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
