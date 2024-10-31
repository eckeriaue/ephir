<script setup lang="ts">
import { provide, ref } from 'vue'

const isOpen = ref(false)
const reference = ref()

function toggle() {
  isOpen.value = !isOpen.value
}

provide(`selectmenu`, { isOpen, reference, toggle })

</script>

<template>
  <div>
    <slot />
  </div>
</template>