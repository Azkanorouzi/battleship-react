   /** @type {import('tailwind').Config} */
export default {
    content: ["./*.html", "./src/*.tsx","./src/*.jsx", "./src/**/*.tsx", "./src/**/*.jsx","./src/**/**/*.tsx", "./src/**/**/*.js"],
    theme: {
        extend: {
            colors: {
                neutral: "rgb(40, 0, 90)",
                primary: "rgb(63, 0, 113)",
                secondary: "rgb(51, 47, 208)",
                tertiary: "rgb(0, 2, 161)",
                accent: "rgb(255, 20, 70)",
            }
        }
    },
    plugins: [require("daisyui")],
} 
