<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { reactive } from 'vue'

const form = reactive({
    password: '',
    processing: false,
})

function submit() {

}
</script>

<template>
    <GuestLayout>
        <Head title="Подтвердите пароль" />

        <div class="mb-4 text-sm text-gray-600">
            Это защищенная часть приложения. Пожалуйста, подтвердите свой пароль, прежде чем продолжить.
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="password" value="Пароль" />
                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                    autofocus
                />
            </div>

            <div class="flex justify-end mt-4">
                <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Подтвердите
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
