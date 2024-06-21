/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Lato"],
      },
      colors: {
        main: "#FFA62F",
        secondary: "#FFE8C8",
        background: "#FFE8C8",
        alternate: "#ACD793",
      },
    },
  },
  plugins: [],
};
