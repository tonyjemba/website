<script setup lang="ts">
import Triangle from '~/assets/triangle.svg'

interface Props {
  skill: String
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex items-center gap-x-3">
    <div>
      <Triangle />
    </div>
    <div>{{ props.skill }}</div>
  </div>
</template>
