<script setup>
import { Checkbox } from 'primevue';
</script>

<template>
    <div  class="flex flex-col pt-6 px-6 lg:px-20 overflow-hidden"
        style="background: linear-gradient(180deg, rgb(255, 234, 9), rgb(147, 190, 67), rgb(11, 190, 67)); clip-path: ellipse(150% 87% at 93% 13%)">
        <div  class="mx-6 md:mx-20 mt-0 md:mt-">
            <h1 id="top" class="font-normal text-white">Join the <br> community of</h1>        
            <h1 class="font-normal text-6xl text-white leading-normal md:mt-4">Pacha.go</h1>
            <Button label="Find out more" as="router-link" to="/" rounded class="!text-xl mt-8 !px-4"></Button>
        </div>
        <div class="flex justify-center md:justify-end">
            <img src="/demo/images/landing/cel-pacha.png" alt="Hero Image" class="w-9/12 md:w-auto" />
        </div>
    </div>
</template>
<style scoped>
#top{
    padding-top: 6%;
}
</style>