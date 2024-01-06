<script setup lang="ts">
  import { ref } from 'vue'
  import { createGuestRequest } from '@/lib'
import { onMounted } from 'vue';

  
  const posts = ref()
  const loading = ref(true)

  onMounted(async () => {
    fetch(await createGuestRequest(`/api/v1/posts`))
    .then(res => res.json())
    .then(res => posts.value = res)
    .finally(() => loading.value = false)
  })


</script>
<template>
  <p v-if="loading"> Загрузка... </p>
  <section class="space-y-4 max-w-4xl mx-auto break-words" v-else>
    <article v-for="post in posts" :key="post.id">
      {{ post.title }}
    </article>
  </section>
</template>