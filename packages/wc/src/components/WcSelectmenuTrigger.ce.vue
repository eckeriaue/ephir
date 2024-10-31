<script setup lang="ts">
import { inject } from 'vue'


const { isOpen } = inject(`selectmenu`)


</script>

<template>
  <div tabindex="-1" @focusin="isOpen = true" @focusout="isOpen = false">
    <slot />
  </div>
</template>