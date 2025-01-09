/** @type {import('tailwindcss').Config} */
import twColors from 'tailwindcss/colors'
export default {
    theme: {
        colors: {
            white: 'white',
            black: 'black',
            transparent: 'transparent',
            current: 'currentColor',
            inherit: 'inherit',

            surface: {
                DEFAULT: twColors.neutral['50'],
                ...twColors.neutral
            },
            accent: `var(--accent, #F4CE14)`,
            secondary: `var(--secondary, #379777)`,
            primary: {
                DEFAULT: twColors.zinc['700'],
                ...twColors.zinc
            },

            ...twColors,
            // primary: `var(--primary, #1B1C25)`,
            // secondary: `var(--secondary, #1F4068)`,
            // accent: `var(--accent, #206A5D)`,
            // surface: `var(--secondary, #EBECF1)`,
        },
        extend: {
            borderRadius: {inherit: 'inherit'},
            animation: {
              'open-y': 'open-y 300ms cubic-bezier(0.4, 0, 0.2, 1) 1 both',
              'close-y': 'close-y 300ms cubic-bezier(0.4, 0, 0.2, 1) 1 both',
            },
            keyframes: {
                'open-y': {
                    from: {
                        gridTemplateRows: '0fr',
                        display: 'grid',
                        overflow: 'hidden',
                    },
                    to: {
                        gridTemplateRows: '1fr',
                        display: 'grid',
                        overflow: 'hidden',
                    }
                },
                'close-y': {
                    from: {
                        gridTemplateRows: '1fr',
                        display: 'grid',
                        overflow: 'hidden',
                    },
                    to: {
                        gridTemplateRows: '0fr',
                        display: 'grid',
                        overflow: 'hidden',
                    }
                },
            }
        }
    },
    content: [
      './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
      './storage/framework/views/*.php',
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
    ],
  plugins: [],
}
