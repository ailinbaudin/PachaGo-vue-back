<script setup>

import { computed, ref } from 'vue';

const searchQuery = ref('');
const items = ref([
    '',
]);

const filteredItems = computed(() => {
    return items.value.filter(item =>
        item.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

//importacion del mapa 

const AccessToken = 'pk.eyJ1IjoicGFjaGFnbzI0IiwiYSI6ImNsdndlNXVvZTF5NHYybHJybGNjamxqajAifQ.R3tQ8_ZrNP0gJbLHL1BWBA';
const mapStyle = 'mapbox://styles/mapbox/streets-v11';
const mapCenter = [12.4924, 41.8902];
const mapZoom = 10;
</script>

<template>
    <div class="bg-surface-0 dark:bg-surface-900">
        <div class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 flex items-center justify-between relative lg:static">
            <TopBarBarHome />
        </div>
    </div>

    <div id="container-principal" class="flex flex-col pt-6 px-6 lg:px-20 overflow-hidden"
        style="background: linear-gradient(180deg, rgb(255, 234, 9), rgb(147, 190, 67), rgb(11, 190, 67));">
        <div class="title">
            <h3 class="md:text-4xl sm:text-3xl text-white">
                FIND YOUR SEASONAL PAID EXPERIENCE IN AGRICOLTURE
            </h3>


            <div class="search-bar mt-4">
                <div class="p-inputgroup w-full w-1/2 mx-auto">

                    <InputText v-model="searchQuery" placeholder="Search for opportunities..." class="w-full" />
                </div>

                <!-- Resultados de la búsqueda -->
                <ul v-if="filteredItems.length" class="mt-3 text-white">
                    <li v-for="item in filteredItems" :key="item">{{ item }}</li>
                </ul>

                <p v-else class="mt-3 text-white">No results found.</p>
            </div>
        </div>
    </div>
    <MapComponent :accessToken="AccessToken" :mapStyle="mapStyle" :center="mapCenter" :zoom="mapZoom" />
</template>

<style scoped>
.title {
    align-items: center;
    text-align: center;
    padding-top: 2%;
    margin-top: 0%;
}

.search-bar {
    margin-top: 20px;
    text-align: center;
}
</style>
