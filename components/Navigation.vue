<script setup lang="ts">
import { breakpointsTailwind, onClickOutside, useBreakpoints } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import LogoLight from '~/assets/logo-light.svg'
import Logodark from '~/assets/logo-dark.svg'
import LightIcon from '~/assets/sun.svg'
import DarkIcon from '~/assets/moon.svg'
import { useDrawerStore } from '~~/stores/drawer'
import { useNavigationAnimation } from '~~/stores/navigationAnimation'

const breakpoints = useBreakpoints(breakpointsTailwind)
const mdAndLarger = breakpoints.greaterOrEqual('md')
const smallerThanMd = breakpoints.smaller('md')
const { isOpen } = storeToRefs(useDrawerStore())
const colorMode = useColorMode()
const store = useDrawerStore()
const animationStore = useNavigationAnimation()
// animations
const showElem = ref(false)
const closeTarget = ref(null)

// click outside drawer to close it
onClickOutside(closeTarget, () => store.isOpen = false)

onMounted(() => {
  setTimeout(() => { showElem.value = true }, 100)
  // logo
  useScrollReveal('.logo', '10px', 'top', 100, 1000)
  // navigation menu
  useScrollReveal('.navMenu1', '30px', 'top', 100, 500)
  useScrollReveal('.navMenu2', '30px', 'top', 200, 500)
  useScrollReveal('.navMenu3', '30px', 'top', 300, 500)
  useScrollReveal('.navMenu4', '30px', 'top', 400, 500)
  useScrollReveal('.navMenu5', '30px', 'top', 500, 500)
  useScrollReveal('.navMenu6', '30px', 'top', 600, 500)
  useScrollReveal('.navMenu7', '30px', 'top', 800, 500)
  useScrollReveal('.nav', '500px', 'bottom', 800, 500)

  setTimeout(() => {
    animationStore.changeStatus()
    console.log('Built by Tony Jemba')
  }, 0)
})
</script>

<template>
  <div class="w-full z-10   absolute bg">
    <div class="w-11/12 flex justify-between  mx-auto  pt-8 pb-4 ">
      <div v-show="colorMode.value === 'light'" class=" flex items-center  cursor-pointer">
        <a href="#home" aria-label="Tony Jemba" rel="noopener">
          <LogoLight />
        </a>
      </div>
      <div
        v-show="colorMode.value === 'dark'" class="logo flex items-center cursor-pointer animate-fadeInImage"
        :class="`${showElem ? 'visible' : 'hidden'}`"
      >
        <a href="#home" aria-label="Tony Jemba" rel="noopener">
          <Logodark />
        </a>
      </div>
      <div class="  flex ">
        <!-- medium and above screens -->
        <div v-show="mdAndLarger" class=" flex  gap-x-8 justify-end items-center font-jost font-medium text-base  ">
          <a class="cursor-pointer textLcolor navMenu1 " :class="`${showElem ? 'visible' : 'hidden'}`" href="#home">
            Home
          </a>
          <a class="cursor-pointer textLcolor navMenu2" href="#aboutMe" :class="`${showElem ? 'visible' : 'hidden'}`">
            About Me
          </a>
          <a class="cursor-pointer textLcolor navMenu3" href="#myProjects" :class="`${showElem ? 'visible' : 'hidden'}`">
            Projects
          </a>
          <a
            class="cursor-pointer textLcolor navMenu4" :class="`${showElem ? 'visible' : 'hidden'}`"
            href="https://medium.com/@tonyjemba" target="_blank"
          >
            Blog
          </a>
          <a class="cursor-pointer textLcolor navMenu5" :class="`${showElem ? 'visible' : 'hidden'}`" href="#contactMe">
            Contact
          </a>
          <a
            href="https://docs.google.com/uc?export=download&id=1FxTW_WFPVDqBkgAQeZGaKb6DQg6WPXDR"
            download
            class=" navMenu6 cursor-pointer textL2color bg-opacity-0 border rounded border-mycyan "
            :class="`${showElem ? 'visible' : 'hidden'}`"
          >
            <div class="text-center pt-2 pb-2 pl-3 pr-3 ">
              Resume
            </div>
          </a>
          <div class="navMenu7" :class="`${showElem ? 'visible' : 'hidden'}`">
            <DarkIcon
              v-show="colorMode.value === 'light'" class="cursor-pointer iconColor iconModeColor"
              @click="colorMode.value = 'dark'"
            />
            <LightIcon
              v-show="colorMode.value === 'dark'" class="cursor-pointer iconColor iconModeColor "
              @click="colorMode.value = 'light'"
            />
          </div>
        </div>
        <!-- below medium screens -->
        <div v-if="smallerThanMd" class="flex justify-end z-50  ">
          <NavigationDrawerIcon :status="store.changeStatus" />
          <NavigationDrawer ref="closeTarget" :is-open="isOpen" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.move-up {
  transform: translateY(-5rem);
  transition-duration: 1s;
}

.move-down {
  transform: translateY(5rem);
  transition-duration: 1s;
}

.textLcolor {
  color: black;
  transition: color .3s ease-in-out;
}

.light-mode .textLcolor:hover {
  color: #00FFE1;
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
