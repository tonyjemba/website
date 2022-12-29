<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints, useElementVisibility } from '@vueuse/core'
import Landscapedark from '~/assets/land5.svg'
import Landscapelight from '~/assets/landlight3.svg'
import Github from '~/assets/github.svg'
import LinkedIn from '~/assets/linkedin.svg'
import Twitter from '~/assets/twitter.svg'
import Youtube from '~/assets/youtube.svg'
import Medium from '~/assets/medium.svg'
import KUTE from 'kute.js'
import { ref, onMounted } from 'vue'
import { useIconInterval } from '~/stores/iconInterval'
import { useScrollStore } from '~/stores/scroll'


const breakpoints = useBreakpoints(breakpointsTailwind)
const lgAndLarger = breakpoints.greaterOrEqual('lg')
const colorMode = useColorMode()
const blobl = ref();
const blob2 = ref();
const vuelogo = ref()
const showElement = ref(false)
//for switching icons
const iconStore = useIconInterval()
//to track whether the social icons are in the viewport
const scrollStore = useScrollStore()
const icons = ref(null)
const iconsVisible = useElementVisibility(icons)

//whatching iconvisibility value and updating state in pinia store
watch(iconsVisible, (newVal) => {
  scrollStore.iconsInHeroVisible = newVal
})

//activating animations on component mount
onMounted(() => {
  setTimeout(() => { showElement.value = true }, 100)
  KUTE.fromTo(
    blobl.value,
    { path: blobl.value },
    { path: blob2.value },
    { repeat: 999, duration: 8000, yoyo: true }
  ).start()

  //animations
  KUTE.fromTo(vuelogo.value, { translateY: 100 }, { translateX: 125 }).start();
  useScrollReveal('.target1', '30px', 'bottom', 1300, 1000,)
  useScrollReveal('.target2', '30px', 'bottom', 1400, 1000,)
  useScrollReveal('.target3', '30px', 'bottom', 1500, 1000,)
  useScrollReveal('.target4', '30px', 'bottom', 1600, 1000,)
  useScrollReveal('.target5', '30px', 'bottom', 1700, 1000,)
  useScrollReveal('.target6', '30px', 'right', 1800, 1000,)

  //chaging icons on blob
  iconStore.changeInterval()
})
</script>

