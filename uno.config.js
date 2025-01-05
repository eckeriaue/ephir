import {
  defineConfig,
  presetUno,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetRemToPx(),
    presetUno(),
  ],
  theme: {
      colors: {
        surface: `var(--secondary, #F5F7F8)`,
        accent: `var(--accent, #F4CE14)`,
        secondary: `var(--secondary, #379777)`,
        primary: {
            DEFAULT: `var(--primary, #45474B)`
        },
          // primary: `var(--primary, #1B1C25)`,
          // secondary: `var(--secondary, #1F4068)`,
          // accent: `var(--accent, #206A5D)`,
          // surface: `var(--secondary, #EBECF1)`,
      }
  },
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
