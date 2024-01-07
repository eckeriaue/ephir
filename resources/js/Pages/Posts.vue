<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue'
import { isLogin, createGuestRequest, login$, logout$ } from '@/lib'
import CreatePost from '@/Components/CreatePost.vue'


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
  return fetch(await createGuestRequest(`/api/v1/posts`))
    .then(res => res.json())
    .then(res => {
      return posts.value = res
    })
    .finally(() => loading.value = false)
}

onMounted(getPosts)

const loginSub = login$.subscribe(() => getPosts())
const logoutSub = logout$.subscribe(() => getPosts())

onUnmounted(() => {
  loginSub.unsubscribe()
  logoutSub.unsubscribe()
})

</script>
<template>
  <section>
    <create-post @create="posts.unshift($event)" v-if="isLogin" class="w-full my-4" />
    <p v-if="loading"> Загрузка... </p>
    <section v-else-if="posts?.length">
      <single-post v-for="post in posts" :key="post.id" v-bind="post" />
    </section>
    <section v-else class="flex items-center justify-center">
      <p classs="text-xs text-gray-500"> Здесь пока ничего нет... </p>
    </section>
  </section>
</template>
