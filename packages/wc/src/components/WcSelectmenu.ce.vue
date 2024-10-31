<script setup lang="ts">
import { provide, ref } from 'vue'

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}

provide(`selectmenu`, { isOpen, toggle })

</script>

<template>
  <div>
    <slot />
  </div>
</template>