<script setup lang="ts">
import {onMounted} from 'vue'

//animations

onMounted(() => {
  useScrollReveal('.about', '40px', 'bottom', 100, 500)
  useScrollReveal('.about2', '40px', 'bottom', 200, 500)

})
</script>
<template>
  <div class="w-full mt-32 md:mt-56 mb-44 md:mb-64">
    <TheTitle class="about" heading="About Me" underline-class="justify-start" />

    <div class=" about w-11/12  flex justify-center mx-auto about2">
      <div class=" sm:w-10/12 flex flex-col space-y-20 md:space-y-0 md:flex-row  justify-center mx-auto">
        <div class="w-full md:grow font-gsans">
          <div class=" space-y-6">
            <p>
              Hello! My name is Tony and I enjoy creating things that live on the internet. My interest in web development started back in 2010 when I
              decided to try creating websites. I really enjoy this work.
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at  a start-up, a huge corporation, and
              a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences
              at Upstatement for a variety of clients.
            </p>
            <p>
              I also recently created a youtube channel where I teach everything you need to know about making web apps with the Vue related technologies  Node & Laravel.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <div class="grid grid-cols-2  gap-y-2 text-sm ">
              <AboutSkillsList skill="JavaScript (TypeScript)" />
              <AboutSkillsList skill="Cypress & Jest" />
              <AboutSkillsList skill="React (Next)" />
              <AboutSkillsList skill="Git" />
              <AboutSkillsList skill="vue (Nuxt)" />
              <AboutSkillsList skill="Node.js" />
            </div>
          </div>
        </div>
        <div class="flex w-full justify-center md:justify-end">
          <AboutProfilePicture />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.headingColor {
  color: #ccd6f6;
}
.light-mode .headingColor {
  color: black;
}
.wid{
  width: 78%;
}
</style>
