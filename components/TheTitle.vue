<script lang="ts" setup>
interface Props {
  heading: String
}
const props = defineProps<Props>()
</script>

<template>
  <div class="text-3xl sm:text-4xl text-center font-jost  my-16 sm:my-24 font-bold headingColor">
    {{ props.heading }}
  </div>
</template>

<style scoped>
.headingColor {
  color: #ccd6f6;
}
.light-mode .headingColor {
  color: black;
}
</style>
