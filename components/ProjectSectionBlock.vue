<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import GithubLogo from '~/assets/github.svg'
import DemoLink from '~/assets/demolink.svg'
interface Props {
  alter: Boolean
}
const props = defineProps<Props>()

const breakpoints = useBreakpoints(breakpointsTailwind)
const mdAndLarger = breakpoints.greaterOrEqual('md')
</script>

<template>
  <div>
    <div v-show="mdAndLarger" class="w-11/12 flex  justify-center mx-auto">
      <div class="w-10/12 mb-20 items-center flex  relative " :class="props.alter ? 'flex-row' : 'flex-row-reverse'">
        <div class="fallbackcolor w-6/12 md:h-72 lg:h-96  rounded bgImage shadow-md cursor-pointer ">
          <div class="w-full h-full overlaycolor rounded" />
        </div>
        <div class="  wid absolute " :class="props.alter ? 'right-0 text-right' : 'left-0 text-left'">
          <div class="font-gsans mb-1 titlecolor">
            Featured Project
          </div>
          <div class="font-jost  text-2xl mb-4 headingColor">
            Grabit Ecommerce
          </div>
          <div class="descriptionbg rounded font-gsans my-3 p-3 shadow-2xl">
            A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
          </div>
          <div class="flex  gap-x-3.5 my-3" :class="props.alter ? ' justify-end' : ' justify-start'">
            <div>VS Code</div> <div>Atom</div> <div>Typescript</div>
          </div>
          <div class="flex  gap-x-4 mt-6" :class="props.alter ? ' justify-end' : ' justify-start'">
            <div>
              <GithubLogo class="cursor-pointer iconColor iconModeColor" />
            </div>
            <div>
              <DemoLink class="cursor-pointer iconColor iconModeColor" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- make the height auto -->
    <div v-show="!mdAndLarger" class="w-11/12 flex  justify-center mx-auto rounded ">
      <div class="w-full sm:w-10/12 mb-20 h-auto fallbackcolor rounded bgImageMobile">
        <div class="  w-full p-6 overlayMobile rounded">
          <div class="font-gsans mb-1 titlecolor">
            Featured Project
          </div>
          <div class="font-jost  text-2xl mb-4 headingColor">
            Grabit Ecommerce
          </div>
          <div class=" rounded font-gsans my-3 p-3 text-gray-600 ">
            A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
          </div>
          <div class="flex  gap-x-3.5 my-3">
            <div class="font-fira">
              VS Code
            </div> <div>Atom</div> <div>Typescript</div>
          </div>
          <div class="flex  gap-x-3.5 mt-6">
            <div>
              <GithubLogo class="cursor-pointer iconColor iconModeColor" />
            </div>
            <div>
              <DemoLink class="cursor-pointer iconColor iconModeColor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bgImage {
  background-image: url('~/assets/1.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  transition:background-position 1.5s;
}
.bgImageMobile {
  background-image: url('~/assets/1.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
}
.bgImage:hover {
  background-position:bottom;
}
.overlayMobile {
background-color: #112240fb;
}
.wid {
    width: 60%;
}
.descriptionbg {
  background-color: #112240;
}
.light-mode .descriptionbg{
  background-color: #f2f2f2;
}

.headingColor {
  color: #ccd6f6;
}
.light-mode .headingColor {
  color: #000000;
}
.titlecolor {
  color: #00FFE1;
}
.overlaycolor {
 /* background-color: #005148a4; */
 background-color: #112240ec;
 transition: background-color .3s ease-in-out;
}
.light-mode .overlaycolor{
  background-color: #f2f2f227;
}
.overlaycolor:hover {
  background-color: #00ffe108;
  transition: background-color .3s ease-in-out;
}
.fallbackcolor {
  background-color: #061428;
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
.dark-mode .iconModeColor:hover {
  fill: #00FFE1;
   transition: color .3s ease-in-out;
}
.borderColor {
  background-color: #061428;
}
</style>
