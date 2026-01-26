import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#007537',
                    dark: '#005a2f',
                    light: '#e6f4ed',
                    ctm: '#00A84C',
                },
                background: {
                    light: '#f9fafa',
                },
                surface: {
                    light: '#ffffff',
                },
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
                display: ['Plus Jakarta Sans', 'sans-serif'],
            },
        },
    },

    plugins: [forms],
};
