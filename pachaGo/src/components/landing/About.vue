<script setup>
import FormContactNew from './FormContactNew.vue';
</script>
<template>
    <div id="About" class="py-6 px-6 lg:px-20 mx-0 my-12 lg:mx-20">
        <div class="text-center">
            <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl sm:text-xl text-about">🌱 About Us </div>
            <div id="top"></div>
            <span class="text-muted-color text-2xl sm:text-lg md:text-xl"> Pacha Go connects adventurous experiencers with welcoming hosts in search of dedicated
                hands.</span>
        </div>

        <div class="grid grid-cols-12 gap-4 mt-20 pb-2 md:pb-20">
            <div class="flex justify-center col-span-12 lg:col-span-6 p-4 order-1 lg:order-none"
                style="border-radius: 8px; ">
                <img src="/demo/images/landing/psteam.png" class="w-11/12" alt="mockup mobile" />
            </div>

            <div class="col-span-12 lg:col-span-6 my-auto flex flex-col lg:items-end text-center lg:text-right gap-4">
                <span class="text-surface-700 dark:text-surface-100 text-2xl leading-normal ml-0   sm:text-lg md:text-xl"
                    style="max-width: 650px">
                We are a team of professionals from Argentina and Italy, united by the mission of making
                agricultural work more accessible, fair, and efficient. Our platform bridges job seekers with reliable
                employers, fostering a community built on empathy, collaboration, and the power of change.
                </span>
            </div>
        </div>
        <FormContactNew/>
    </div>
</template>
<style scoped>
.text-about {
    padding-top: 4%;
}

#top {
    padding: 2%;
}
</style>
