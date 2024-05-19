<script setup lang="ts">
import InputError from '@/Components/InputError.vue'
import { Link, useForm, usePage } from '@inertiajs/vue3'
import { computed, ref } from 'vue'

defineProps<{
    mustVerifyEmail?: Boolean
    status?: String
}>()

const user = usePage().props.auth.user

const form = useForm({
    name: user.name,
    email: user.email,
    avatar: [] as File[],
})

let avatarUrlSump: string

const urlAvatarLocal = computed(() => {
    if(avatarUrlSump) URL.revokeObjectURL(avatarUrlSump)
    const [avatar] = form.avatar;
    if(avatar && avatar instanceof File) {
        return avatarUrlSump = URL.createObjectURL(avatar)
    } else if ('avatar' in user && typeof user.avatar === 'string') {
        return user.avatar
    }
    return ''
})

function loadFile(event: Event) {
    const { target } = event
    const isInput = target instanceof HTMLInputElement
    if(!isInput) return
    form.avatar = [...target.files]
    
}

const avatarInput = ref<HTMLInputElement>()
</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900">Информация о профиле</h2>
            <p class="mt-1 text-sm text-gray-600">
                Обновите информацию о профиле и адрес электронной почты своей учетной записи.
            </p>
        </header>

        <form @submit.prevent="form.patch(route('profile.update'))" class="mt-6 space-y-6">

                <div class="flex flex-col">
                    <kit-label for="avatar"> Фото профиля </kit-label>
                    <button
                        type="button"
                        id="avatar"
                        class="size-40 mt-1"
                        @click="avatarInput.click()"
                    >
                        <input
                            hidden
                            ref="avatarInput"
                            type="file"
                            @input="loadFile"
                            accept="image/png, image/jpeg, image/jpg, image/webp"
                        />
                        <img
                            v-if="urlAvatarLocal"
                            :src="urlAvatarLocal"
                        />
                        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-full">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>
                </div>

                <div>
                    <kit-label for="name">Имя</kit-label>
                    <kit-input
                        id="name"
                        v-model="form.name"
                        required
                        autofocus
                        class="mt-1 block w-full"
                        autocomplete="name"
                    />
                    <InputError class="mt-2" :message="form.errors.name" />
                </div>

                <div>
                    <kit-label for="email"> Почта </kit-label>

                    <kit-input
                        id="email"
                        type="email"
                        class="mt-1 block w-full"
                        v-model="form.email"
                        required
                        autocomplete="username"
                    />

                    <InputError class="mt-2" :message="form.errors.email" />
                </div>

            <div v-if="mustVerifyEmail && user.email_verified_at === null">
                <p class="text-sm mt-2 text-gray-800">
                    Your email address is unverified.
                    <Link
                        :href="route('verification.send')"
                        method="post"
                        as="button"
                        class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    Нажмите здесь, чтобы повторно отправить письмо для проверки.
                    </Link>
                </p>

                <div
                    v-show="status === 'verification-link-sent'"
                    class="mt-2 font-medium text-sm text-green-600"
                >
                    На ваш адрес электронной почты отправлена новая ссылка для проверки.
                </div>
            </div>

            <div class="flex items-center gap-4">
                <kit-button :disabled="form.processing">Сохранить</kit-button>

                <Transition
                    enter-active-class="transition ease-in-out"
                    enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out"
                    leave-to-class="opacity-0"
                >
                    <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">Сохранено.</p>
                </Transition>
            </div>
        </form>
    </section>
</template>
