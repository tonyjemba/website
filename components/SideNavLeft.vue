<script setup lang="ts">
import Github from '~/assets/github.svg'
import LinkedIn from '~/assets/linkedin.svg'
import Twitter from '~/assets/twitter.svg'
import Youtube from '~/assets/youtube.svg'
import Medium from '~/assets/medium.svg'
</script>
<template>
    <div class="flex flex-col gap-y-6 w-6 bg-red-500 bottom-0 fixed">
        <div>
            <Github class="cursor-pointer iconColor iconModeColor" />
        </div>
        <div>
            <LinkedIn class="cursor-pointer iconColor iconModeColor" />
        </div>
        <div>
            <Twitter class="cursor-pointer iconColor iconModeColor" />
        </div>
        <div>
            <Youtube class="cursor-pointer iconColor iconModeColor" />
        </div>
        <div>
            <Medium class="cursor-pointer iconColor iconModeColor" />
        </div>
        <div class=" flex justify-center">
            <div class="line"></div>
        </div>
    </div>
</template>
<style scoped>
.line {
    width: 1px;
    height: 15vh;
    background-color: #ccd6f6;
}
</style>