   /** @type {import('tailwind').Config} */
export default {
    content: ["./*.html", "./src/*.tsx","./src/*.jsx", "./src/**/*.tsx", "./src/**/*.jsx","./src/**/**/*.tsx", "./src/**/**/*.js"],
    theme: {
        extend: {}
    },
    plugins: [require("daisyui")],
} 
