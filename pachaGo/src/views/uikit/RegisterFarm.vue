<script setup>
import { ref } from 'vue';
import PrivacyPolicyDialog from './PrivacyPolicyDialog.vue';

const password = ref('');
const confirmPassword = ref('');
const agreeToPrivacyPolicy = ref(false);
const showPrivacyPolicy = ref(false);
const canRegister = ref(false);

function openPrivacyPolicy() {
    showPrivacyPolicy.value = true;
}

// Actualiza el estado de visibilidad desde el componente hijo
function updateVisible(newVisibleState) {
    showPrivacyPolicy.value = newVisibleState;
}

function toggleRegisterButton() {
    canRegister.value = agreeToPrivacyPolicy.value;
}
</script>

<template>
    <Fluid>
        <div class="flex flex-col md:flex-row gap-8 containerPrincipal">
            <div id="formCollector" class="md:w-1/2">
                <div class="card flex flex-col gap-4">
                    <!-- Logo -->
                    <div class="logoContainer" id="logo-container">
                        <img src="/demo/images/landing/logo.png" alt="Hero Image" class="logo-img" />
                    </div>

                    <div class="font-bold titleForm text-xl">SIGN UP</div>

                    <!-- Nombre -->
                    <div class="flex flex-col gap-2">
                        <label for="name1"><i class="pi pi-user"></i> Name</label>
                        <div class="p-inputgroup">
                            <InputText id="name1" type="text" placeholder="Enter your name" />
                        </div>
                    </div>

                    <!-- Correo Electrónico -->
                    <div class="flex flex-col gap-2">
                        <label for="email1"><i class="pi pi-envelope"></i> Email</label>
                        <div class="p-inputgroup">
                            <InputText id="email1" type="email" placeholder="Enter your email" />
                        </div>
                    </div>

                    <!-- Contraseña -->
                    <div class="flex flex-col gap-2">
                        <label for="password1"><i class="pi pi-lock"></i> Password</label>
                        <div class="p-inputgroup">
                            <Password id="password1" v-model="password" placeholder="Enter your password" toggleMask />
                        </div>
                    </div>

                    <!-- Confirmar Contraseña -->
                    <div class="flex flex-col gap-2">
                        <label for="confirmPassword"><i class="pi pi-lock"></i> Confirm Password</label>
                        <div class="p-inputgroup">
                            <Password id="confirmPassword" v-model="confirmPassword" placeholder="Repeat your password"
                                toggleMask />
                        </div>
                    </div>

                    <!-- Teléfono Móvil -->
                    <div class="flex flex-col gap-2">
                        <label for="phone1"><i class="pi pi-phone"></i> Mobile Phone</label>
                        <div class="p-inputgroup">
                            <InputNumber id="phone1" type="tel" placeholder="Enter your phone number" />
                        </div>
                    </div>

                    <!-- Política de Privacidad -->
                    <div class="flex items-center gap-2 mt-4">
                        <InputSwitch v-model="agreeToPrivacyPolicy" class="p-checkbox" @change="toggleRegisterButton" />
                        <label for="privacyPolicy" class="mt-[2px]">
                            I agree to the <a href="#" @click.prevent="openPrivacyPolicy">Click here to read the Privacy
                                Policy</a>
                        </label>
                    </div>
                    <PrivacyPolicyDialog :visible="showPrivacyPolicy" @update:visible="updateVisible" />
                    <div class="flex mt-4 buttonsRegister">
                        <Button id="button" :disabled="!canRegister" label="Confirm" icon="pi pi-check" />
                        <Button label="Cancel" icon="pi pi-times" class="p-button-secondary" @click="resetForm" />
                    </div>
                </div>
            </div>
        </div>
    </Fluid>
</template>

<style scoped>
.containerPrincipal {
    max-width: 1000px;
}

.logoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
}

.logo-img {
    width: 100px;
    height: auto;
}

.titleForm {
    text-align: center;
}

#formCollector {
    text-align: left;
    border: 2px solid #aecb78 !important;
    border-radius: 8px;
}

#button {
    margin-right: 3%;
}

.buttonsRegister {
    padding: 2%;
}

.pi {
    margin-right: 2%;
    color: #aecb78;
}

.p-checkbox {
    color: #aecb78;
}

.mt-4 {
    margin-top: 1rem;
}
</style>
