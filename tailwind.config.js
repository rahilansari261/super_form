/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "custom-shadow":
          "rgba(0, 0, 0, 0.1) 0px -10px 10px -2px, rgba(0, 0, 0, 0.1) 0px -4px 5px -2px",
        "footer-shadow":
          "rgba(0, 0, 0, 0.1) 0px -10px 10px -2px, rgba(0, 0, 0, 0.1) 0px -4px 5px -2px",
      },
    },
  },
  plugins: [],
};
