<script setup lang="ts">

const props = defineProps<{
  id?: string | number
  title?: string
  content?: string
  comments_count?: string | number
  created_at?: string
  author?: string
}>();

</script>

<template>
  <article
    class="text-gray-700 rounded-md p-6 transition-shadow hover:shadow bg-white mb-4 overflow-hidden shadow-sm sm:rounded-lg"
    :id="`post_id_${id}`"
  >

  <div class="pb-6 flex items-start justify-between">
    <h1 v-text="title" class="max-w-[70%] break-words font-medium text-xl" />
    <time :value="created_at" class="text-gray-500 text-xs">{{ $props.created_at }}</time>
  </div>
  <p class="break-words whitespace-pre-wrap break-all">{{ content }}</p>

  <footer class="text-gray-800 mt-8 flex items-center justify-between">
    <address class="text-xs">
        Автор: <i>{{ $props.author }}</i>
    </address>

    <kit-button variant="secondary" type="button">
        💬
        <span>{{ comments_count }}</span>
    </kit-button>
    </footer>
  </article>
</template>