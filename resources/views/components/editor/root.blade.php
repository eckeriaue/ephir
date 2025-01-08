@props(['placeholder' => ''])

<div
        data-placeholder="{{ $placeholder }}"
        x-ref="root"
        {{
            $attributes->merge([
                'tabindex' => '-1',
            ])
        }}
></div>
