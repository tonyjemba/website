<script setup lang="ts">
import { useDrawerStore } from '~~/stores/drawer'

//using drawer state to change icon
const drawerStore = useDrawerStore()
</script>

<template>
  <div>
    <div class="relative   sm:max-w-xl mx-auto" >
      <button class=" w-10 h-10 relative  hamburgerColor focus:outline-none hamburger bg-white " @click="drawerStore.changeStatus()">
        <div class="block w-5 absolute  left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
          <span aria-hidden="true" class="block absolute h-0.5 w-7 bg-current transform transition duration-500 ease-in-out" :class="{ 'rotate-45': drawerStore.isOpen, ' -translate-y-1.5': !drawerStore.isOpen }" />
          <span aria-hidden="true" class="block absolute  h-0.5 w-7 bg-current   transform transition duration-500 ease-in-out" :class="{ 'opacity-0': drawerStore.isOpen } " />
          <span aria-hidden="true" class="block absolute  h-0.5 w-7 bg-current transform  transition duration-500 ease-in-out" :class="{ '-rotate-45': drawerStore.isOpen, ' translate-y-1.5': !drawerStore.isOpen }" />
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped>
.dark-mode .hamburgerColor {
  color: #8892B0
}
.hamburger {
  background-color: #00ffe100;
  color: black;
  transition: color .3s ease-in-out;
}
.hamburger:hover{
    color: #00FFE1;
    transition: color .3s ease-in-out;
}
</style>
