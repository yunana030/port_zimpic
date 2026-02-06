/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // src 폴더 내의 모든 파일을 감시
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "pastel-yellow": "#FFFBE6",
        "pastel-blue": "#B4D4F8",
        "pastel-purple": "#D1C4E9",
        "background-light": "#FFF9E6",
        "background-dark": "#1A1A2E",
        "border-color": "#A5A5C8",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        mono: ["VT323", "monospace"],
      },
    },
  },
  plugins: [],
}