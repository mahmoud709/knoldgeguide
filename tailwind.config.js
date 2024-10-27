/** @type {import('tailwindcss').Config} */
import colors, { cyan, orange, pink, teal, yellow } from "tailwindcss/colors";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: false,
    colors:{
      main: colors.indigo,
      purple: colors.purple,
      gray: colors.gray,
      green:colors.green,
      red:colors.red,
      blue:colors.blue,
      white: colors.white,
      Indigo: colors.indigo,
      orange: colors.orange,
      yellow: colors.yellow,
      teal: colors.teal,
      pink: colors.pink,
      cyan: colors.cyan
    },
    extend: {},
  },
  plugins: [],
}