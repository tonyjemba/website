<script setup lang="ts">
import LightIcon from '~/assets/sun.svg'
import DarkIcon from '~/assets/moon.svg'
interface Props {
  isOpen: Boolean
}
const props = defineProps<Props>()
const colorMode = useColorMode()
</script>

<template>
  <div class="fixed z-40 top-0 right-0 h-screen p-4 overflow-y-auto drawerbg sm:w-3/5 w-4/5 " :class="props.isOpen ? 'onScreen' : 'offScreen'">
    <div class="flex flex-col gap-y-8 w-full h-full justify-center items-center ">
      <div class=" font-jost font-medium cursor-pointer sm:text-2xl text-xl textLcolor">
        Home
      </div>
      <div class=" font-jost font-medium cursor-pointer sm:text-2xl text-xl textLcolor">
        Projects
      </div>
      <div class=" font-jost font-medium cursor-pointer sm:text-2xl text-xl textLcolor">
        About Me
      </div>
      <div class=" font-jost font-medium cursor-pointer sm:text-2xl text-xl textLcolor">
        Blog
      </div>
      <div class=" font-jost font-medium cursor-pointer sm:text-2xl text-xl textLcolor">
        Contact
      </div>
      <div class="flex gap-x-11 pt-8">
        <div class="cursor-pointer textLcolor border rounded resume-btn ">
          <div class="text-center mt-1 mb-2 mr-3 ml-3 colored">
            Resume
          </div>
        </div>
        <div class="flex items-center">
          <DarkIcon v-show="colorMode.value === 'light'" class="cursor-pointer iconColor iconModeColor" @click="colorMode.value = 'dark'" />
          <LightIcon v-show="colorMode.value === 'dark'" class="cursor-pointer iconColor iconModeColor " @click="colorMode.value = 'light'" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.drawerbg {
 background-color:#596c90 ;
}
.offScreen {
    transform: translateX(100%);
    transition: transform .5s ease ;
}
.onScreen {
    transform: translateX(0%);
    transition: transform .5s ease ;
}

.textLcolor {
  color: black;
  transition: color .3s ease-in-out;
}
.textLcolor:hover {
  color: #00FFE1;
  transition: color .3s ease-in-out;
}
.dark-mode .textLcolor {
  color: #8892B0;
  transition: color .3s ease-in-out;
}
.dark-mode .textLcolor:hover {
  color: #00FFE1;
  transition: color .3s ease-in-out;
}
.resume-btn {
  border-color: #00FFE1;
  background-color: #00ffe100;
  transition: background-color .3s ease-in-out;
}
.resume-btn:hover {
  background-color: #00ffe11a;
  transition: background-color .3s ease-in-out;
}
.iconColor {
  fill: black;
   transition: color .3s ease-in-out;
}
.iconColor:hover {
   fill: #00FFE1;
   transition: color .3s ease-in-out;
}
.dark-mode .iconModeColor {
 fill: #8892B0
}
.dark-mode .colored {
    color: #00FFE1;
}
</style>
