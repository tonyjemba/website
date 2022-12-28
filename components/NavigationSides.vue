<script setup lang="ts">
import Github from '~/assets/github.svg'
import LinkedIn from '~/assets/linkedin.svg'
import Twitter from '~/assets/twitter.svg'
import Youtube from '~/assets/youtube.svg'
import Medium from '~/assets/medium.svg'
</script>
<template>
    <div class=" fixed bottom-0 w-full ">
        <div class="w-11/12 flex justify-between  mx-auto flex flex-row justify-between">
            <div class="flex flex-col gap-y-6">
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
            <div class="flex flex-col justify-between  " >
                <div class="email ">jjembatony@gmail.com</div>
                <div class=" flex justify-center">
                    <div class="line"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.line{
    width: 1px;
    height: 15vh;
    background-color: #ccd6f6;
}
.email{
    writing-mode: vertical-rl;
        text-orientation: mixed;
}
</style>