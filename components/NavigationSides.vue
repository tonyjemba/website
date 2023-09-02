<script setup lang="ts">
import Github from '~/assets/github.svg'
import LinkedIn from '~/assets/linkedin.svg'
import Twitter from '~/assets/twitter.svg'
import Youtube from '~/assets/youtube.svg'
import Medium from '~/assets/medium.svg'
</script>

<template>
  <div class=" fixed bottom-0 w-full ">
    <div class="w-11/12 flex justify-between  mx-auto flex flex-row justify-between">
      <div class="flex flex-col gap-y-6">
        <NuxtLink target="_blank" to="https://github.com/tonyjemba" aria-label="Github" rel="noopener">
          <Github class="cursor-pointer iconColor iconModeColor" />
        </NuxtLink>
        <NuxtLink
          target="_blank" to="https://www.linkedin.com/in/tonyjemba/" aria-label="LinkedIn"
          rel="noopener"
        >
          <LinkedIn class="cursor-pointer iconColor iconModeColor" />
        </NuxtLink>
        <NuxtLink target="_blank" to="https://twitter.com/TonyJemba" aria-label="Twitter" rel="noopener">
          <Twitter class="cursor-pointer iconColor iconModeColor" />
        </NuxtLink>
        <NuxtLink target="_blank" to="https://www.youtube.com/@tonyjemba" aria-label="Youtube" rel="noopener">
          <Youtube class="cursor-pointer iconColor iconModeColor" />
        </NuxtLink>
        <NuxtLink target="_blank" to="https://medium.com/@tonyjemba" aria-label="Medium" rel="noopener">
          <Medium class="cursor-pointer iconColor iconModeColor" />
        </NuxtLink>
        <div class=" flex justify-center">
          <div class="line" />
        </div>
      </div>
      <div class="flex flex-col justify-between  ">
        <NuxtLink
          to="mailto:dev@tonyjemba.com"
          class="email font-jost tracking-wider textLcolor cursor-pointer "
        >
          dev@tonyjemba.com
        </NuxtLink>
        <div class=" flex justify-center">
          <div class="firefox line" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line {
    width: 1px;
    height: 15vh;
    background-color: #ccd6f6;

}
@-moz-document url-prefix() {
         .firefox {
            margin-right: 0.75rem;
         }
      }

.light-mode .line {
    background-color: #323231;
}

.email {
    writing-mode: vertical-rl;
}

.dark-mode .iconModeColor {
    fill: #8892B0
}

.dark-mode .iconModeColor:hover {
    fill: #00FFE1;
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

.dark-mode .textLcolor {
    transition: color .3s ease-in-out;
    color: #8892B0;
}

.light-mode .textLcolor {
    transition: color .3s ease-in-out;
    color: rgba(0, 0, 0, 0.8);
}

.textLcolor:hover {
    transition: color .3s ease-in-out;
    color: #00FFE1;
}
</style>
