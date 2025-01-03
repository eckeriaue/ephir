import {
  defineConfig,
  transformerCompileClass,
  transformerVariantGroup,
  presetUno,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetRemToPx(),
    presetUno(),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerCompileClass()
  ],
  content: {
    filesystem: [
      './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
      './storage/framework/views/*.php',
      './resources/views/**/*.blade.php',
    ]
  },
  animation: {
      keyframes: {
        spin: "{0%,100% {transform:rotate(-3deg)} 50% {transform:rotate(30deg)}}",
      },
      durations: {
        spin: "1s",
      },
      timingFns: {
        spin: "ease-in-out",
      },
      counts: {
        spin: "infinite",
      },
  }
})
