<script setup lang="ts">
import { onMounted } from 'vue'

// scrollreveal animations
onMounted(() => {
  useScrollReveal('.contact', '40px', 'bottom', 100, 500)
  useScrollReveal('.contact2', '40px', 'bottom', 200, 500)
})
</script>

<template>
  <TheTitle
    id="contactMe"
    heading="Get In Touch"
    underline-class="justify-start"
    class="contact"
  />
  <div class="text-center contact2">
    <div class="w-11/12 sm:w-8/12 md:w-8/12 lg:w-6/12 mx-auto text-center">
      <div>
        <div class="font-gsans">
          <!-- If you have a project that requires my expertise, or if you're interested in hiring me for a position, please don't hesitate to contact me via email.
          I make it a priority to respond promptly to all inquiries. Thank you for considering my services. -->
          I am currently available for new career opportunities and am eager to
          explore diverse roles and contribute my skills to innovative projects
          or initiatives. I am also still open to inquiries and exciting
          collaborations on open-source projects or startup initiatives. Feel
          free to reach out via
          <NuxtLink to="mailto:dev@tonyjemba.com">
            <span class="hover:text-teal-400">email</span>
          </NuxtLink>
          if you have an interesting project or partnership idea. I value every
          opportunity to explore new ventures and contribute my expertise.
          Thanks a lot.
        </div>
        <div class="flex justify-center my-8 mb-56">
          <NuxtLink to="mailto:dev@tonyjemba.com">
            <div
              class="cursor-pointer textLcolor bg-opacity-0 border rounded border-mycyan"
            >
              <div class="text-center pt-3 pb-3 pr-5 pl-5 font-gsans font-bold">
                Contact me
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dark-mode .textLcolor {
  color: #00ffe1;
  transition: color 0.3s ease-in-out;
}

.textLcolor {
  color: #00ffe1;
}

.light-mode .textLcolor {
  transition: color 0.3s ease-in-out;

  color: rgba(0, 0, 0, 0.8);
}

.light-mode .textLcolor:hover {
  transition: color 0.3s ease-in-out;
  background-color: #00ffe11a;
  color: #00ffe1;
}

.dark-mode .textLcolor:hover {
  background-color: #00ffe11a;
  transition: background-color 0.3s ease-in-out;
}
</style>
