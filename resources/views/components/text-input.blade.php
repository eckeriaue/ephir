@props(['disabled' => false])

<input
  {{ $disabled ? 'disabled' : '' }}
  {!! $attributes->merge(['class' => '
    border-gray-300 dark:border-gray-700
    px-3 h-8 outline outline-1 outline-[#d0d7de] focus:outline-[rgb(45,164,78)]
    focus:border-indigo-500 dark:focus:border-indigo-600
    tex-xs
    
    placeholder:tex-xs
    outline-offset-0
    focus:ring-indigo-500 dark:focus:ring-indigo-600
    rounded-md shadow-sm
    ']) !!}
  >