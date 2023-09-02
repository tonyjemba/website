<script setup lang="ts">
import { onMounted } from 'vue'
import { filename } from 'pathe/utils'

// getting dynamic images
const glob = import.meta.glob('~/assets/*.webp', { eager: true })
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default]),
)

// const dynamic_image_name = 'project'
// animations
onMounted(() => {
  useScrollReveal('.project', '40px', 'bottom', 100, 500)
  useScrollReveal('.project2', '40px', 'bottom', 150, 500)
  useScrollReveal('.project3', '40px', 'bottom', 200, 500)
  useScrollReveal('.project4', '40px', 'bottom', 250, 500)
})
</script>

<template>
  <div id="myProjects" class=" mb-32 md:mb-60">
    <TheTitle heading="Some Projects I've Built" underline-class="justify-end " class="project" />
    <ProjectSectionBlock
      :alter="true"
      class="project2"
      project-description="Introducing my personal portfolio website, a dynamic showcase of my expertise as a skilled software engineer. Crafted with passion and precision, this website not only reflects my proficiency in web development but also serves as an embodiment of my commitment to creating elegant, user-centric solutions. With a seamless blend of responsive design, interactive features, and efficient backend functionality, my portfolio demonstrates my proficiency in HTML, CSS, JavaScript, and more. Dive into a collection of projects that showcase my problem-solving prowess, creativity, and ability to turn ideas into functional applications."
      project-heading="My Portfolio Website"
      project-title="Featured Project"
      :project-technologies="['Vue', 'Nuxt', 'Javascript', 'Typescript', 'Vite']"
      :project-image="images.myweb"
      github-link="https://github.com/tonyjemba/my-website"
      demo-link="/"
    />
    <ProjectSectionBlock
      :alter="false"
      class="project3"
      project-description="This is an Online Pharmacy Store project. It is a robust platform that exemplifies the seamless execution of CRUD (Create, Read, Update, Delete) operations within the context of a modern pharmacy e-commerce ecosystem. It allows pharmacies to register their products and services so that they are visible to anyone who visits the platform. It also allows users to search through the items and services that were posted by different pharmacies. The project runs on Vue (Typescript) in the frontend and Laravel in the backend."
      project-heading="Online Pharmacy"
      project-title="Featured Project"
      :project-technologies="['Vue', 'Typescript', 'JavaScript', '', 'Vuex', 'Vue Router', 'Laravel']"
      :project-image="images.onlinePhamacy"
      github-link="https://github.com/tonyjemba/onlinePharmacy"
      demo-link="https://onlinepharmacy.tonyjemba.com/"
    />
    <ProjectSectionBlock
      :alter="true"
      class="project4"
      project-description="This is a Presidential Campaign Online Platform, As the developer behind the web-based UVote system utilized during the 2021 presidential elections, I was tasked with creating a robust and reliable system under tight time constraints. While successfully meeting this challenge, The system has since become a legacy product with some deprecated dependencies, rendering it inoperable at the moment."
      project-heading="UVote System web"
      project-title="Legacy Project"
      :project-technologies="['React', 'JavaScript', 'Firebase', 'Redux', 'Cloud Functions']"
      :project-image="images.project1"
      github-link="https://github.com/tonyjemba/Presidential_campaign_App"
      demo-link="https://projectk21-1a365.web.app/"
    />
  </div>
</template>
