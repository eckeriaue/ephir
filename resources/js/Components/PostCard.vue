<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import { ref } from 'vue'

const props = defineProps<{
  id?: string | number
  title?: string
  comments_count?: string | number
  created_at?: string
  author?: string
}>()

const { format } = new Intl.DateTimeFormat('ru-RU', {
    dateStyle: 'long',
    timeStyle: 'short',
})

const contentParagraph = ref<HTMLParagraphElement>()
const comments = ref()
const commentIsLoad = ref(false)
const commentsIsVisible = ref(false)

const addCommentForm = useForm({
  comment: '',
  post_id: props.id,
})

async function getComments() {
  try {
    commentIsLoad.value = true
    comments.value = await fetch(route('comments.get-by-post-id', props.id)).then(r => r.json())
  }
  
  catch(cause) {
    throw new Error('При получении комментариев произошла ошибка', { cause })
  }

  finally {
    commentIsLoad.value = false
  }
}

</script>

<template>
  <article
    class="text-gray-700 rounded-md p-6 transition-shadow hover:shadow bg-white mb-4 overflow-hidden shadow-sm sm:rounded-lg"
    :id="`post_id_${id}`"
  >

  <div class="pb-6 flex items-start justify-between">
    <h1 v-text="title" class="max-w-[70%] break-words font-medium text-xl" />
    <time :value="created_at" class="text-gray-500 text-xs">{{ props.created_at }}</time>
  </div>
  <p class="break-words whitespace-pre-wrap break-all"><slot /></p>

  <footer class="text-gray-800 mt-8">
    <div class="flex items-center justify-between">
      <address class="text-xs">
          Автор: <i>{{ props.author }}</i>
      </address>
  
      <kit-button
        :disabled="commentIsLoad"
        variant="outline"
        @click="commentsIsVisible ? commentsIsVisible = false : (commentsIsVisible = true, getComments())"
        type="button"
      >
        💬
        <span>{{ comments_count }}</span>
      </kit-button>
    </div>

    <template v-if="commentsIsVisible && comments">
      <section class="mt-6 space-y-4 px-6">
        <h2 class="text-xs font-medium pb-2 uppercase"> Комментарии </h2>
        <article v-for="comment in comments" :key="comments.id">
          <address class="text-xs"> Автор: <i>{{ comment.user.name }} </i></address>
          <p>{{ comment.content }}</p>
          <span class="text-gray-500 text-[10px]">
              От 
              <time datetime="2024-04-30 22:44:10"> {{ format(new Date(comment.created_at)) }} </time>
          </span>
        </article>
      </section>
      <div v-if="$page.props.auth?.user" class="translate-y-6 -mx-6 mt-6  sticky bottom-0">
        <p
          ref="contentParagraph"
          contenteditable="plaintext-only"
          @input="addCommentForm.comment = String(($event.target  as HTMLParagraphElement).textContent)"
          class="min-h-20 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
        />
        <kit-button
          :disabled="addCommentForm.comment.trim().length < 1"
          type="button"
          @click="
            addCommentForm.post(route('comments.create')),
            getComments(),
            addCommentForm.reset(),
            contentParagraph ? contentParagraph.innerHTML = '' : null
          "
          variant="outline"
          class="w-full"
        >📨</kit-button>
      </div>
    </template>
    </footer>
  </article>
</template>