<script lang="ts" setup>
interface Props {
  heading: String
  underlineClass: String
}
const props = defineProps<Props>()
</script>

<template>
  <div class="w-full  flex justify-center">
    <div class="text-3xl sm:text-4xl text-center font-jost  mb-16 sm:mb-24 font-bold headingColor">
      {{ props.heading }}
      <div class="w-full flex" :class="props.underlineClass">
        <div class="h-1 w-1/4 undercolor my-1 self-end rounded" />
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
.undercolor{
  background-color: #00FFE1;
}
</style>
