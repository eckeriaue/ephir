@props(['value'])

<label {{ $attributes->merge(['class' => 'transition-all text-[#4A90E2] hover:scale-[1.1] block font-medium text-sm text-gray-700']) }}>
    {{ $value ?? $slot }}
</label>

