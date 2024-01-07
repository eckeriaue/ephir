<script setup lang="ts">
import CreatePost from '@/Components/CreatePost.vue';
import { endpoint, isLogin } from '@/lib';
import { defineAsyncComponent, onMounted, ref } from 'vue';

defineProps<{
  modelValue?: object
}>()

const emit = defineEmits<{
  'update:modelValue': [object]
}>()

const SinglePost = defineAsyncComponent(() => import('@/Components/SinglePost.vue'))

const posts = ref()
const loading = ref(true)

async function getPosts(offset = 0, limit = 10) {
  loading.value = true
  return endpoint('/posts')
    .get()
    .json()
    .query('offset', offset.toString())
    .query('limit', limit.toString())
    .dispatch()
    .then(res => {
      return posts.value = res
    })
    .finally(() => loading.value = false)
}

onMounted(getPosts)


</script>
<template>
  <section>
    <create-post v-if="isLogin" @create="posts.unshift($event)" class="w-full my-4" />
    <p v-if="loading"> Загрузка... </p>
    <section v-else-if="posts?.length">
      <single-post v-for="post in posts" :key="post.id" v-bind="post" />
    </section>
    <section v-else class="flex items-center justify-center">
      <p classs="text-xs text-gray-500"> Здесь пока ничего нет... </p>
    </section>
  </section>
</template>
