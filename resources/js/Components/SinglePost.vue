<script setup lang="ts">
import SecondaryButton from './SecondaryButton.vue'
import { ref, unref, computed } from 'vue'
import PostComments from './PostComments.vue'
import { endpoint } from '@/lib'


const props = withDefaults(defineProps<{
  id?: number
  title?: string
  likes_count?: number
  my_like?: object
  user?: Partial<{
    name: string
  }>
  comments_count?: number
  content?: string
  created_at?: string
}>(), {
  id: NaN,
  title: '',
  content: '',
  comments: () => [],
  user: () => ({})
})


const formatter = new Intl.DateTimeFormat('ru-RU', {
  dateStyle: 'medium',
  timeZone: 'Europe/Moscow'
})

const disableLikeButton = ref(false)
const showComments = ref(false)

const likes = ref(props.likes_count)
const myLike = ref(props.my_like)
const commentCount = ref(props.comments_count)

const isLiked = computed<boolean>(() => {
  return unref(myLike) && 'id' in unref(myLike)
})

async function like() {
  disableLikeButton.value = true
  const res = await endpoint(`/posts/${props.id}/like`)
    .post()
    .json()
    .auth()
    .dispatch<{likes: number, my_like: object}>()

  likes.value = res.likes
  myLike.value = res.my_like 

  disableLikeButton.value = false
}

const createdAt = computed(() => {
  if (!props.created_at) return ''
  return formatter.format(new Date(props.created_at))
})

const createdAtTime = new Date(props.created_at).toISOString()
</script>

<template>
  <article :data-id="$props.id" class="text-gray-700 mb-7 bg-white rounded-xl p-6 border-b-2 border-gray-200">
    <header class="flex justify-between lg:items-center pb-6 flex-col lg:flex-row">
      <h1 class="font-medium text-xl">
        {{ title }}
      </h1>
      <time class="text-gray-500 text-xs" :datetime="createdAtTime" v-if="props.created_at">
        {{ createdAt }}
      </time>
    </header>

    <p class="break-words mb-8" v-if=content v-html="content" />

    <footer class="flex justify-between">
      <address class="text-gray-500 text-xs inline-block" v-if="user && 'name' in user">
        Автор: <a rel="author" href="#" v-text="user.name" />
      </address>

      <fieldset class="flex items-center gap-x-2">
        <secondary-button @click="showComments = !showComments"> 💬 {{ commentCount }}</secondary-button>
        <button type="button" :disabled="disableLikeButton" :class="{
          'bg-red-600 border-transparent  text-white   hover:bg-red-500 active:bg-red-700  focus:ring-2 focus:ring-red-500': isLiked,
          'bg-white border-gray-300 text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-lime-500': !isLiked,
        }"
          class="px-4 py-2 disabled:pointer-events-none border inline-flex items-center tracking-widest uppercase focus:outline-none rounded-md disabled:opacity-25 font-semibold text-xs focus:ring-offset-2  transition ease-in-out duration-150"
          @click="like">
          {{ isLiked ? '🤍' : '❤️' }}
          {{ likes }}
        </button>
      </fieldset>
    </footer>

    <transition>
      <post-comments @create="commentCount += 1" v-if="showComments" :post-id="$props.id"
        class="transition-all duration-500 overflow-hidden mt-6 -mx-6 -mb-6" />
    </transition>

  </article>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  display: grid;
  /* 1 */
  grid-template-rows: 1fr;
  /* 5 */
}

.v-enter-from,
.v-leave-to {
  display: grid;
  /* 1 */
  grid-template-rows: 0fr;
  /* 2 */
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>