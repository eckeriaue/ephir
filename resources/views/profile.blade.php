<x-app-layout>
    <div class="flex max-w-7xl py-12 gap-x-3 mx-auto">
        <div class="bg-white rounded-xl w-1/4 shadow-xs h-fit sticky top-12 mb-4 p-5">
            <x-user.avatar :user="$profile->user" />
            <ul class="mt-4">
                <li class="text-center text-2xl"> {{ $profile->user->name }} </li>
            </ul>
        </div>
        <div class="max-w-[510px] mx-auto flex flex-col grow">
            @forelse ($profile->posts as $post)
                <x-posts.card :$post />
            @empty
                <div class="bg-white rounded-xl shadow-sm mb-4 text-center">
                    <p class="p-5">Постов пока нет</p>
                </div>
            @endforelse
        </div>
    </div>
</x-app-layout>
