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


const comments = ref()
const commentsIsVisible = ref(false)

const addCommentForm = useForm({
  comment: '',
  post_id: props.id,
})

async function getComments() {
  comments.value = await fetch(route('comments.get-by-post-id', props.id)).then(r => r.json())
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
  
      <kit-button variant="outline" @click="commentsIsVisible = !commentsIsVisible, getComments()" type="button">
          💬
          <span>{{ comments_count }}</span>
      </kit-button>
    </div>

    <div v-if="commentsIsVisible && comments">
      <section>
        <article v-for="comment in comments" :key="comments.id">
          {{ comments }}
        </article>
      </section>
    </div>

    <div v-if="$page.props.auth?.user" class="-mb-6 -mx-6 mt-6">
      <p
        contenteditable="plaintext-only"
        @input="addCommentForm.comment = String(($event.target  as HTMLParagraphElement).textContent)"
        class="min-h-20 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
      />
      <kit-button
        :disabled="addCommentForm.comment.trim().length < 1"
        type="button"
        @click="addCommentForm.post(route('comments.create'))"
        variant="outline"
        class="w-full"
      >📨</kit-button>
    </div>
    </footer>
  </article>
</template>