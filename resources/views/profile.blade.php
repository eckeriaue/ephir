<x-app-layout>
    <div class="container mx-auto px-4 py-8 max-w-6xl bg-gray-100">
        <div class="text-center">
            <!-- Профиль пользователя -->
            <div class="bg-white shadow-sm p-6 rounded-lg mb-6">
                <div class="flex flex-col md:flex-row items-center gap-6">
                    <img src="{{ auth()->user()->avatar }}" alt="{{ auth()->user()->name }}" class="w-32 h-32 rounded-full border-4 border-primary-light object-cover" loading="lazy">
                    <div class="flex-1 text-center md:text-left">
                        <h1 class="text-2xl font-bold mb-1">{{ auth()->user()->name }}</h1>
                        <p class="text-gray-600 mb-3">{{ auth()->user()->username }}</p>
                        <p class="text-gray-700 mb-4 max-w-2xl">{{ auth()->user()->bio }}</p>
                        <div class="flex flex-wrap gap-4 justify-center md:justify-start text-gray-600">
                            @if (auth()->user()->location)
                                <div class="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
                                        <circle cx="12" cy="11" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
                                    </svg>
                                    <span>{{ auth()->user()->location }}</span>
                                </div>
                            @endif
                            @if (auth()->user()->website)
                                <div class="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a9 9 0 0118 0 9 9 0 01-18 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3l2 2" />
                                    </svg>
                                    <a href="{{ auth()->user()->website }}" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary-hover">
                                        {{ parse_url(auth()->user()->website, PHP_URL_HOST) }}
                                    </a>
                                </div>
                            @endif
                            @if (auth()->user()->email)
                                <div class="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    <a href="mailto:{{ auth()->user()->email }}" class="text-primary hover:text-primary-hover">
                                        {{ auth()->user()->email }}
                                    </a>
                                </div>
                            @endif
                        </div>
                    </div>
                    
                    <div class="flex gap-6 mt-4 md:mt-0">
                        <div class="text-center">
                            <div class="flex items-center gap-1 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2m4-4h4a2 2 0 012 2v4H7V6a2 2 0 012-2z" />
                                </svg>
                                <span class="font-semibold">{{ auth()->user()->postsCount }}</span>
                            </div>
                            <p class="text-sm text-gray-500">Посты</p>
                        </div>
                        <div class="text-center">
                            <div class="flex items-center gap-1 text-gray-600">
                                <!-- Иконка сердца для лайков -->
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                                    4.42 3 7.5 3c1.74 0 3.41 0.81 
                                    4.5 2.09C13.09 3.81 14.76 3 
                                    16.5 3 19.58 3 22 5.42 22 8.5c0 
                                    3.78-3.4 6.86-8.55 
                                    11.54L12 21.35z" />
                                </svg>
                                <span class="font-semibold">{{ auth()->user()->likesCount }}</span>
                            </div>
                            <p class="text-sm text-gray-500">Лайки</p>
                        </div>
                    </div>
                </div>
            </div>
    
            <!-- Пользовательские посты -->
            <div class="mt-8">
                <h2 class="text-xl font-semibold mb-4">Посты</h2>
                @if($posts->isEmpty())
                    <p class="text-gray-600">У этого пользователя пока нет постов.</p>
                @else
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        @foreach ($posts as $post)
                            <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <img src="{{ $post->image }}" alt="Пост {{ $post->id }}" class="w-full h-48 object-cover" loading="lazy">
                                <div class="p-4">
                                    <div class="flex justify-between items-center text-gray-600">
                                        <div class="flex items-center gap-1">
                                            <!-- Иконка сердца для лайков -->
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                                                4.42 3 7.5 3c1.74 0 3.41 0.81 
                                                4.5 2.09C13.09 3.81 14.76 3 
                                                16.5 3 19.58 3 22 5.42 22 8.5c0 
                                                3.78-3.4 6.86-8.55 
                                                11.54L12 21.35z" />
                                            </svg>
                                            <span>{{ $post->likes }}</span>
                                        </div>
                                        <div class="flex items-center gap-1">
                                            <!-- Иконка просмотров -->
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            <span>{{ $post->views }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                @endif
            </div>
        </div>
    </div>
</x-app-layout>
