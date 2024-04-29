<script setup lang="ts">
import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';

const showingNavigationDropdown = ref(false);
</script>

<template>
    <div>
        <div class="min-h-screen bg-gray-100">
            <nav class="bg-white border-b border-gray-100">
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
                                <kit-dropdown-menu>
                                    <kit-dropdown-trigger>
                                            <kit-button variant="ghost" type="button" class="font-medium text-base text-gray-800">
                                                {{ $page.props.auth.user.name }}
                                            </kit-button>
                                    </kit-dropdown-trigger>
                                    <kit-dropdown-content align="end" class="w-56">
                                        <kit-command class="mt-3 space-y-1">
                                            <kit-dropdown-menu-item :as="Link" :href="route('profile.edit')">
                                                👤
                                                Профиль
                                            </kit-dropdown-menu-item>
                                            <kit-dropdown-menu-item :as="Link" :href="route('logout')">
                                                🔓
                                                Выйти
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
                                        {{ $page.props.auth.user.name }}
                                    </div>
                                    <div class="font-medium text-sm text-gray-500">{{ $page.props.auth.user.email }}</div>
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
            <header class="bg-white shadow" v-if="$slots.header">
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
