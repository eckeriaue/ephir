<section class="space-y-6">
    <header>
        <h2 class="text-lg font-medium text-gray-900">
            {{ __('Удалить аккаунт') }}
        </h2>

        <p class="mt-1 text-sm text-gray-600">
            {{ __('После удаления вашей учетной записи все ее ресурсы и данные будут удалены без возможности восстановления. Прежде чем удалять свою учетную запись, загрузите все данные или информацию, которую вы хотите сохранить.') }}
        </p>
    </header>

    <x-button.danger
        x-data=""
        x-on:click.prevent="$dispatch('open-modal', 'confirm-user-deletion')"
    >{{ __('Удалить аккаунт') }}</x-button.danger>

    <x-modal name="confirm-user-deletion" :show="$errors->userDeletion->isNotEmpty()" focusable>
        <form method="post" action="{{ route('settings.destroy') }}" class="p-6">
            @csrf
            @method('delete')

            <h2 class="text-lg font-medium text-gray-900">
                {{ __('Вы уверены, что хотите удалить свою учетную запись?') }}
            </h2>

            <p class="mt-1 text-sm text-gray-600">
                {{ __('После удаления вашей учетной записи все ее ресурсы и данные будут удалены без возможности восстановления. Пожалуйста, введите свой пароль, чтобы подтвердить, что вы хотите навсегда удалить свою учетную запись.') }}
            </p>

            <div class="mt-6">
                <x-input-label for="password" value="{{ __('Пароль') }}" class="sr-only" />

                <x-text-input
                    id="password"
                    name="password"
                    type="password"
                    class="mt-1 block w-3/4"
                    placeholder="{{ __('Password') }}"
                />

                <x-input-error :messages="$errors->userDeletion->get('password')" class="mt-2" />
            </div>

            <div class="mt-6 flex justify-end">
                <x-button.secondary x-on:click="$dispatch('close')">
                    {{ __('Закрыть') }}
                </x-button.secondary>

                <x-button.danger class="ms-3">
                    {{ __('Удалить аккаунт') }}
                </x-button.danger>
            </div>
        </form>
    </x-modal>
</section>
