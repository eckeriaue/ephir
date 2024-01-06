<script setup lang="ts">
import { onMounted, ref } from 'vue'

defineProps<{
    modelValue: string
}>();

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
// todo: tw classes for dark theme
// dark:focus:bg-[rgb(15,16,19)] dark:bg-[rgb(16,17,20)]
</script>

<template>
    <input
        class="border-2
            border-transparent
            p-[7px] rounded-xl
            focus:pl-[15px]
            duration-[.25s]
            text-[13.3px]
            transition-all
            outline-none
            focus:placeholder:opacity-0
            placeholder:transition-all
            focus:border-b-lime-600
            text-[rgb(44,62,80)]
            focus:bg-[rgb(240,243,244)] bg-[rgb(241,244,245)]
            "
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        ref="input"
    />
</template>
