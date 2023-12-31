/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#F56200",
      secondary: "#391700",
      background: "#271406",
      dark: "#512100",
      white: "#FFFFFF",
      black: "#555555"
    },
    screens: {
      xs: "400px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      dx: "1600px"
    },
  },
  plugins: [],
}
