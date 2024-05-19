<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import { ref } from 'vue'
import MarkdownEditor from './MarkdownEditor.vue'

const modalCreatePostIsOpen = ref(false)
const createPostForm = useForm({
  title: '',
  content: '',
  photos: [] as File[]
})

const imgs = ref<string[]>([])

function addPhoto(event: Event) {
  const target = event.target
  if(
    target &&
    target instanceof HTMLInputElement &&
    target.files && 0 in target.files
  ) {
    createPostForm.photos.push(target.files[0])
    imgs.value.push(URL.createObjectURL(target.files[0]))
  }
}

</script>

<template>
  <kit-dialog v-if="$page.props.auth?.user" v-model:open="modalCreatePostIsOpen">
    <kit-dialog-trigger as-child>
        <slot>
          <kit-button>
            🪶
          </kit-button>
        </slot>
    </kit-dialog-trigger>
    <kit-dialog-content class="overflow-y-scroll max-h-[calc(100dvh_-_64px)]">
        <kit-dialog-title> Создать пост </kit-dialog-title>
        <kit-dialog-description>Здесь вы можете написать о чем вы думаете </kit-dialog-description>
        <form
            class="min-w-fit"
            @submit.prevent="createPostForm.post(route('posts.create'), {
                onSuccess() {
                    createPostForm.reset('content')
                    createPostForm.reset('photos')
                    createPostForm.reset('title')
                }
            }), modalCreatePostIsOpen = false"
        >
            <kit-label for="postName"> Название </kit-label>
            <kit-input v-model="createPostForm.title" id="postName" class="mt-2" />
            <div class="mt-4 max-w-full">
                <kit-label for="postContent"> Содержимое </kit-label>
                <markdown-editor v-model="createPostForm.content" />

                <kit-label for="picture" class="mt-2 inline-block"> Добавить фото </kit-label>
                <kit-input id="picture" @change="addPhoto" type="file" />
            
                <div class="w-full mt-6" v-if="imgs.length > 0">
                    <div class="grid grid-cols-4 gap-4 min-h-40">
                        <div
                            v-for="(img, i) in imgs"
                            :key="img + i"
                            :style="{backgroundImage: `url('${img}')`}"
                            class="bg-cover w-full rounded aspect-square"
                        />
                    </div>
                </div>

            </div>
            <div class="gap-x-2 flex justify-end mt-4">
                <kit-button type="button" @click="modalCreatePostIsOpen = false, createPostForm.title = '', createPostForm.content = ''" variant="secondary">Отменить</kit-button>
                <kit-button type="submit" :disabled="createPostForm.title.length < 1 || createPostForm.content.length < 1 || createPostForm.processing">Сохранить</kit-button>
            </div>
        </form>
    </kit-dialog-content>
  </kit-dialog>
</template>