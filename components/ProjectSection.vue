<script setup lang="ts">
import { onMounted } from 'vue';

//animations

onMounted(() => {
  useScrollReveal('.project', '40px', 'bottom', 100, 1000, )
  useScrollReveal('.project2', '40px', 'bottom', 150, 1000, )
  useScrollReveal('.project3', '40px', 'bottom', 200, 1000, )
  useScrollReveal('.project4', '40px', 'bottom', 250, 1000, )


})
</script>
<template>
  <div class=" mb-32 md:mb-60" >
    <TheTitle heading="Some Projects I've Built" underline-class="justify-end " class="project"/>
    <ProjectSectionBlock :alter="true" class="project2" />
    <ProjectSectionBlock :alter="false" class=" project3" />
    <ProjectSectionBlock :alter="true" class="project4"/>
  </div>
</template>
