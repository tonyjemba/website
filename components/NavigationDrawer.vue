<script setup lang="ts">
import LightIcon from '~/assets/sun.svg'
import DarkIcon from '~/assets/moon.svg'
import { useDrawerStore } from '~~/stores/drawer'

// opening and closing drawer basing on the isOpen prop value
interface Props {
  isOpen: boolean
}

const props = defineProps<Props>()
const colorMode = useColorMode()
const store = useDrawerStore()
</script>

<template>
  <div
    class="fixed  z-30 top-0 right-0 h-screen p-4 overflow-y-hidden drawerbg sm:w-3/5 w-4/5 "
    :class="props.isOpen ? 'onScreen' : 'offScreen'"
  >
    <div class="w-full  flex justify-start pt-4 ">
      <NavigationDrawerIcon
        :status="store.changeStatus" :class="store.drawerStatus ? 'fadeIn' : 'fadeOut'"
        @click="store.changeStatus"
      />
    </div>
    <div class="flex flex-col gap-y-8 w-full h-full justify-center items-center ">
      <a class=" font-jost font-medium cursor-pointer sm:text-2xl text-xl textLcolor" href="#home">
        Home
      </a>
      <a class=" font-jost font-medium cursor-pointer sm:text-2xl text-xl textLcolor" href="#aboutMe">
        About Me
      </a>
      <a class=" font-jost font-medium cursor-pointer sm:text-2xl text-xl textLcolor" href="#myProjects">
        Projects
      </a>
      <a class=" font-jost font-medium cursor-pointer sm:text-2xl text-xl textLcolor" href="https://medium.com/@tonyjemba" target="_blank">
        Blog
      </a>
      <a class=" font-jost font-medium cursor-pointer sm:text-2xl text-xl textLcolor" href="#contactMe">
        Contact
      </a>
      <div class="flex gap-x-11 pt-8">
        <a
          href="https://docs.google.com/uc?export=download&id=1FxTW_WFPVDqBkgAQeZGaKb6DQg6WPXDR"
          download
          class="cursor-pointer textLcolor border rounded resume-btn"
        >
          <div class="text-center mt-1 mb-2 mr-3 ml-3 colored">
            Resume
          </div>
        </a>
        <div class="flex items-center ">
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
    </div>
  </div>
</template>

<style scoped>
.dark-mode .drawerbg {
  background-color: #061428;
}

.light-mode .drawerbg {
  background-color: #f1f1f1;
}

.offScreen {
  transform: translateX(100%);
  transition: transform .5s ease;
}

.onScreen {
  transform: translateX(0%);
  transition: transform .5s ease;
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

.fadeIn {
  animation: fadeIn 0.5s;
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeOut {
  animation: fadeOut 0.3s;
  animation-fill-mode: forwards;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
