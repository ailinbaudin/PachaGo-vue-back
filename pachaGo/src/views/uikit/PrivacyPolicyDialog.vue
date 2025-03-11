<template>
    <Dialog v-model:visible="visible" header="Privacy Policy" :style="{ width: '30rem' }">
        <div class="text-surface-500 dark:text-surface-400 block mb-8">
            <h3 class="font-bold text-lg mb-4">🛡️ Privacy Policy - Pachago</h3>

            <p>At <strong>Pachago</strong>, we take the protection of your personal information very seriously. We
                want you to know that:</p>

            <ul class="list-disc ml-5 my-3">
                <li><strong>Your personal data will not be shared or sold</strong> to third parties under any
                    circumstances.</li>
                <li>The information you provide will be used <strong>exclusively</strong> to enhance your experience
                    on our website.</li>
            </ul>

            <p>Your data will only be used to:</p>
            <ul class="list-disc ml-5 my-3">
                <li>Manage your account and provide you with access to our services.</li>
                <li>Communicate with you regarding updates, news, or matters related to your account.</li>
                <li>Improve the functionality and performance of our website.</li>
            </ul>

            <p>
                By checking the acceptance box, you confirm that you have read and agree to our
                <strong>Privacy Policy</strong>, which ensures your data will be treated with the utmost care and
                security.
            </p>

            <p class="mt-4">
                If you have any questions or concerns about how your data is used, please feel free to contact our
                support team.
            </p>

            <p class="font-bold mt-4">Your privacy is our priority.</p>
        </div>

        <div class="flex justify-end gap-2">
            <Button type="button" label="Cancel" severity="secondary" @click="closeDialog"></Button>
            <Button type="button" label="Save" @click="closeDialog"></Button>
        </div>
    </Dialog>
</template>

<script setup>
import { defineEmits, defineProps, ref, watch } from "vue";

const props = defineProps({
    visible: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(["update:visible"]);

const visible = ref(props.visible);

// Observa cambios en la prop `visible` para mantener el estado actualizado
watch(() => props.visible, (newValue) => {
    visible.value = newValue;
});

// Cierra el diálogo y actualiza el estado en el componente padre
function closeDialog() {
    emit("update:visible", false);
}
</script>