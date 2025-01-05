@php
    $makeAvatarPlaceholder = fn() => "https://robohash.org/{$post->user->id}";
@endphp

<section>
    <header>
        <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
            {{ __('Информация моего профиля') }}
        </h2>

        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {{ __("Обновите информацию профиля вашей учетной записи и адрес электронной почты.") }}
        </p>
    </header>

    <form id="send-verification" method="post" action="{{ route('verification.send') }}">
        @csrf
    </form>

    <form
        method="post"
        enctype="multipart/form-data"
        action="{{ route('profile.update') }}"
        class="mt-6 space-y-6"
    >
        @csrf
        @method('patch')

        <div
            class="w-32 h-32"
            x-data="{
                get maxFileSize() {
                    return 2048000
                },
                loadAvatar(file) {
                    if (file.size < this.maxFileSize) {
                        $refs.avatar.querySelector('img').src = URL.createObjectURL(file)
                    } else {
                        alert('Файл слишком большой')
                    }
                }
            }"
        >
            <button
                type="button"
                class="bg-transparent relative w-full cursor-pointer h-full block"
                @click="$refs.avatarInput.click()"
            >
                <span class="opacity-0 rounded-full block flex items-center justify-center hover:opacity-50 bg-black absolute top-0 left-0 w-full h-full">
                    <span class="ph ph-file-arrow-up text-white text-44px"></span>
                </span>
                <x-user.avatar x-ref="avatar" class="w-32 h-32" />
            </button>
            <input
                hidden
                type="file"
                x-ref="avatarInput"
                name="avatar"
                @change="loadAvatar($event.target.files[0])"
            >
        </div>

        <div>
            <x-input-label for="name" :value="__('Имя')" />
            <x-text-input id="name" name="name" type="text" class="mt-1 block w-full" :value="old('name', $user->name)" required autofocus autocomplete="name" />
            <x-input-error class="mt-2" :messages="$errors->get('name')" />
        </div>

        <div>
            <x-input-label for="email" :value="__('Почта')" />
            <x-text-input id="email" name="email" type="email" class="mt-1 block w-full" :value="old('email', $user->email)" required autocomplete="username" />
            <x-input-error class="mt-2" :messages="$errors->get('email')" />

            @if ($user instanceof \Illuminate\Contracts\Auth\MustVerifyEmail && ! $user->hasVerifiedEmail())
                <div>
                    <p class="text-sm mt-2 text-gray-800 dark:text-gray-200">
                        {{ __('Your email address is unverified.') }}

                        <x-button.primary form="send-verification" class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
                            {{ __('Click here to re-send the verification email.') }}
                        </x-button.primary>
                    </p>

                    @if (session('status') === 'verification-link-sent')
                        <p class="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
                            {{ __('A new verification link has been sent to your email address.') }}
                        </p>
                    @endif
                </div>
            @endif
        </div>

        <div class="flex items-center gap-4">
            <x-button.primary type="submit">{{ __('Сохранить') }}</x-button.primary>

            @if (session('status') === 'profile-updated')
                <p
                    x-data="{ show: true }"
                    x-show="show"
                    x-transition
                    x-init="setTimeout(() => show = false, 2000)"
                    class="text-sm text-gray-600 dark:text-gray-400"
                >{{ __('Сохранено.') }}</p>
            @endif
        </div>
    </form>
</section>
