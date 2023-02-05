<template>
  <div class="w-full  text-center">
    <NuxtLink to="https://github.com/tonyjemba/my-website" target="_blank" class="font-gsans text-sm my-4 cursor-pointer textLcolor mb-4">
      Designed & Built By Tony Jemba
    </NuxtLink>
  </div>
</template>

<style scoped>
.dark-mode .textLcolor {
  transition: color .3s ease-in-out;
  color: #8892B0;
}

.light-mode .textLcolor {
  transition: color .3s ease-in-out;
  color: rgba(0, 0, 0, 0.8);
}

.textLcolor:hover {
  transition: color .3s ease-in-out;
  color: #00FFE1;
}
</style>
