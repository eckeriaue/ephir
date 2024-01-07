<script setup lang="ts">
import { computed, ref, unref } from 'vue'
import { XDialog } from '@/ui'
import PrimaryButton from './PrimaryButton.vue'
import SecondaryButton from './SecondaryButton.vue'
import TextInput from '@/Components/TextInput.vue'
import InputLabel from './InputLabel.vue'
import { createRequest } from '@/lib'


const title = ref('')
const content = ref('')

const emit = defineEmits<{
  'create': [post: object]
}>()

const canSave = computed(() => {
  return unref(title).length > 0 && unref(content).length > 0
})

async function createPost(event) {
  const submitType = event.submitter.value
  if (submitType === 'save') {
    fetch(await createRequest('/api/v1/posts/create', {
      method: 'POST',
      body: {
        title: unref(title),
        content: unref(content)
      }
    })).then(res => res.json()).then(res => {
      console.info(res)
      emit('create', res)
    })
  }
  title.value = ''
  content.value = ''
}

defineOptions({ inheritAttrs: false })
</script>

<template>
  <x-dialog class="invisible opacity-0 transition-all open:visible open:opacity-100 rounded-md">
    <template #project="{ open }">
      <primary-button v-bind="$attrs" class="text-center" @click="open()"> Создать Пост </primary-button>
    </template>

      <form method="dialog" name="createPost" @submit="createPost" class="max-w-full md:w-[560px] min-w-0 xl:min-w-96 px-5 py-4">
        <input-label> Заголовок статьи </input-label>
        <text-input name="title" v-model="title" />
        <fieldset class="mt-4">
          <input-label> Содержимое </input-label>
          <p @input="content = ($event.target as HTMLInputElement).innerText" contenteditable="true" class=" mt-2 
          border-2 border-transparent py-2 px-3 rounded-xl duration-[.25s]
          text-[13.3px] transition-all outline-none focus:placeholder:opacity-0
          placeholder:transition-all
          focus:border-b-lime-600 text-[rgb(44,62,80)] focus:bg-[rgb(240,243,244)] bg-[rgb(241,244,245)]
          min-h-16" role="textbox"> {{ content }} </p>
        </fieldset>

        <fieldset class="inline-flex mt-8 items-center gap-x-2">
          <primary-button :disabled="!canSave" value="save" type="submit"> сохранить </primary-button>
          <secondary-button value="cancel" type="submit"> отменить </secondary-button>
        </fieldset>
      </form>

  </x-dialog>
</template>