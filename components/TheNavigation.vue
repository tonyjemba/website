<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import LogoLight from '~/assets/logo-light.svg'
import Logodark from '~/assets/logo-dark.svg'
import LightIcon from '~/assets/sun.svg'
import DarkIcon from '~/assets/moon.svg'
import { useDrawerStore } from '~~/stores/drawer'

const breakpoints = useBreakpoints(breakpointsTailwind)
const mdAndLarger = breakpoints.greaterOrEqual('md')
const smallerThanMd = breakpoints.smaller('md')
const { isOpen } = storeToRefs(useDrawerStore())

const colorMode = useColorMode()
</script>

<template>
  <div class="w-full z-10 absolute">
    <div class="w-11/12 flex justify-between  mx-auto  pt-8 pb-4">
      <div v-show="colorMode.value === 'light'" class=" flex items-center  cursor-pointer">
        <LogoLight />
      </div>
      <div v-show="colorMode.value === 'dark'" class=" flex items-center cursor-pointer animate-fadeInImage">
        <Logodark />
      </div>
      <div class="  flex ">
        <!-- medium and above screens -->
        <div v-show="mdAndLarger" class=" flex  gap-x-8 justify-end items-center font-jost font-medium text-base  ">
          <div class="cursor-pointer textLcolor ">
            Home
          </div>
          <div class="cursor-pointer textLcolor">
            Projects
          </div>
          <div class="cursor-pointer textLcolor">
            About Me
          </div>
          <div class="cursor-pointer textLcolor">
            Blog
          </div>
          <div class="cursor-pointer textLcolor">
            Contact
          </div>
          <div class="cursor-pointer textLcolor border rounded resume-btn ">
            <div class="text-center mt-1 mb-2 mr-3 ml-3 colored">
              Resume
            </div>
          </div>
          <div>
            <DarkIcon v-show="colorMode.value === 'light'" class="cursor-pointer iconColor iconModeColor" @click="colorMode.value = 'dark'" />
            <LightIcon v-show="colorMode.value === 'dark'" class="cursor-pointer iconColor iconModeColor " @click="colorMode.value = 'light'" />
          </div>
        </div>
        <!-- below medium screens -->
        <div v-show="smallerThanMd" class="flex justify-end ">
          <TheNavigationDrawerIcon />
          <TheNavigationDrawer :is-open="isOpen" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.resume-btn {
  border-color: #00FFE1;
  background-color: #00ffe100;
  transition: background-color .3s ease-in-out;
}
.resume-btn:hover {
  background-color: #00ffe11a;
  transition: background-color .3s ease-in-out;
}
.textLcolor {
  color: black;
  transition: color .3s ease-in-out;
}
.textLcolor:hover {
  color: #00FFE1;
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
.dark-mode .colored {
    color: #00FFE1;
}
</style>
