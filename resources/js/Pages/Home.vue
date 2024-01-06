<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue';

const router = useRouter()
const XLayout = defineAsyncComponent(() => import('@/Layouts/XLayout.vue'))
const GuestLayout = defineAsyncComponent(() => import('@/Layouts/GuestLayout.vue'))

const enableGuestLayout = computed(() => {
    return ['/login', '/register'].includes(router.currentRoute.value.path) 
})

</script>

<template>
    <component :is="enableGuestLayout ? GuestLayout : XLayout">
        <router-view />
    </component>
</template>
