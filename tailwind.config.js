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
            fontSize: {
                '3xs': '8px',
                '2xs': '10px',
                xs: "12px",
                sm: "14px",
                base: "16px",
                lg: "18px",
                xl: "20px",
                "2xl": "24px",
                "3xl": "30px",
                "4xl": "36px",
                "5xl": "48px",
                "6xl": "60px",
                "7xl": "72px",
            },
            spacing: {
                px: "1px",
                0: "0",
                0.5: "2px",
                1: "4px",
                1.5: "6px",
                2: "8px",
                2.5: "10px",
                3: "12px",
                3.5: "14px",
                4: "16px",
                5: "20px",
                6: "24px",
                7: "28px",
                8: "32px",
                9: "36px",
                10: "40px",
                11: "44px",
                12: "48px",
                14: "56px",
                16: "64px",
                20: "80px",
                24: "96px",
                28: "112px",
                32: "128px",
                36: "144px",
                40: "160px",
                44: "176px",
                48: "192px",
                52: "208px",
                56: "224px",
                60: "240px",
                64: "256px",
                72: "288px",
                80: "320px",
                96: "384px",
            },

        },
    },

    plugins: [function({addComponents}) {
        addComponents({
            '.form-checkbox': {
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
