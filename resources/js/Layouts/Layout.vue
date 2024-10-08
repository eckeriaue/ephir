<script setup lang="ts">
// @ts-nocheck
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
import CreatePostModal from '@/Components/CreatePostModal.vue'
import { Link, useForm } from '@inertiajs/vue3'
import { ref } from 'vue'

withDefaults(defineProps<{
    canUpdatePosts?: boolean
}>(), {
    canUpdatePosts: false,
})

const showingNavigationDropdown = ref(false)
const logoutForm = useForm({})

</script>

<template>
    <div>
        <div class="min-h-screen bg-gray-100">
            <nav class="bg-white border-b border-gray-100 sticky z-10 top-0">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="flex items-center gap-x-4">
                                <Link :href="route('posts')">
                                    <ApplicationLogo
                                        class="block h-9 w-auto fill-current text-gray-800"
                                    />
                                </Link>
                                <kit-button
                                    :as="Link"
                                    v-if="$props.canUpdatePosts"
                                    :href="route('posts')"
                                    variant="secondary"
                                    class="size-6 px-0 group"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 group-hover:rotate-180 transition-transform duration-300">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                </kit-button>
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
                                <create-post-modal />
                                <kit-dropdown-menu>
                                    <kit-dropdown-trigger>
                                            <kit-button v-if="$page.props.auth.user" variant="ghost" type="button" class="font-medium text-base text-gray-800">
                                                {{ $page.props.auth.user?.name }}
                                                <img :src="$page.props.auth.user.avatar" v-if="$page?.props?.auth?.user?.avatar" class="size-8 block ml-2 rounded-full" />
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
                        <kit-command class="mt-3 space-y-1">
                            <template v-if="$page.props.auth.user">
                                <create-post-modal>
                                    <kit-button>
                                        🪶 Создать пост
                                    </kit-button>
                                </create-post-modal>
                                <kit-button :as="Link" :href="route('profile.edit')">
                                    👤
                                    Профиль
                                </kit-button>
                                <kit-button @click="logoutForm.post(route('logout'))">
                                    🔓
                                    Выйти
                                </kit-button>
                            </template>
                            <template v-else>
                                <kit-button :as="Link" :href="route('login')">
                                    🔑
                                    Войти
                                </kit-button>
                                <kit-button  :as="Link" :href="route('register')">
                                    🪪
                                    Регистрация
                                </kit-button>
                            </template>
                        </kit-command>
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
