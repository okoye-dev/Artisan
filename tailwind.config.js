/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    screens: {
      sm: { min: "360px", max: "799px" },
      ipad: "700px",
      md: "800px",
      lg: "992px",
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
        custom2: "rgba(25, 25, 25, 0.1) 10px 7px 15px 0px",
      },
    },
    plugins: [],
  },
};
