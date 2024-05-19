<script setup lang="ts">
import DangerButton from '@/Components/DangerButton.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import Modal from '@/Components/Modal.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import { nextTick, ref } from 'vue';

const confirmingUserDeletion = ref(false);
const passwordInput = ref<HTMLInputElement | null>(null);

const form = useForm({
    password: '',
});

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;

    nextTick(() => passwordInput.value?.focus());
};

const deleteUser = () => {
    form.delete(route('profile.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value?.focus(),
        onFinish: () => {
            form.reset();
        },
    });
};

const closeModal = () => {
    confirmingUserDeletion.value = false;

    form.reset();
};
</script>

<template>
    <section class="space-y-6">
        <header>
            <h2 class="text-lg font-medium text-gray-900">Удалить аккаунт</h2>

            <p class="mt-1 text-sm text-gray-600">
                После удаления вашей учетной записи все ее ресурсы и данные будут безвозвратно удалены. Перед удалением
                Перед удалением учетной записи загрузите все данные и информацию, которые вы хотите сохранить.
            </p>
        </header>

        <kit-button variant="destructive" @click="confirmUserDeletion">Удалить аккаунт</kit-button>

        <Modal :show="confirmingUserDeletion" @close="closeModal">
            <div class="p-6">
                <h2 class="text-lg font-medium text-gray-900">
                    Вы уверены, что хотите удалить свою учетную запись?
                </h2>

                <p class="mt-1 text-sm text-gray-600">
                    После удаления вашей учетной записи все ее ресурсы и данные будут безвозвратно удалены. Пожалуйста,
                    введите свой пароль, чтобы подтвердить, что вы хотите навсегда удалить свою учетную запись.
                </p>

                <div class="mt-6">
                    <kit-label for="password" class="sr-only">Пароль</kit-label>

                    <kit-input
                        id="password"
                        ref="passwordInput"
                        v-model="form.password"
                        type="password"
                        class="mt-1 block w-3/4"
                        placeholder="Пароль"
                        @keyup.enter="deleteUser"
                    />

                    <InputError :message="form.errors.password" class="mt-2" />
                </div>

                <div class="mt-6 flex justify-end">
                    <kit-button variant="secondary" @click="closeModal"> Закрыть </kit-button>

                    <kit-button
                        class="ms-3"
                        variant="destructive"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        @click="deleteUser"
                    >
                        Удалить аккаунт
                    </kit-button>
                </div>
            </div>
        </Modal>
    </section>
</template>
