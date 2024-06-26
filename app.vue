<script setup lang="ts">
import { onBeforeMount, onMounted } from 'vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { useDrawerStore } from '~/stores/drawer'
import { useScrollStore } from '~~/stores/scroll'

const colorMode = useColorMode()
// breakpoints
const drawerStore = useDrawerStore()
const breakpoints = useBreakpoints(breakpointsTailwind)
const smallerThanMd = breakpoints.smaller('md')
const lgAndLarger = breakpoints.greaterOrEqual('lg')
// showing nav on scroll
const scrollStore = useScrollStore()
let lastScrollTop = scrollStore.fromTop
const nuxtApp = useNuxtApp()
const loading = ref(true)
nuxtApp.hook('app:suspense:resolve', () => {
  loading.value = false
})
useHead(() => {
  return {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  }
})

useSeoMeta({
  author: 'Tony Jemba',
  publisher: 'Tony Jemba',
  creator: 'Tony Jemba',
  ogUrl: 'https://www.tonyjemba.com',
  ogSiteName: 'Tony Jemba | Software Engineer Portfolio',
  ogImage: '/tonyjemba.png',
  ogImageUrl: '/tonyjemba.png',
  ogImageSecureUrl: '/tonyjemba.png',
  ogImageAlt: 'Tony Jemba',
  twitterCard: 'summary',
  twitterTitle: 'Tony Jemba | Software Engineer',
  twitterDescription:
    'I am currently available for new career opportunities or open-source contributions, and I am eager to explore diverse roles and contribute my skills to innovative projects or initiatives.',
  twitterImage: '/tonyjemba.png',
  twitterImageAlt: 'Tony Jemba | Software Engineer',
  twitterSite: '@tonyjemba',
  themeColor: '#061428',
})

onBeforeMount(() => {
  colorMode.preference = 'dark'
  colorMode.value = 'dark'
})

function handleScroll() {
  //  check scroll up or down
  const st = window.pageYOffset || document.documentElement.scrollTop
  if (st > lastScrollTop) {
    // downscroll
    scrollStore.scrollUp = false
  }
  else {
    // upscroll
    scrollStore.scrollUp = true
  }
  lastScrollTop = st <= 0 ? 0 : st
  // distance from top
  scrollStore.fromTop = window.scrollY
}

onMounted(() => {
  colorMode.preference = 'dark'
  colorMode.value = 'dark'
  // handle nav on scroll
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="$dark-mode relative flex flex-col">
    <!-- Drawer Overlay -->
    <div v-if="loading">
      <div class="h-screen w-screen flex flex-col justify-center items-center">
        <div class="initTextColor">
          Tony Jemba Software Engineer
        </div>
        <div class="">
          Please wait ...
        </div>
        <div class="initTextColor">
          Tony Jemba
        </div>
      </div>
    </div>
    <div v-else>
      <div
        v-show="drawerStore.isOpen && smallerThanMd"
        class="fixed top-0 z-20"
      >
        <div class="h-screen w-screen absolute top-0 left-0 icy" />
      </div>

      <div class="relative">
        <!-- showing nav on scroll up -->
        <div
          class="absolute z-50 w-full"
          :class="
            scrollStore.fromTop > 0 && scrollStore.scrollUp
              ? 'sticky top-0  fadeIn '
              : ''
          "
        >
          <Navigation
            :class="
              scrollStore.fromTop > 0 && scrollStore.scrollUp
                ? 'backdrop-blur-sm icy2 shadow-2xl '
                : ''
            "
          />
        </div>
        <!-- nav hides on scroll -->
        <Navigation :class="scrollStore.fromTop > 0 ? 'hidden' : 'visible '" />
        <Hero />

        <div class="w-full flex justify-center">
          <div class="lg:absolute lg:z-20 lg:w-10/12 lg:mx-auto">
            <AboutMe />
            <ProjectSection />
            <ContactSection />
            <footer>
              <TheFooter />
            </footer>
          </div>
        </div>
        <NavigationSides
          v-if="lgAndLarger && !scrollStore.iconsInHeroVisible"
          class=""
          :class="
            lgAndLarger && !scrollStore.iconsInHeroVisible
              ? 'fadeIn'
              : 'fadeOut'
          "
        />
      </div>
    </div>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.initTextColor {
  color: #061428;
}
.dark-mode body {
  background-color: rgb(6, 20, 40);
  color: #8892b0;
}

.light-mode body {
  background-color: #f1f1f1;
}

.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}

.dark-mode .icy {
  background: linear-gradient(135deg, rgba(6, 20, 40, 0.1), rgba(6, 20, 40, 0));
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
}

.light-mode .icy {
  background: linear-gradient(
    135deg,
    rgba(246, 245, 241, 0.1),
    rgba(246, 245, 241, 0)
  );
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
}

.fadeIn {
  animation: fadeIn 1s;
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
  animation: fadeOut 0.1s;
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

.icy2 {
  background-color: #06142885;
}

.light-mode .icy2 {
  background: #f6f7f864;
}
body::-webkit-scrollbar {
  width: 0.3em;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
  border-radius: 4px;
}
</style>
