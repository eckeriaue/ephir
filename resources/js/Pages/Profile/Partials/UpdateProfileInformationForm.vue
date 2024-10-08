<script setup lang="ts">
// @ts-nocheck
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';


defineProps<{
    mustVerifyEmail?: Boolean;
    status?: String;
}>();

const page = usePage()

const user = page.props.auth.user


const form = useForm({
    avatar: null,
    name: user.name,
    email: user.email,
})


const avatar = computed(() => {
  if (form.avatar) {
    return URL.createObjectURL(form.avatar)
  }
  else if ('avatar' in page.props.auth.user && page.props.auth.user.avatar) {
    return page.props.auth.user.avatar;
  }
  return null
})

</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900">Информация о профиле</h2>

            <p class="mt-1 text-sm text-gray-600">
                Обновите информацию о профиле и адрес электронной почты своей учетной записи.
            </p>
        </header>

        <form @submit.prevent="form.post(route('profile.update'))" class="mt-6 space-y-6">
            <div>
                <img v-if="avatar" :src="avatar" />
                <input type="file" name="avatar" @input="form.avatar = $event.target['files'][0]" />
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
