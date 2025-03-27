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
            <img alt="Imagen de la experiencia" src="https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </template>




        <template #title>
            Scopri l'Italia
            <div class="flag-container">
                <div class="flag-circle">
                    <img src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" alt="Bandera de Italia" />
                </div>
                <div class="flag-circle">
                    <img src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" alt="Bandera de Francia" />
                </div>
                <div class="flag-circle">
                    <img src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg" alt="Bandera de España" />
                </div>
            </div>
        </template>


        <template #subtitle> Scopri di Più
            
            <Rating v-model="value" />
        </template>

        <template #content>


            <p class="m-0">
                Benvenuti nella nostra esperienza unica!

                Scoprite l'Azienda Agricola La Dolce Vita, 
                dove la tradizione agricola italiana prende vita. Qui potrete esplorare i nostri campi, 
                apprendere pratiche sostenibili e degustare prodotti freschi della terra.
                Unitevi a noi in questa esperienza unica che celebra la bellezza della vita rurale e la ricchezza della nostra cultura. Vi aspettiamo!

            </p>
        </template>
        <template #footer>
            <div class="flex gap-4 mt-1">
                <Button label="Annulla" severity="secondary" outlined class="w-full" />
                <Button label="Applica" class="w-full" />
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

<style scoped>
.flag-container {
    display: flex;
    justify-content: flex-start; /* Alinea las banderas a la izquierda */
    margin-left: 200px; /* Aumenta el margen a la izquierda para mover las banderas a la derecha */
}

.flag-circle {
    width: 25px; /* Tamaño del círculo */
    height: 16px; /* Tamaño del círculo */
    border-radius: 50%; /* Hace que sea un círculo */
    overflow: hidden; /* Asegura que la imagen no sobresalga */
    margin: 0 5px; /* Espaciado entre círculos */
    border: 2px solid white; /* Borde blanco para destacar */
}

.flag-circle img {
    width: 100%; /* Asegura que la imagen llene el círculo */
    height: auto; /* Mantiene la proporción de la imagen */
}
</style>