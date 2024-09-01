<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import { ref } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import ImageUploader from 'quill-image-uploader';

const modalCreatePostIsOpen = ref(false)
const createPostForm = useForm({
  title: '',
  content: '',
  photos: [] as File[]
})

const imgs = ref<string[]>([])

const quillContent = ref()


const modules = {
  name: 'imageUploader',
  module: ImageUploader,
  options: {
    upload: file => {
    }
  }
}

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
    <kit-dialog-content class="overflow-y-scroll">
        <kit-dialog-title> Создать пост </kit-dialog-title>
        <kit-dialog-description>Здесь вы можете написать о чем вы думаете </kit-dialog-description>
        <form class="min-w-fit h-fit min-h-[240px] flex flex-col justify-between">

        <div class="grow [&_.ql-container]:h-full">
            <quill-editor
                toolbar="full"
                theme="snow"
                :modules
                contentType="html"
                placeholder="напишите о чем думаете..."
                v-model:content="quillContent"
                @update:content="console.info($event)"
            />
        </div>
            <div class="gap-x-2 flex justify-end mt-4">
                <kit-button type="button" variant="secondary">Отменить</kit-button>
                <kit-button type="submit" >Сохранить</kit-button>
            </div>
        </form>
    </kit-dialog-content>
  </kit-dialog>
</template>
