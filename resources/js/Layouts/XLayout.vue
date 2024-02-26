<script setup lang="ts">
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
import Dropdown from '@/Components/Dropdown.vue'
import DropdownLink from '@/Components/DropdownLink.vue'
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue'
import { endpoint, isLogin, logout } from '@/lib'
import { onMounted, ref, unref, watch } from 'vue'

const showingNavigationDropdown = ref(false)
const username = ref('Гость')
const userId = ref(NaN)
const loading = ref(true)


function getSelf(): Promise<{name: string, id: number}> {
    loading.value = true
    let response
    if (!unref(isLogin)) {
        response = Promise.resolve({name: 'Гость', id: NaN})
    }
    else {
        response = endpoint('/user/get-by-self')
            .get()
            .auth()
            .json()
            .dispatch()
    }
    return response.finally(() => loading.value = false)
}

watch(() => unref(isLogin), async () => {
    const self = await getSelf()
    username.value = self.name
    userId.value = self.id
})

onMounted(getSelf)


</script>

<template>
    <div>
        <div class="min-h-screen bg-gray-100">
            <nav class="bg-white border-b-2 sticky top-0 border-gray-200">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="shrink-0 flex items-center">
                                <router-link :to="'/'">
                                    <ApplicationLogo
                                        class="block h-9 w-auto fill-current text-gray-800"
                                    />
                                </router-link>
                            </div>

                            <!-- Navigation Links -->
                            <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                            
                            </div>
                        </div>

                        <div class="hidden sm:flex sm:items-center sm:ms-6">
                            <!-- Settings Dropdown -->
                            <div class="ms-3 relative">
                                <p v-if="loading"> Загрузка... </p>
                                <Dropdown v-else align="right" width="48">
                                    <template #trigger>
                                        <span class="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                            {{ username }}

                                                <svg
                                                    class="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </template>

                                    <template #content>
                                        <template v-if="isLogin">
                                                <DropdownLink href="/profile-edit"> Мой профиль </DropdownLink>
                                                <button
                                                @click="logout().then(({end}) => end())"
                                                class="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" type="button">
                                                    Выйти из системы
                                                </button>
                                            </template>
                                            <template v-else>
                                                <DropdownLink href="/login"> Войти </DropdownLink>
                                                <DropdownLink href="/register"  as="button">
                                                    Регистарция
                                                </DropdownLink>
                                            </template>
                                    </template>
                                </Dropdown>
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
                        <router-link :to="'/'" >
                            Home
                        </router-link>
                    </div>

                    <!-- Responsive Settings Options -->
                    <div class="pt-4 pb-1 border-t border-gray-200">
                        <div class="px-4">
                            <div class="font-medium text-base text-gray-800">
                                {{ username }}
                            </div>
                            <!-- <div class="font-medium text-sm text-gray-500">{{ $page.props?.auth?.user?.email }}</div> -->
                        </div>

                        <div class="mt-3 space-y-1">
                            <ResponsiveNavLink :href="('/profile-edit')"> Мой профиль </ResponsiveNavLink>
                            <ResponsiveNavLink :href="('/logout')" method="post" as="button">
                                Выйти из системы
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            
            <!-- Page Content -->
            <main  class="mx-auto mt-8 max-w-full md:max-w-2xl lg:max-w-4xl px-4">
                <slot />
            </main>
        </div>
    </div>
</template>
