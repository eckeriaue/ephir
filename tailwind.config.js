import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [function({addComponents}) {
        addComponents({
            '.form-checkbox': {
                // transitionProperty: 'all',
                // transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                // transitionDuration: '50ms',
                borderRadius: '0.375rem', /* 6px */
                appearance: 'none',
                width: `16px`,
                height: `16px`,
                outlineOffset: `2px`,
                '&:not(:checked)': {
                    border: `1px solid rgb(31 41 55 / .5)`,
                    backgroundColor: `#0000`,
                },
                '&:checked': {
                    backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`,
                    border: `1px solid transparent`,
                    backgroundColor: `#84cc16`,
                },
                '&:focus': {
                    outline: `2px solid #84cc16`,
                }
            }
        })
    }],
};
