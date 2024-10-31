<script setup lang="ts">
import { inject } from 'vue'


const { isOpen } = inject(`selectmenu`)

</script>

<template>
  <div v-if="isOpen">
    <slot />
  </div>
</template>