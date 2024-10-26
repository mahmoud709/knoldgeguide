/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: false,
    colors:{
      main: colors.indigo,
      gray: colors.gray,
      green:colors.green,
      red:colors.red,
      blue:colors.blue,
    },
    extend: {},
  },
  plugins: [],
}