<template>
    <div>
        <form @submit.prevent="submitForm">
            <Fluid>
                <div id="container" class="flex mt-8">
                    <div class="card flex flex-col gap-4 w-full">
                        <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl title">
                            Sign Up to Receive Pacha Go News and Updates!
                        </div>
                        <div class="flex flex-col md:flex-row gap-4">
                            <div class="flex flex-wrap gap-2 w-full">
                                <label for="email">Your Email</label>
                                <InputText id="email" v-model="form.email" type="email" name="email" required />
                            </div>
                            <div class="flex flex-wrap gap-2 w-full">
                                <label for="firstname">Firstname</label>
                                <InputText id="firstname" v-model="form.firstname" type="text" name="firstname" />
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-2 w-full">
                            <label for="lastname">Lastname</label>
                            <InputText id="lastname" v-model="form.lastname" type="text" name="lastname" />
                        </div>
                        <div class="flex flex-wrap gap-2 w-full">
                            <label for="recommendations">Your Message</label>
                            <Textarea id="recommendations" v-model="form.message" name="message" rows="4" />
                        </div>
                        <div class="flex mt-4 buttonsRegister">
                            <Button id="button" type="submit" label="Send" icon="pi pi-check" />
                        </div>
                    </div>
                </div>
            </Fluid>
            <Dialog v-model:visible="showDialog" header="Success" :modal="true" :closable="false">
                <p>Thank you for filling out the form!</p>
                <Button label="OK" icon="pi pi-check" @click="showDialog = false" />
            </Dialog>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const form = ref({
    email: '',
    firstname: '',
    lastname: '',
    message: ''
});

const showDialog = ref(false);

const submitForm = async () => {
    try {
        await axios.post('https://formspree.io/f/xdkeawbr', form.value);
        showDialog.value = true; 
        form.value = { email: '', firstname: '', lastname: '', message: '' }; 
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        alert('Something went wrong. Please try again.');
    }
};
</script>

<style scoped>
#container {
    text-align: center;
    justify-content: center;
    display: flex;
    padding-left: 4%;
    padding-right: 4%;
}

.buttonsRegister {
    display: flex;
    align-content: center;
}

.title {
    text-align: center;
    padding-bottom: 6%;
}
</style>
