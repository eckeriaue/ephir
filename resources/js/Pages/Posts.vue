<script setup lang="ts">
import Layout from '@/Layouts/Layout.vue'
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
import { Icon } from '@iconify/vue'
import { computed, unref } from 'vue';

const page = usePage()

const query = computed<URLSearchParams>(() => new URLSearchParams(page.url))
const offset = computed(() => Number(unref(query).get('offset')) || 0)


</script>

<template>
    <Head title="Посты" />

    <Layout>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <section v-if="$page.props.posts">
                        <article v-for="post in $page.props.posts">
                            {{ post }}
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
                                    &#8230;
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
