<script setup lang="ts">
import Landscapedark from '~/assets/land5.svg'
import Landscapelight from '~/assets/landlight3.svg'
import Github from '~/assets/github.svg'
import LinkedIn from '~/assets/linkedin.svg'
import Twitter from '~/assets/twitter.svg'
import Youtube from '~/assets/youtube.svg'
import Medium from '~/assets/medium.svg'
import KUTE from 'kute.js'
import {ref} from 'vue'

const colorMode = useColorMode()
const blobl = ref();
const blob2 = ref();

onMounted(()=>{
  KUTE.fromTo(
    blobl.value,
    {path: blobl.value},
    {path: blob2.value},
    {repeat:999,duration:8000,yoyo:true}
  ).start()
 
})


</script>

<template>
  <div>
    <div class="w-full h-screen bg-cover bg-no-repeat bg-center "
      :class="`${colorMode.value === 'light' ? 'bgLight' : 'bgDark'}`">
      <div class="w-full h-screen  flex flex-col justify-end">
        <div class="w-full h-screen     absolute flex items-center">
          <div class="w-full ">
            <div class=" w-11/12 mx-auto flex">
              <div class=" w-2/4 text-lg space-y-10">
                <div class="font-jost fonts1 c2 water">Hello I'm</div>
                <div class="font-jost fonts2 font-bold c1 " >Tony Jemba</div>
                <div class="font-jost fonts3"> A Software Engineer From Kampala</div>
                <div class="font-jost fonts4 ">I'm a creative software engineer based in Kampala, and I'm very
                  passionate and dedicated to my work.</div>
                <div class="flex gap-x-14">
                  <div class="cursor-pointer textL2color bg-opacity-0 border rounded border-mycyan ">
                    <div class="text-center pt-2 pb-2 pl-5 pr-5 ">
                      <div class="textLcolor font-jost">Hire Me</div>
                    </div>
                  </div>
                  <div class="flex gap-x-5 items-center">
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
              <div class=" w-2/4 flex justify-center items-center">
                <div >
                <svg id="visual" viewBox="0 0 900 900" width="350" height="340" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                  <g transform="translate(475.1402199656163 527.8742822389166)">
                    <path ref="blobl" class="shadow-2xl"
                      d="M294.4 -282.3C328.6 -191.8 267.2 -72.4 223.7 24.3C180.3 121.1 155 195.2 95.2 240.4C35.4 285.6 -58.9 301.8 -125.5 267.2C-192.1 232.6 -231.1 147.1 -278.9 35.6C-326.6 -75.8 -383.2 -213.3 -338.2 -306.2C-293.2 -399.1 -146.6 -447.6 -8.3 -441C130 -434.4 260.1 -372.7 294.4 -282.3"
                      fill="#4E5466"></path>
                  </g>
                  <g transform="translate(511.4321748026821 490.00964863409973)">
                    <path ref="blob2" class="invisible shadow-2xl"
                      d="M327.5 -311.5C361.7 -218.2 283.7 -85.6 232.6 18.9C181.5 123.5 157.4 200 86.9 267.3C16.5 334.6 -100.2 392.5 -209.7 366.3C-319.1 340.2 -421.3 229.8 -450.1 103C-478.8 -23.8 -434.1 -167.2 -346.8 -272.6C-259.6 -378 -129.8 -445.5 8.4 -452.2C146.6 -458.9 293.2 -404.8 327.5 -311.5"
                      fill="#4E5466"></path>
                  </g>
                  
                </svg>
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
.min{
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
.dark-mode .c1{
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

.fonts3 {
  font-size: 1.1em;
}

.fonts4 {
  font-size: 1em;
  font-weight: 100;
}
</style>
