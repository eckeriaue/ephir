<script setup lang="ts">
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link, useForm } from '@inertiajs/vue3';
import { computed, unref, ref, watchEffect } from 'vue';

const showingNavigationDropdown = ref(false);

const createPostForm = useForm({
    title: '',
    content: '',
    photos: [] as File[]
})

const imgs = ref<string[]>([])

const logoutForm = useForm({})



const modalCreatePostIsOpen = ref(false);

function addPhoto(event: Event) {
    const target = event.target;
    if(
        target &&
        target instanceof HTMLInputElement &&
        target.files && 0 in target.files
    ) {
        createPostForm.photos.push(target.files[0])
        imgs.value.push(URL.createObjectURL(target.files[0]))
    }
}

</script>

<template>
    <div>
        <div class="min-h-screen bg-gray-100">
            <nav class="bg-white border-b border-gray-100 sticky top-0">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="shrink-0 flex items-center">
                                <Link :href="route('posts')">
                                    <ApplicationLogo
                                        class="block h-9 w-auto fill-current text-gray-800"
                                    />
                                </Link>
                            </div>

                            <!-- Navigation Links -->
                            <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <!-- <NavLink :href="route('posts')" :active="route().current('posts')">
                                    Главная
                                </NavLink> -->
                            </div>
                        </div>

                        <div class="hidden sm:flex sm:items-center sm:ms-6">
                            <!-- Settings Dropdown -->
                            <div class="ms-3 relative">
                                <kit-dialog v-if="$page.props.auth?.user" v-model:open="modalCreatePostIsOpen">
                                    <kit-dialog-trigger as-child>
                                        <kit-button>
                                            🪶
                                        </kit-button>
                                    </kit-dialog-trigger>
                                    <kit-dialog-content class="overflow-y-scroll max-h-[calc(100dvh_-_64px)]">
                                        <kit-dialog-title> Создать пост </kit-dialog-title>
                                        <kit-dialog-description>Здесь вы можете написать о чем вы думаете </kit-dialog-description>
                                        <form
                                            class="min-w-fit"
                                            @submit.prevent="createPostForm.post(route('posts.create')), modalCreatePostIsOpen = false"
                                        >
                                            <kit-label for="postName"> Название </kit-label>
                                            <kit-input v-model="createPostForm.title" id="postName" class="mt-2" />
                                            <div class="mt-4 max-w-full">
                                                <kit-label for="postContent"> Содержимое </kit-label>
                                                <kit-textarea class="mt-2" id="postContent" v-model="createPostForm.content"></kit-textarea>
                                                <kit-label for="picture" class="mt-2 inline-block"> Добавить фото </kit-label>
                                                <kit-input id="picture" @change="addPhoto" type="file" />
                                            
                                                <div class="w-full mt-6" v-if="imgs.length > 0">
                                                    <div class="grid grid-cols-4 gap-4 min-h-40">
                                                       <div
                                                            v-for="(img, i) in imgs"
                                                            :key="img + i"
                                                            :style="{backgroundImage: `url('${img}')`}"
                                                            class="bg-cover w-full rounded aspect-square"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="gap-x-2 flex justify-end mt-4">
                                                <kit-button type="button" @click="modalCreatePostIsOpen = false, createPostForm.title = '', createPostForm.content = ''" variant="secondary">Отменить</kit-button>
                                                <kit-button type="submit" :disabled="createPostForm.title.length < 1 || createPostForm.content.length < 1 || createPostForm.processing">Сохранить</kit-button>
                                            </div>
                                        </form>
                                    </kit-dialog-content>
                                </kit-dialog>
                                <kit-dropdown-menu>
                                    <kit-dropdown-trigger>
                                            <kit-button v-if="$page.props.auth.user" variant="ghost" type="button" class="font-medium text-base text-gray-800">
                                                    {{ $page.props.auth.user?.name }}
                                            </kit-button>
                                            <kit-button v-else variant="ghost" type="button" class="font-medium text-base text-gray-800">
                                                Гость
                                            </kit-button>
                                    </kit-dropdown-trigger>
                                    <kit-dropdown-content align="end" class="w-56">
                                        <kit-command v-if="$page.props.auth.user" class="mt-3 space-y-1">
                                            <kit-dropdown-menu-item :as="Link" :href="route('profile.edit')">
                                                👤
                                                Профиль
                                            </kit-dropdown-menu-item>
                                            <kit-dropdown-menu-item @click="logoutForm.post(route('logout'))">
                                                🔓
                                                Выйти
                                            </kit-dropdown-menu-item>
                                        </kit-command>
                                        <kit-command v-else>
                                            <kit-dropdown-menu-item :as="Link" :href="route('login')">
                                                🔑
                                                Войти
                                            </kit-dropdown-menu-item>
                                            <kit-dropdown-menu-item  :as="Link" :href="route('register')">
                                                🪪
                                                Регистрация
                                            </kit-dropdown-menu-item>
                                        </kit-command>
                                    </kit-dropdown-content>
                                </kit-dropdown-menu>
                            </div>
                        </div>

                        <!-- Hamburger -->
                        <div class="-me-2 flex items-center sm:hidden">
                            <button
                                @click="showingNavigationDropdown = !showingNavigationDropdown"
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        :class="{
                                            hidden: showingNavigationDropdown,
                                            'inline-flex': !showingNavigationDropdown,
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        :class="{
                                            hidden: !showingNavigationDropdown,
                                            'inline-flex': showingNavigationDropdown,
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div
                    :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }"
                    class="sm:hidden"
                >
                    <div class="pt-2 pb-3 space-y-1">
                        <!-- <ResponsiveNavLink :href="route('posts')" :active="route().current('posts')">
                            Главная
                        </ResponsiveNavLink> -->
                    </div>

                    <!-- Responsive Settings Options -->
                    <div class="pt-4 pb-1 border-t border-gray-200">
                        <kit-dropdown-menu>
                            <kit-dropdown-trigger as-child>
                                <div class="px-4">
                                    <div class="font-medium text-base text-gray-800">
                                        {{ $page.props.auth.user?.name }}
                                    </div>
                                    <div class="font-medium text-sm text-gray-500">{{ $page.props.auth.user?.email }}</div>
                                </div>
                            </kit-dropdown-trigger>
                            <kit-dropdown-content class="w-56">
                                <kit-command class="mt-3 space-y-1">
                                    <kit-dropdown-menu-item> Профиль </kit-dropdown-menu-item>
                                    <kit-dropdown-menu-item> Выйти </kit-dropdown-menu-item>
                                        <!-- <ResponsiveNavLink :href="route('profile.edit')"> Профиль </ResponsiveNavLink>
                                        <ResponsiveNavLink :href="route('logout')" method="post" as="button">
                                            Log Out
                                        </ResponsiveNavLink> -->
                                </kit-command>
                            </kit-dropdown-content>
                        </kit-dropdown-menu>

                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <header class="bg-white sticky inset-0 shadow" v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot />
            </main>
        </div>
    </div>
</template>
