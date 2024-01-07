<script setup lang="ts">
import { ref, unref, onMounted } from 'vue';
import SecondaryButton from './SecondaryButton.vue';
import TextInput from './TextInput.vue';

  const props = defineProps<{
    postId?: number
  }>()


  const emit = defineEmits<{
    create: [any]
  }>()

  const loading = ref(true)
  const comments = ref()

  const commentValue = ref('')

  async function addComment() {
    loading.value = true
    // const res = await fetch(await createRequest(`/api/v1/posts/${props.postId}/comments/create`, {
    //   method: 'POST',
    //   body: {comment: unref(commentValue)}
    // })).then(res => res.json())

    await getComments()
    commentValue.value = ''
    // emit('create', res)
  }

  const formatter = new Intl.DateTimeFormat('ru-RU', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'Europe/Moscow'
  })


  const getComments = async () => {
    // const res = await fetch(await createRequest(`/api/v1/posts/${props.postId}/comments?limit=999`))
    // .then(res => res.json())
    // .finally(() => loading.value = false)
    // comments.value = res
  }

  onMounted(getComments)

</script>

<template>
  <section>
    <div class="min-h-0">
      <h2 class="text-xs font-medium px-6 pb-2 uppercase"> КОММЕНТАРИИ </h2>
      <div class="grid duration-500 transition-all" :class="{'grid-rows-[0fr]': !comments, 'grid-rows-[1fr]': Array.isArray(comments)}">
        <transition-group name="list" tag="ol" class="space-y-4 px-6 min-h-0">
          <li v-for="comment in comments" :key="comment.id">
            <address
              class="text-gray-500 text-xs inline-block">
              Автор: <a role="author" href="#" v-text="comment.user?.name" />
            </address>
            <p class="text-sm text-gray-800"> {{ comment.content }} </p>
            <time
              v-if="comment.created_at"
              :datetime="new Date(comment.created_at).toISOString()"
              class="text-gray-500 text-[10px]"
            >
              {{ formatter.format(new Date(comment.created_at)) }}
            </time>
          </li>
        </transition-group>
      </div>
  
      <form :inert="loading" :class="{'opacity-50': loading}" action="post" @submit.prevent="addComment" class="sticky bottom-0 flex items-center group w-full mt-6 ">
        <text-input v-model="commentValue" class="h-[36px] grow rounded-t-none rounded-r-none" placeholder="Напишите свой комментарий" />
        <secondary-button class="h-[36px] group-focus-within:border-b-lime-600 border-b-2 rounded-l-none">📨</secondary-button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  opacity: 1;
  max-height: 999px;
  @apply transition-all duration-300
}

.list-enter-from,
.list-leave-to {
  max-height: 0px;
  opacity: 0;
  @apply transition-all duration-300
}
</style>