/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "2rem",
      },
      colors: {
        primary: "#222222",
        secondary: "#767676",
        brown: "#B9A16B",
        whisper: "#E4E4E4",
      },
    },
  },
  plugins: [],
};
