<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { ref ,onMounted} from 'vue'
import { onClickOutside } from '@vueuse/core'
import LogoLight from '~/assets/logo-light.svg'
import Logodark from '~/assets/logo-dark.svg'
import LightIcon from '~/assets/sun.svg'
import DarkIcon from '~/assets/moon.svg'
import { useDrawerStore } from '~~/stores/drawer'

const breakpoints = useBreakpoints(breakpointsTailwind)
const mdAndLarger = breakpoints.greaterOrEqual('md')
const smallerThanMd = breakpoints.smaller('md')

let { isOpen } = storeToRefs(useDrawerStore())

const colorMode = useColorMode()
const store = useDrawerStore()

const target = ref(null)
//click outside drawer to close it
onClickOutside(target, () => store.isOpen = false)

//animations
onMounted(()=>{
  //logo
  useScrollReveal('.logo', '10px', 'top', 100, 1000)
  //navigation menu
  useScrollReveal('.navMenu1','30px','top',300,1000)
  useScrollReveal('.navMenu2', '30px', 'top', 400, 1000)
  useScrollReveal('.navMenu3', '30px', 'top', 500, 1000)
  useScrollReveal('.navMenu4', '30px', 'top', 600, 1000)
  useScrollReveal('.navMenu5', '30px', 'top', 700, 1000)
  useScrollReveal('.navMenu6', '30px', 'top', 800, 1000)
  useScrollReveal('.navMenu7', '30px', 'top', 1000, 1000)

})
</script>

<template>
  <div class="w-full z-30  absolute">
    <div class="w-11/12 flex justify-between  mx-auto  pt-8 pb-4">
      <div v-show="colorMode.value === 'light'" class=" flex items-center  cursor-pointer">
        <LogoLight />
      </div>
      <div v-show="colorMode.value === 'dark'" class="logo flex items-center cursor-pointer animate-fadeInImage">
        <Logodark />
      </div>
      <div class="  flex ">
        <!-- medium and above screens -->
        <div v-show="mdAndLarger"  class=" flex  gap-x-8 justify-end items-center font-jost font-medium text-base  ">
          <a class="cursor-pointer textLcolor navMenu1 " ref="home">
            Home
          </a>
          <a class="cursor-pointer textLcolor navMenu2" href="#about">
            About Me
          </a>
          <a class="cursor-pointer textLcolor navMenu3" href="#projects">
            Projects
          </a>
          <a class="cursor-pointer textLcolor navMenu4" href="https://medium.com/@tonyjemba" target="_blank">
            Blog
          </a>
          <a class="cursor-pointer textLcolor navMenu5" href="#contact">
            Contact
          </a>
          <div class=" navMenu6 cursor-pointer textL2color bg-opacity-0 border rounded border-mycyan ">
            <div class="text-center pt-2 pb-2 pl-3 pr-3 ">
              Resume
            </div>
          </div>
          <div class="navMenu7">
            <DarkIcon v-show="colorMode.value === 'light'" class="cursor-pointer iconColor iconModeColor"
              @click="colorMode.value = 'dark'" />
            <LightIcon v-show="colorMode.value === 'dark'" class="cursor-pointer iconColor iconModeColor "
              @click="colorMode.value = 'light'" />
          </div>
        </div>
        <!-- below medium screens -->
        <div ref="target" v-show="smallerThanMd" class="flex justify-end z-50  ">
          <NavigationDrawerIcon  :status="store.changeStatus" />
          <NavigationDrawer  :is-open="isOpen" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.textLcolor {
  color: black;
  transition: color .3s ease-in-out;
}

.textL2color:hover {
  color: #00FFE1;
  background-color: #00ffe11a;
  transition: color .3s ease-in-out;
}

.iconColor {
  fill: black;
  transition: color .3s ease-in-out;
}

.iconColor:hover {
  fill: #00FFE1;
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

.dark-mode .iconModeColor {
  fill: #8892B0
}

.dark-mode .iconModeColor:hover {
  fill: #00FFE1;
  transition: color .3s ease-in-out;
}
</style>
