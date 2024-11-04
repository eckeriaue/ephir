<script setup lang="ts">
import { provide, ref } from 'vue'

const isOpen = ref(false)
const reference = ref()

function close() {
  setTimeout(() => isOpen.value = false, 100)
}

function open(event: Event) {
  window.removeEventListener('click', close)
  isOpen.value = true
  window.addEventListener('click', close, { once: true })
}

provide(`selectmenu`, { isOpen, reference, open })

</script>

<template>
  <div>
    <slot />
  </div>
</template>