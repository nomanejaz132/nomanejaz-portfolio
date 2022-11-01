/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#01080E",
          2: "#011627",
          3: "#011221",
        },
        secondary: {
          1: "#607B96",
          2: "#3C9D93",
          3: "#4D5BCE",
          4: "#FFFFFF",
          5: "#E5E9F0",
        },
        accent: {
          1: "#FEA55F",
          2: "#43D9AD",
          3: "#E99287",
          4: "#C98BDF",
        },
        gradients: {
          1: "#4D5BCE",
          2: "#43D9AD",
        },
        line: {
          1: "#1E2D3D",
        },
      },
      fontFamily: {
        firacode: ["Fira Code"],
      },
    },
  },
  plugins: [],
};
