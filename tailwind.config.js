/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#1D4ED8",
          600: "#1E40AF",
        },
        gray: {
          300: "#D1D5DB",
        },
      },
    },
  },
  plugins: [],
};
