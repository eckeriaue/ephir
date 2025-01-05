/** @type {import('tailwindcss').Config} */
export default {
    theme: {

        colors: {
            white: 'white',
            black: 'black',
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
        },
        extend: {}
    },
    content: [
      './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
      './storage/framework/views/*.php',
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
    ],
  plugins: [],
}
