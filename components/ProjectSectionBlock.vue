<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import GithubLogo from '~/assets/github.svg'
import DemoLink from '~/assets/demolink.svg'

interface Props {
  alter: boolean
  projectDescription: string
  projectTitle: string
  projectHeading: string
  projectTechnologies: string[]
  projectImage: string
  githubLink: string
  demoLink: string
}

const props = defineProps<Props>()

const Imagepath = '~/assets/project1.jpeg'

const breakpoints = useBreakpoints(breakpointsTailwind)
const mdAndLarger = breakpoints.greaterOrEqual('md')
</script>

<template>
  <div>
    <div
      v-show="mdAndLarger"
      class="w-11/12 lg:w-full flex justify-center mx-auto "
    >
      <div
        class="w-10/12 mb-24 items-center flex relative"
        :class="props.alter ? 'flex-row' : 'flex-row-reverse'"
      >
        <div
          class="fallbackcolor w-6/12 md:h-72 lg:h-96 rounded shadow-md cursor-pointer bgImage"
          :style="{ backgroundImage: `url(${projectImage})` }"
        >
          <div class="w-full h-full overlaycolor rounded" />
        </div>
        <div
          class="wid absolute"
          :class="props.alter ? 'right-0 text-right' : 'left-0 text-left'"
        >
          <div class="font-gsans mb-1 titlecolor">
            {{ props.projectTitle }}
          </div>
          <div class="font-jost text-2xl mb-4 headingColor">
            {{ props.projectHeading }}
          </div>
          <div class="descriptionbg rounded font-gsans my-3 p-3 shadow-2xl">
            {{ props.projectDescription }}
          </div>
          <div
            class="flex gap-x-3.5 my-3"
            :class="props.alter ? ' justify-end' : ' justify-start'"
          >
            <div
              v-for="(tech, index) in props.projectTechnologies"
              :key="`${tech}${index}`"
            >
              <div>{{ tech }}</div>
            </div>
          </div>
          <div
            class="flex gap-x-4 mt-6"
            :class="props.alter ? ' justify-end' : ' justify-start'"
          >
            <a
              :href="githubLink"
              target="_blank"
              aria-label="Github"
              rel="noopener"
            >
              <GithubLogo class="cursor-pointer iconColor iconModeColor" />
            </a>
            <a
              :href="demoLink"
              target="_blank"
              aria-label="Demo"
              rel="noopener"
            >
              <DemoLink class="cursor-pointer iconColor iconModeColor" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile -->
    <div
      v-show="!mdAndLarger"
      class="w-10/12 flex justify-center mx-auto rounded"
    >
      <div
        class="w-full sm:w-10/12 mb-24 h-auto fallbackcolor rounded bgImageMobile"
        :style="{ backgroundImage: `url(${projectImage})` }"
      >
        <div class="w-full p-6 overlayMobile rounded">
          <div class="font-gsans mb-1 titlecolor">
            {{ props.projectTitle }}
          </div>
          <div class="font-jost text-2xl mb-4 headingColor">
            {{ props.projectHeading }}
          </div>
          <div class="rounded font-gsans my-3 p-3 text-gray-600">
            {{ props.projectDescription }}
          </div>
          <div class="flex gap-x-3.5 my-3">
            <div
              v-for="(tech, index) in props.projectTechnologies"
              :key="`${tech}${index}`"
            >
              <div class="font-fira">
                {{ tech }}
              </div>
            </div>
          </div>
          <div class="flex gap-x-3.5 mt-6">
            <div>
              <a
                :href="githubLink"
                target="_blank"
                aria-label="Github"
                rel="noopener"
              >
                <GithubLogo class="cursor-pointer iconColor iconModeColor" />
              </a>
            </div>
            <div>
              <a
                :href="demoLink"
                target="_blank"
                aria-label="Demo"
                rel="noopener"
              >
                <DemoLink class="cursor-pointer iconColor iconModeColor" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-component {
  /* Set other styling properties */
  background-size: cover;
  background-position: center;
}
.bgImage {
  background-size: cover;
  background-repeat: no-repeat;
  transition: background-position 1.5s;
}

.bgImageMobile {
  background-size: cover;
  background-repeat: no-repeat;
}

.bgImage:hover {
  background-position: bottom;
}

.dark-mode .overlayMobile {
  background-color: #112240fb;
}

.light-mode .overlayMobile {
  background-color: #f1f1f1f6;
}

.wid {
  width: 60%;
}

.descriptionbg {
  background-color: #112240;
}

.light-mode .descriptionbg {
  background-color: #f2f2f2;
}

.headingColor {
  color: #ccd6f6;
}

.light-mode .headingColor {
  color: #000000;
}

.titlecolor {
  color: #00ffe1;
}

.overlaycolor {
  /* background-color: #005148a4; */
  background-color: #112240ec;
  transition: background-color 0.3s ease-in-out;
}

.light-mode .overlaycolor {
  background-color: #f2f2f227;
}

.overlaycolor:hover {
  background-color: #00ffe108;
  transition: background-color 0.3s ease-in-out;
}

.fallbackcolor {
  background-color: #061428;
}

.iconColor {
  fill: black;
  transition: color 0.3s ease-in-out;
}

.iconColor:hover {
  fill: #00ffe1;
  transition: color 0.3s ease-in-out;
}

.dark-mode .iconModeColor {
  fill: #8892b0;
}

.dark-mode .iconModeColor:hover {
  fill: #00ffe1;
  transition: color 0.3s ease-in-out;
}

.borderColor {
  background-color: #061428;
}
</style>
