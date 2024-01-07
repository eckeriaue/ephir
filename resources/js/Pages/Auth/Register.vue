<script setup lang="ts">
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { createGuestRequest, login$ } from '@/lib';
import { useRouter } from 'vue-router';

const form = ({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const router = useRouter()

async function submit() {
    const request = await createGuestRequest('/api/v1/register', {
        method: 'POST',
        body: form
    })

    return fetch(request)
    .then(res => res.json())
    .then(async (res) => {
        await router.push('/login')
    })
}

</script>

<template>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="name" value="Name" />

                <TextInput
                    id="name"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="name"
                />

            </div>

            <div class="mt-4">
                <InputLabel for="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autocomplete="username"
                />

            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Пароль" />

                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="new-password"
                />

            </div>

            <div class="mt-4">
                <InputLabel for="password_confirmation" value="Подтвердите пароль" />

                <TextInput
                    id="password_confirmation"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password_confirmation"
                    required
                    autocomplete="new-password"
                />

            </div>

            <div class="flex items-center justify-end mt-4">
                <router-link
                    :to="('/login')"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                >
                    Уже зарегистрированы?
                </router-link>

                <PrimaryButton class="ms-4" >
                    Регистрация
                </PrimaryButton>
            </div>
        </form>
</template>
