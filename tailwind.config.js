/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    screens: {
      sm: { min: "360px", max: "799px" },
      // => @media (min-width: 360px) { ... }

      ipad: "700px",
      // => @media (min-width: 800px) { ... }

      md: "800px",
      // => @media (min-width: 800px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },

    extend: {
      colors: {
        blue: "#009FCA",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/.svg')",
      },
      backgroundSize: {
        large: "300%",
      },
      boxShadow: {
        custom: "rgba(100, 100, 111, 0.1) 0px 7px 29px 0px",
      },
    },
    plugins: [],
  },
};
