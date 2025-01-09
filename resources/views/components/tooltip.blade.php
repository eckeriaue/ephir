  <div
    x-data="{
      open: false,
      // 'hover focus', 'click'
      trigger: 'hover focus',
    }"
    class="relative inline-block"
  >
    <div
        x-ref="toolipTarget"
        x-on:mouseenter="(trigger === 'hover focus') ? open = true : null"
        x-on:mouseleave="(trigger === 'hover focus') ? open = false : null"
        x-on:focusin="(trigger === 'hover focus') ? open = true : null"
        x-on:focusout="(trigger === 'hover focus') ? open = false : null"
        x-on:click="(trigger === 'click') ? open = !open : null"
        tabindex="0"
    >
        {{ $target }}
    </div>

    <div
      x-cloak
      x-ahcnor.offset.4="$refs.toolipTarget"
      x-show="open"
      x-transition:enter="transition ease-out duration-100"
      x-transition:enter-start="opacity-0 translate-y-2"
      x-transition:enter-end="opacity-100 translate-y-0"
      x-transition:leave="transition ease-in duration-75"
      x-transition:leave-start="opacity-100 translate-y-0"
      x-transition:leave-end="opacity-0 -translate-y-10"
      class="start-1/2 z-10 -ms-20 flex w-fit flex-col items-center justify-center pb-0.5 absolute will-change-transform"
    >
      <div
        class="flex-none rounded-lg bg-primary px-2 truncate py-2 text-center text-xs font-semibold text-surface"
      >
        {{ $tooltip }}
      </div>
      <div
        class="h-0 w-0 flex-none border-e-4 border-s-4 border-t-4 border-e-transparent border-s-transparent border-t-zinc-900 dark:border-t-zinc-700"
        aria-hidden="true"
      ></div>
    </div>
  </div>
