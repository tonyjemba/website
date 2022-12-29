<script lang="ts" setup>
import { useElementHover } from '@vueuse/core'

//hovering listner
const myHoverableElement = ref()
const isHovered = useElementHover(myHoverableElement)
</script>

<template>
  <div class="w-64 h-64  lg:h-80 lg:w-80 border-2 rounded bcolor relative">
    <div ref="myHoverableElement"
      class="w-64 h-64  lg:h-80 lg:w-80  bpic bg-cover bg-no-repeat bg-center rounded absolute bottom-4 right-4  grayscale hover:grayscale-0"
      :class="`${isHovered ? '-translate-y-2 -translate-x-2 duration-700 ' : 'translate-y-2 translate-x-2 duration-700 ease-in-out'}`" />
  </div>
</template>

<style scoped>
.bcolor {
  border-color: #00FFE1;
}

.bpic {
  background-image: url('~/assets/mypic.PNG');
}
</style>
