<script setup lang="ts">
// @ts-nocheck
import { useForm } from '@inertiajs/vue3'
import { HTMLAttributes, computed, ref, unref } from 'vue'
import { cn } from '@/lib/utils'

interface Photo {
    id: number
    src: string
    post_id: number
    deleted_at?: string
    created_at: string
    updated_at: string
}

const props = withDefaults(defineProps<{
  id?: string | number
  title?: string
  photos: Photo[]
  class?: HTMLAttributes['class']
  comments_count?: string | number
  authorAvatar?: string
  created_at?: string
  author?: string
  content?: string
  modal?: boolean
}>(), {
  modal: false
})

const { format } = new Intl.DateTimeFormat('ru-RU', {
  dateStyle: 'long',
  timeStyle: 'short',
})

const contentParagraph = ref<HTMLParagraphElement>()
const details = ref<Partial< {
  "id": number
  "title": string
  "content": string
  "user_id": number
  "is_published": boolean
  "deleted_at": null | string
  "created_at": string
  "updated_at": string
}>>({})
const comments = ref()
const commentIsLoad = ref(false)
const commentsIsVisible = ref(false)

const addCommentForm = useForm({
  comment: '',
  post_id: props.id,
})

const currentSlideIndex = ref(0)
const carouselTranslateX = computed(() => unref(currentSlideIndex) * 100)

function prevSlide() {
  if(unref(currentSlideIndex) > 0) {
    currentSlideIndex.value -= 1
  }
}

function nextSlide() {
  if(unref(currentSlideIndex) < (props.photos.length - 1)) {
    currentSlideIndex.value += 1
  }
}


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

async function getPostDetails() {
  details.value = await fetch(route('posts.by-id', props.id)).then(r => r.json())
}

const modalIsOpen = ref(false)

</script>

<template>
  <article
    :class="cn(`
      text-gray-700 relative rounded-md px-0 lg:px-4 md:px-6 py-6
      bg-white mb-4 overflow-hidden
      transition-shadow hover:shadow shadow-sm
      sm:rounded-lg
      `,
      props.class
    )"
    :id="`post_id_${id}`"
    @click.self="$props.modal && getPostDetails().then(() => modalIsOpen = true)"
  >

  <div class="pb-6 flex items-start justify-between px-4 lg:px-0">
    <h1 v-text="$props.title" class="max-w-[70%] break-words font-medium text-xl" />
    <time :value="created_at" class="text-gray-500 text-xs">{{ props.created_at }}</time>
  </div>


  <kit-dialog v-if="$props.modal" v-model:open="modalIsOpen">
    <kit-dialog-trigger as-child>

    </kit-dialog-trigger>
    <kit-dialog-content>
      <div class="max-h-[calc(100dvh_-_64px)] overflow-y-auto">
        <post-card :="{ title, created_at, author, photos, id, comments_count,  }" :content="details.content"  class="shadow-none hover:shadow-none p-0 pr-6 mb-0">
        </post-card>
      </div>
    </kit-dialog-content>
  </kit-dialog>

  <div class="break-words whitespace-pre-wrap break-all px-4 lg:px-0">
    <p v-html="props.content" />
  </div>

  <div class="w-full mt-6" v-if="props.photos.length > 0">
    <div
      @click="$props.modal && getPostDetails().then(() => modalIsOpen = true)"
      :class="{
        'cursor-pointer': props.modal
      }"
      class="max-w-full text-6xl relative"
    >
      <button type="button" class="z-[1] opacity-80 hover:opacity-100 text-white absolute shadow-xl top-1/2 left-0 -translate-y-1/2" @click.stop="prevSlide">‹</button>
      <div
        :style="{ translate: `${carouselTranslateX ? `-${carouselTranslateX}%` : 0} 0` }"
        class="min-w-fit transition-all duration-300 w-full flex">
        <div
          class="min-w-full max-w-full flex items-center"
          v-for="{ id, src } in props.photos"
          :key="id"
        >
          <img :src alt="Фото поста" class="w-full" />
        </div>
      </div>
      <button type="button" class="z-[1] opacity-80 hover:opacity-100 text-white absolute shadow-xl top-1/2 right-0 -translate-y-1/2" @click.stop="nextSlide">›</button>
    </div>
  </div>


    <footer class="text-gray-800 mt-8 px-4 lg:px-0">
      <div class="flex items-center justify-between">
        <address class="text-xs flex items-center">
            Автор:
            <img :src="props.authorAvatar" v-if="props.authorAvatar" class="size-5 mx-1 rounded-full" />
            <i>{{ props.author }}</i>
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
