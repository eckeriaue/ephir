<script setup lang="ts">
import Layout from '@/Layouts/Layout.vue';
import { Head } from '@inertiajs/vue3';
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
                    </section>
                    <section v-else class="p-4">
                        Постов пока нет.
                    </section>
                </div>
            </div>
        </div>
    </Layout>
</template>
