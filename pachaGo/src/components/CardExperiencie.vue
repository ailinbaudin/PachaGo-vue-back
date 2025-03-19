<script setup>
import { ref } from 'vue';

import Rating from 'primevue/rating';

const value = ref(null);
// Estado reactivo para manejar si es favorito o no
const isFavorite = ref(false)

// Función para cambiar el estado del favorito
const toggleFavorite = () => {
    isFavorite.value = !isFavorite.value
}
</script>


<template>
    <Card style="width: 25rem; overflow: hidden">
        <template #header>
            <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
        </template>





        <template #title>Advanced Card <button class="p-button-secondary">apply</button></template>

        <template #subtitle>Card subtitle
            <Rating v-model="value" />
        </template>

        <template #content>


            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis
                esse, cupiditate neque
                quas!
            </p>
        </template>
        <template #footer>
            <div class="flex gap-4 mt-1">
                <Button label="Cancel" severity="secondary" outlined class="w-full" />
                <Button label="Save" class="w-full" />
            </div>
        </template>

        <!-- Corazón de favorito como botón -->
        <div class="flex justify-between items-center mt-2">
            <Button icon="pi" :icon="isFavorite ? 'pi-heart-fill' : 'pi-heart'" class="p-button-text"
                style="font-size: 1.5rem; color: #ff4d4f;" @click="toggleFavorite" aria-label="Toggle favorite">
            </Button>
        </div>
    </Card>
</template>
