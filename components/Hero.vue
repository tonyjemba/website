<script setup lang="ts">
import Landscapedark from '~/assets/land5.svg'
import Landscapelight from '~/assets/landlight3.svg'

const colorMode = useColorMode()
</script>

<template>
  <div>
    <div class="w-full h-screen bg-cover bg-no-repeat bg-center "
      :class="`${colorMode.value === 'light' ? 'bgLight' : 'bgDark'}`">
      <div class="w-full h-full  flex flex-col justify-end">
        <div class="w-full h-full  flex justify-center items-end text-center">
          <div class="font-jost fw-bold text-5xl">
            <div>Hello, I'm</div>
            <div class="font-extrabold">Tony Jemba</div>
            <div>A Software Engineer</div>
            <a href="mailto:jjembatony@gmail.com">
              <div class=" cursor-pointer  textLcolor mt-8   border rounded resume-btn">
                <div class="text-center mt-3 mb-3 mr-5 ml-5 font-gsans font-bold">
                  Hire Me
                </div>
              </div>
            </a>

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
</style>
