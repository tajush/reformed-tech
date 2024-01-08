/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        Neutral_White: "#FFF",
        Natural_Orange: "#E5361D",
      },
      screens: {
        xs: "360px",
        ss: "620px",
        sm: "668px",
        md: "820px",
        lg: "1200px",
        xl: "1440px",
      },
      backgroundColor: "nav-bg",
    },
  },
  plugins: [],
};
