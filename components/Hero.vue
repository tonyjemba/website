<script setup lang="ts">
import Landscapedark from '~/assets/land5.svg'
import Landscapelight from '~/assets/landlight3.svg'

const colorMode = useColorMode()
</script>

<template>
  <div>
    <div class="w-full h-screen bg-cover bg-no-repeat bg-center " :class="`${colorMode.value === 'light' ? 'bgLight' : 'bgDark'}`">
      <div class="w-full h-full  flex flex-col justify-end">
        <div>The header text goes here second</div>
        <div class="w-full">
          <div v-show="colorMode.value === 'light'">
            <Landscapelight class="w-full  " />
          </div>
          <div v-show="colorMode.value === 'dark'">
            <Landscapedark class="w-full   " />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bgLight {
  background-image: url('~/assets/header_Image.webp');
}
.bgDark {
  background-image: url('~/assets/hero.webp');
  -webkit-transition: background-image 0.3s ease-in-out;
-moz-transition: background-image 0.3s ease-in-out;
-o-transition: background-image 0.3s ease-in-out;
-ms-transition: background-image 0.3s ease-in-out;
  transition: background-image 0.3s ease-in-out;
}
</style>
