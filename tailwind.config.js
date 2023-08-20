/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(188, 25%, 13%)",
        secondary: "hsl(168, 50%, 60%)",
        special: "#f2f2f2",
        inactive: "#28946e",
        active: "#52e08b",
      },
      spacing: {
        tall: "75vh",
      },
    },
  },
  plugins: [],
};
