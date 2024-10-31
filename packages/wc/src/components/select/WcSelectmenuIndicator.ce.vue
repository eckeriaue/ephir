<script setup>
import { inject } from 'vue'
const { isOpen } = inject(`selectmenu`)
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24" 
    stroke-width="1.5"
    stroke="currentColor"
    :style="isOpen && {
      rotate: `180deg`,
    }"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
</template>

<style scoped>
svg {
  width: 16px;
  height: 16px;
}
</style>