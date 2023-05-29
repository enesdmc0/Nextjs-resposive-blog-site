/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        col1: "#f8f8f8",
        textColor: "rgb(58,58,58)"
      }
    },
    backgroundImage: {
      "readOur": "url('http://newbreak.church/wp-content/uploads/2021/08/qofjunxy9ly.jpg')",
      "detail": "url('https://p4.wallpaperbetter.com/wallpaper/333/58/467/abstract-4k-digital-art-shapes-geometry-hd-wallpaper-preview.jpg')"
    }
  },
  plugins: [],
}
