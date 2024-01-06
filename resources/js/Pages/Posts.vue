<script setup lang="ts">
  import { client } from '@/lib';
import { ref } from 'vue'
  const posts = ref()

  const loading = ref(true)

  client.get('/api/v1/posts')
    .then(res => {
      posts.value = res
    })
    .finally(() => loading.value = false)

</script>
<template>
  <p v-if="loading"> Загрузка... </p>
  <section class="space-y-4 max-w-4xl mx-auto break-words" v-else>
    <article v-for="post in posts" :key="post.id">
      {{ post.title }}
    </article>
  </section>
</template>