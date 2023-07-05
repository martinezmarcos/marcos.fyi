/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#FFEDD8",
          100: "#F3D5B5",
          200: "#E7BC91",
          300: "#D4A276",
          400: "#BC8A5F",
          500: "#A47148",
          600: "#8B5E34",
          700: "#6F4518",
          800: "#603808",
          900: "#583101",
        },
      },
    },
  },
  plugins: [],
};
