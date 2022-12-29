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
            <div class="flex flex-col justify-between  ">
                <div class="email font-jost tracking-wider textLcolor cursor-pointer ">jjembatony@gmail.com</div>
                <div class=" flex justify-center">
                    <div class="line"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.line {
    width: 1px;
    height: 15vh;
    background-color: #ccd6f6;
}

.light-mode .line {
    background-color: #323231;
}

.email {
    writing-mode: vertical-rl;
    text-orientation: mixed;
}

.dark-mode .iconModeColor {
    fill: #8892B0
}

.dark-mode .iconModeColor:hover {
    fill: #00FFE1;
    transition: color .3s ease-in-out;
}

.iconColor {
    fill: #323231;
    transition: color .3s ease-in-out;
}

.iconColor:hover {
    fill: #00FFE1;
    transition: color .3s ease-in-out;
}

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