<script setup lang="ts">
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Head, useForm } from '@inertiajs/vue3';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => {
            form.reset('password', 'password_confirmation');
        },
    });
};
</script>

<template>
    <div class="h-dvh flex flex-col items-center justify-center">
        <Head title="Register" />

        <ApplicationLogo class="mb-6" />
        <form @submit.prevent="submit" class="w-[360px]">
            <div>
                <kit-label for="name"> Имя </kit-label>
                <kit-input
                    id="name"
                    type="text"
                    v-model="form.name"
                    required
                    class="mt-2"
                    autofocus
                    autocomplete="name"
                />

            </div>

            <div class="mt-4">
                <kit-label for="email"> Почта </kit-label>

                <kit-input
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autocomplete="username"
                />

            </div>

            <div class="mt-4">
                <kit-label for="password"> Пароль </kit-label>

                <kit-input
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="new-password"
                />

            </div>

            <div class="mt-4">
                <kit-label for="password_confirmation"> Повторите пароль </kit-label>

                <kit-input
                    id="password_confirmation"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password_confirmation"
                    required
                    autocomplete="new-password"
                />

            </div>

            <div class="flex items-center justify-end mt-4">
                <kit-button
                    variant="link"
                    :href="route('login')"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Уже есть аккаунт?
                </kit-button>

                <kit-button class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Регистрация
                </kit-button>
            </div>
        </form>
    </div>
</template>
