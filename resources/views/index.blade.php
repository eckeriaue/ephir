<x-app-layout>
    <div class="max-w-[510px] mx-auto py-4 md:py-12">
        @forelse ($posts as $post)
            <pre> {{ $post }} </pre>
        @empty
            <div class="bg-white rounded-xl shadow mb-4 text-center">
                <p class="p-5">Постов пока нет</p>
            </div>
        @endforelse

    </div>
</x-app-layout>
