<script setup lang="ts">
import Landscapedark from '~/assets/land5.svg'
import Landscapelight from '~/assets/landlight3.svg'
import Github from '~/assets/github.svg'
import LinkedIn from '~/assets/linkedin.svg'
import Twitter from '~/assets/twitter.svg'
import Youtube from '~/assets/youtube.svg'
import Medium from '~/assets/medium.svg'

const colorMode = useColorMode()
</script>

<template>
  <div>
    <div class="w-full h-screen bg-cover bg-no-repeat bg-center "
      :class="`${colorMode.value === 'light' ? 'bgLight' : 'bgDark'}`">
      <div class="w-full h-screen  flex flex-col justify-end">
        <div class="w-full h-screen     absolute flex items-center">
          <div class="w-full ">
            <div class=" w-11/12 mx-auto flex">
              <div class=" w-2/4 text-lg space-y-6">
                <div class="font-jost fonts1 ">Hello I'm</div>
                <div class="font-jost fonts2 font-bold">Tony Jemba</div>
                <div class="font-jost fonts3"> A Software Engineer From Kampala</div>
                <div class="font-jost fonts4 ">I'm a creative software engineer based in Kampala, and I'm very
                  passionate and dedicated to my work.</div>
                <div class="flex gap-x-14">
                  <div class="cursor-pointer textL2color bg-opacity-0 border rounded border-mycyan ">
                    <div class="text-center pt-2 pb-2 pl-5 pr-5 ">
                      <div class="textLcolor">Hire Me</div>
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
                <div>pallett</div>
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
  transition: color .3s ease-in-out;

  color: rgba(0, 0, 0, 0.8);
}

.light-mode .textLcolor:hover {
  transition: color .3s ease-in-out;

  color: #00FFE1;
}

.dark-mode .resume-btn {
  border-color: #00FFE1;
  background-color: #061428;
  transition: background-color .3s ease-in-out;
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

.fonts2 {
  font-size: 3em;
}

.fonts3 {
  font-size: 1.1em;
}

.fonts4 {
  font-size: 1em;
  font-weight: 100;
}
</style>
