<script setup>
import { provide } from 'vue';


const modelValue = defineModel()
const emit = defineEmits(['select'])

provide('wc-listbox', {
  select(value) {
    emit('select', modelValue.value = value)
  }
})

</script>

<template>
  <div class="listbox">
    <slot />
  </div>
</template>
<style scoped>
.listbox {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 6px 18px 0 rgba(208, 215, 222, .5),
  0 6px 12px -3px rgba(66, 74, 83, .04),
  0 0 0 1px rgba(66, 74, 83, .12);
  background: #fff;
}
</style>