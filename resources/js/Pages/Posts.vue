<script setup lang="ts">
import Layout from '@/Layouts/Layout.vue'
import { Icon } from '@iconify/vue'
import { Head, Link, usePage } from '@inertiajs/vue3'
import {
    PaginationEllipsis,
    PaginationFirst,
    PaginationLast,
    PaginationList,
    PaginationListItem,
    PaginationNext,
    PaginationPrev,
    PaginationRoot
} from 'radix-vue'
import { computed, unref } from 'vue'

interface Post {
    id: number
    title: string
    content: string
    user_id: number
    is_published: boolean
    deleted_at?: string
    created_at: string
    updated_at: string
    comments_count: number
    user: {
        created_at: string
        email: string
        email_verified_at?: string
        id: number 
        name: string
        updated_at: string
    }
}

const page = usePage()
const { format } = new Intl.DateTimeFormat('ru-RU', {
    dateStyle: 'long',
    timeStyle: 'short',
})

const query = computed<URLSearchParams>(() => new URLSearchParams(page.url))
const offset = computed(() => Number(unref(query).get('offset')) || 0)

console.info(page.props.posts)

</script>

<template>
    <Head title="Посты" />

    <Layout>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="">
                    <section v-if="$page.props.posts" class="container max-w-[768px]">
                        <article
                            class="text-gray-700 rounded-md p-6 transition-shadow hover:shadow bg-white mb-4 overflow-hidden shadow-sm sm:rounded-lg"
                            v-for="{ id, title, content, comments_count, created_at, user } in <Post[]>$page.props.posts"
                            :key="id"
                            :id="`post_id_${id}`"
                        >
                            <div class="pb-6 flex items-start justify-between">
                                <h1 v-text="title" class="max-w-[70%] break-words font-medium text-xl" />
                                <time :value="created_at" class="text-gray-500 text-xs">{{ format(new Date(created_at)) }}</time>
                            </div>
                            <p class="break-words whitespace-pre-wrap break-all">{{ content }}</p>

                            <footer class="text-gray-800 mt-8 flex items-center justify-between">
                                <address class="text-xs">
                                    Автор: <i>{{ user.name }}</i>
                                </address>

                                <kit-button variant="secondary" type="button">
                                    💬
                                    <span>{{ comments_count }}</span>
                                </kit-button>

                            </footer>

                        </article>

                        <footer class="mt-12 flex items-center justify-center pb-5">
                            <PaginationRoot :total="Number($page.props.totalPosts)" :sibling-count="1" show-edges :default-page="offset > 0 ? offset / 10 : 1">
                                <PaginationList v-slot="{ items }" class="flex items-center gap-1 text-primary">
                                <PaginationFirst class="w-9 h-9  flex items-center justify-center  disabled:opacity-50  focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded">
                                    <Icon icon="radix-icons:double-arrow-left" />
                                </PaginationFirst>
                                <PaginationPrev class="w-9 h-9  flex items-center justify-center mr-4  disabled:opacity-50  focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded">
                                    <Icon icon="radix-icons:chevron-left" />
                                </PaginationPrev>
                                <template v-for="(page, index) in items">
                                    <PaginationListItem
                                        :as="Link"
                                        :href="route('posts')"
                                        :data="{
                                            offset: (page.value * 20) - 20,
                                        }"
                                        v-if="page.type === 'page'"
                                        :key="index"
                                        class="w-9 h-9 border rounded flex items-center justify-center  data-[selected]:bg-white data-[selected]:text-blackA11 hover:bg-white/10 transition focus-within:outline focus-within:outline-1 focus-within:outline-offset-1"
                                        :value="page.value"
                                    >
                                    {{ page.value }}
                                    </PaginationListItem>
                                    <PaginationEllipsis v-else :key="page.type" :index="index" class="w-9 h-9 flex items-center justify-center">
                                    &#8230
                                    </PaginationEllipsis>
                                </template>
                                <PaginationNext class="w-9 h-9  flex items-center justify-center  ml-4 disabled:opacity-50  focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded">
                                    <Icon icon="radix-icons:chevron-right" />
                                </PaginationNext>
                                <PaginationLast class="w-9 h-9  flex items-center justify-center disabled:opacity-50  focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded">
                                    <Icon icon="radix-icons:double-arrow-right" />
                                </PaginationLast>
                                </PaginationList>
                            </PaginationRoot>
                        </footer>

                    </section>
                    <section v-else class="p-4">
                        Постов пока нет.
                    </section>
                </div>
            </div>
        </div>
    </Layout>
</template>
