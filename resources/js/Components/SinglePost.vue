<script setup lang="ts">
  import { computed } from 'vue'

  const props = withDefaults(defineProps<{
    id?: number
    title?: string
    content?: string
    created_at?: string
  }>(), {
    id: NaN,
    title: '',
    content: '',
  })


  const formatter = new Intl.DateTimeFormat('ru-RU', {
    dateStyle: 'medium',
    timeZone: 'Europe/Moscow'
  })

  const createdAt = computed(() => {
    if (!props.created_at) return ''
    return formatter.format(new Date(props.created_at))
  })

  const createdAtTime = new Date(props.created_at).toISOString()
</script>

<template>
  <article class="text-gray-700 mb-7 bg-white rounded-md p-6 border-b-2 border-gray-200">
    <h1 class="flex justify-between lg:items-center pb-6 flex-col lg:flex-row">
      <span class="font-medium text-xl">
        {{ title }}
      </span>
      <time class="text-gray-500 text-xs" :datetime="createdAtTime" v-if="props.created_at">
        {{  createdAt  }}
      </time>
    </h1>

    <p class="break-words" v-if=content v-html="content" />
  </article>
</template>