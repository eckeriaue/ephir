<x-app-layout>
    <div class="max-w-[510px] mx-auto py-4 md:py-12">

        <x-posts.create-post-button />

        @forelse ($posts as $post)
            <x-posts.card :$post />
        @empty
            <div class="bg-white rounded-xl shadow-sm mb-4 text-center">
                <p class="p-5">Постов пока нет</p>
            </div>
        @endforelse

        <x-pagination :paginator="$posts" />

        @vite('resources/js/slider.js')
    </div>
</x-app-layout>
