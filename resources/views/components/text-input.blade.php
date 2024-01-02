@props(['disabled' => false])

<input {{ $disabled ? 'disabled' : '' }} {!! $attributes->merge(['class' => 'py-2 px-3 rounded-md outline outline-2 outline-gray-300 focus:outline-lime-500 rounded-md shadow-sm']) !!}>