<template>
  <div id="home" >
    <div class="w-full h-screen bg-cover bg-no-repeat bg-center "
      :class="`${colorMode.value === 'light' ? 'bgLight' : 'bgDark'}`">
      <div class="w-full h-screen  flex flex-col justify-end ">

        <div class="w-full h-screen  absolute flex items-center">
          <div class="w-full  ">
            <div class=" w-11/12 mx-auto flex mt-22 ">
              <div class="w-full lg:w-2/4 text-lg space-y-8 lg:space-y-10">
                <div class="  font-jost fonts1 c2 water text-center md:text-left target1"
                  :class="`${showElement ? 'visible' : 'hidden'}`">Hello I'm</div>
                <div class="font-jost fonts2 font-bold c1 text-center md:text-left target2"
                  :class="`${showElement ? 'visible' : 'hidden'}`">Tony Jemba</div>
                <div class="font-jost fonts3 text-center md:text-left target3"
                  :class="`${showElement ? 'visible' : 'hidden'}`"> A Software Engineer From Kampala</div>
                <div class="font-jost fonts4 text-center md:text-left target4"
                  :class="`${showElement ? 'visible' : 'hidden'}`">I'm a creative software engineer based in Kampala,
                  and
                  I'm very
                  passionate and dedicated to my work.</div>
                <div class="target5 flex flex-col sm:flex-row justify-center md:justify-start gap-y-10  sm:gap-x-14  "
                  :class="`${showElement ? 'visible' : 'hidden'}`">
                  <div class=" cursor-pointer textL2color bg-opacity-0 border rounded border-mycyan  ">
                    <div class="text-center pt-2 pb-2 pl-5 pr-5 ">
                      <div class="textLcolor font-jost">Hire Me</div>
                    </div>
                  </div>
                  <div class="flex justify-center gap-x-5 items-center" ref="icons">
                    <div>
                      <Github class="cursor-pointer iconColor iconModeColor" />
                    </div>
                    <div>
                      <LinkedIn class="cursor-pointer iconColor iconModeColor" />
                    </div>
                    <div>
                      <Twitter class="cursor-pointer iconColor iconModeColor" />
                    </div>
                    <div>
                      <Youtube class="cursor-pointer iconColor iconModeColor" />
                    </div>
                    <div>
                      <Medium class="cursor-pointer iconColor iconModeColor" />
                    </div>

                  </div>
                </div>
              </div>
              <div v-show="lgAndLarger" class=" relative target6 w-2/4 flex justify-center items-center "
                :class="`${showElement ? 'visible' : 'hidden'}`">
                <div>
                  <div class=" absolute  flex flex-row  justify-between items-end h-64 w-44 z-10 ml-16" ref="vuelogo">
                    <IconVue class="animate-bounce-slow cursor-pointer" />
                    <IconNuxt class="animate-bounce-slow cursor-pointer" />
                  </div>
                  <div class=" absolute  flex justify-center items-center h-40 w-10 z-10 " ref="vuelogo">
                    <IconNode v-if="iconStore.interval === 1" class="animate-bounce-slow fade-in cursor-pointer " />
                    <IconGraphQL v-else-if="iconStore.interval === 2"
                      class="animate-bounce-slow fade-in cursor-pointer" />
                    <IconNext v-else-if="iconStore.interval === 3" class="animate-bounce-slow fade-in cursor-pointer" />
                    <IconLaravel v-else="iconStore.interval === 4" class="animate-bounce-slow fade-in cursor-pointer" />
                  </div>

                  <div>
                    <svg id="visual" viewBox="0 0 900 900" width="350" height="340" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">

                      <g transform="translate(395.3409694537647 549.129049274956)">
                        <path ref="blobl" class="opacity-10"
                          d="M254.5 -197.9C345.9 -88.4 447.2 18.4 428.1 96C409 173.5 269.6 221.9 162.9 232.7C56.3 243.5 -17.6 216.8 -93.9 184.2C-170.2 151.6 -248.9 113.2 -290.1 36.5C-331.2 -40.1 -334.9 -155.1 -280.3 -256.2C-225.7 -357.3 -112.8 -444.7 -15.6 -432.2C81.6 -419.7 163.1 -307.4 254.5 -197.9"
                          fill="#8892b0">

                        </path>

                      </g>
                      <g class="cursor-pointer" transform="translate(486.5623892955482 539.9985897735369)">
                        <path ref="blob2" class="invisible opacity-10"
                          d="M280.1 -260.3C335.5 -153.9 334 -39 293 37.5C252.1 113.9 171.8 152 88.2 197.9C4.6 243.8 -82.3 297.6 -172.6 283.1C-262.9 268.5 -356.7 185.7 -385.8 81.4C-414.9 -22.9 -379.5 -148.6 -304.4 -259.5C-229.3 -370.4 -114.7 -466.4 -1.2 -465.5C112.3 -464.6 224.6 -366.6 280.1 -260.3"
                          fill="#8892b0">
                        </path>

                      </g>
                    </svg>

                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
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

<style scoped>
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

.textLcolor {
  color: #00FFE1;
}

.light-mode .textLcolor {
  color: rgba(0, 0, 0, 0.8);
  transition: color .3s ease-in-out;
}

.light-mode .textLcolor:hover {
  color: #00FFE1;
  transition: color .3s ease-in-out;
}

.dark-mode .resume-btn {
  border-color: #00FFE1;
  background-color: #061428;
  transition: background-color .3s ease-in-out;
}

.light-mode .blob {
  fill: #323231;
}

.min {
  color: #475170;
}

.light-mode .resume-btn {
  border-color: #00FFE1;
  background-color: #f1f1f1;
  transition: background-color .3s ease-in-out;
}

.resume-btn:hover {
  background-color: #00ffe11a;
  transition: background-color .3s ease-in-out;
}

.textL2color:hover {
  color: #00FFE1;
  background-color: #00ffe11a;
  transition: color .3s ease-in-out;
}

.iconColor {
  fill: #323231;
  transition: color .3s ease-in-out;
}

.iconColor:hover {
  fill: #00FFE1;
  transition: color .3s ease-in-out;
}

.fonts1 {
  font-size: 1.2em;
}

.dark-mode .iconModeColor {
  fill: #8892B0
}

.dark-mode .iconModeColor:hover {
  fill: #00FFE1;
  transition: color .3s ease-in-out;
}

.dark-mode .c1 {
  color: #ccd6f6;
  transition: color .3s ease-in-out;
}

.dark-mode .c2 {
  color: #00FFE1;
  transition: color .3s ease-in-out;
}

.fonts2 {
  font-size: 4em;

}

@media only screen and (max-width: 453px) {
  .fonts2 {
    font-size: 3em;
    line-height: 1em;
  }
}

.fonts3 {
  font-size: 1.1em;
}

.fonts4 {
  font-size: 1em;
  font-weight: 100;
}

.fade-in {
  animation: fadeIn 3s;
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
</style>