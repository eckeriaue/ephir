<script setup lang="ts">
  import { ref } from 'vue'
  const posts = ref()

  const loading = ref(true)

  fetch('/api/v1/posts')
    .finally(() => {
      loading.value = false
    })
    .then(res => res.json())
    .then(res => {
      posts.value = res
    })
</script>
<template>
  <p v-if="loading"> Загрузка... </p>
  <section class="space-y-4 max-w-4xl mx-auto break-words" v-else>
    <article v-for="post in posts" :key="post.id">
      {{ post.title }}
      <p class="text-gray-700 mt-2"> {{ post.content }} </p>
    </article>
  </section>
</template>