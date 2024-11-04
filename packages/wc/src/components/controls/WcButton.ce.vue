<script setup lang="ts">

withDefaults(defineProps<{
  type?: 'submit' | 'reset' | 'button'
  appearance?: 'primary' | 'secondary'
}>(), {
  appearance: 'primary',
  type: 'button'
})

</script>

<template>
  <button
    :type
    :class="{ secondary: appearance === 'secondary' }"
  >
    <slot />
  </button>
</template>

<style scoped>

button:disabled {
  opacity: 80;
  cursor: not-allowed;
}

button:focus {
  outline: 1px solid #0969da;
}

button {
  display: inline-flex;
  align-items: center;
  column-gap: 8px;
  border: none;
  outline: 1px solid #d0d7de;
  border-radius: 6px;
  padding: 6px 12px;
  height: 32px;
  box-shadow: 0 1px 0 0 #1f23284f;
  background: #f6f8fa;
  cursor: pointer;
  font-size: 14px;
  color: #1f2328;
}

button.secondary {
  color: #fff;
  background-color: #0969da;
}

</style>