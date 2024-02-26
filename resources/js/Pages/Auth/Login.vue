<script setup lang="ts">
import Checkbox from '@/Components/Checkbox.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { login } from '@/lib';
import { useRouter } from 'vue-router';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const router = useRouter()
const form = ({
    email: '',
    password: '',
    remember: false,
    processing: false,
});

async function doLogin() {

    try {
        const { end } = await login({
            email: form.email,
            password: form.password
        })
        await router.push('/')
        end()
    }

    catch (e) {
        throw new Error(`При логине проишозла какая-то ошибка`, { cause: e })
    }
}

</script>

<template>
    <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
        {{ status }}
    </div>

    <form @submit.prevent="doLogin()">
        <div>
            <InputLabel for="email" value="Email" />

            <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" placeholder="Email" required
                autofocus autocomplete="username" />

        </div>

        <div class="mt-4">
            <InputLabel for="password" value="Пароль" />

            <TextInput id="password" type="password" class="mt-1 block w-full" placeholder="Пароль" v-model="form.password"
                required autocomplete="current-password" />

        </div>

        <div class="block mt-4">
            <label class="flex items-center">
                <Checkbox name="remember" v-model:checked="form.remember" />
                <span class="ms-2 text-sm text-gray-600">Запомнить меня</span>
            </label>
        </div>

        <div class="flex items-center justify-end mt-4">
            <!-- <router-link
                    v-if="canResetPassword"
                    to=""
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                >
                    Забыли пароль?
                </router-link> -->

            <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Войти
            </PrimaryButton>
        </div>
    </form>
</template>
