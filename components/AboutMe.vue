<script setup lang="ts">
import { onMounted } from 'vue'

// onscrollreavel animations
onMounted(() => {
  useScrollReveal('.about', '40px', 'bottom', 100, 500)
  useScrollReveal('.about2', '40px', 'bottom', 200, 500)
})
</script>

<template>
  <div id="aboutMe" class="w-full mt-32 md:mt-56 mb-44 md:mb-64">
    <TheTitle class="about" heading="About Me" underline-class="justify-start" />
    <div class=" about w-11/12 lg:w-full   flex justify-center mx-auto about2">
      <div class=" sm:w-10/12 flex flex-col space-y-20 md:space-y-0 md:flex-row  justify-center mx-auto">
        <div class="w-full md:grow font-gsans">
          <div class=" space-y-6">
            <p>
              Hello! My name is Tony, and I am a software engineer currently focusing on web development. I enjoy creating
              things that live on the internet. My interest in web development started back in 2013, when I decided to try creating websites.
            </p>
            <p>
              My experience in software engineering has given me the skills and knowledge necessary to design, develop, and deploy software applications that meet the needs of businesses across a variety of industries.
            </p>
            <p>
              I have recently launched a YouTube channel where I provide comprehensive tutorials on using Vue, Node, Laravel, and other technologies to create, test, and deploy high-quality web applications. These tutorials cover everything from basic concepts to advanced techniques, ensuring that viewers have the knowledge and skills necessary to develop sophisticated applications. As a result of my expertise in web application development, I am confident that I would be a valuable addition 
              to any software engineering team looking to create innovative, user-friendly applications that meet the needs of today's businesses.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <div class="grid grid-cols-2  gap-y-2 text-sm ">
              <AboutSkillsList skill="JavaScript (TypeScript)" />
              <AboutSkillsList skill="Cypress & Jest" />
              <AboutSkillsList skill="React (Next)" />
              <AboutSkillsList skill="Git" />
              <AboutSkillsList skill="vue (Nuxt)" />
              <AboutSkillsList skill="Node.js" />
              <AboutSkillsList skill="Docker" />
              <AboutSkillsList skill="Laravel" />
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

.wid {
  width: 78%;
}
</style>
