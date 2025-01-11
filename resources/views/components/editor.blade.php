@props(['content' => '', 'name' => ''])

<div x-data="editor({{ $content }})" {{ $attributes->merge() }}>
    {{ $slot }}
    <input x-ref="output" name="{{ $name }}" type="hidden">
</div>
