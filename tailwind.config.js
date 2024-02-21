/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.750rem",
      base: "1rem",
      xl: "1.333rem",
      "2xl": "1.777rem",
      "3xl": "2.369rem",
      "4xl": "3.158rem",
      "5xl": "4.210rem",
    },
    extend: {
      colors: {
        blue: "var(--blue)",
        green: "var(--green)",
        purple: "var(--purple)",
        red: "var(--red)",
        yellow: "var(--yellow)",
        background: "var(--background)",

        Blob: "var(--blob-bg)",

        line: "var(--line)",
        menuBlock: "var(--menu-block)",
        navMenuBg: "var(--navMenuBg)",
        aboutContainer: "var(--aboutContainer)",
        cardTagBg: "var(--cardTagBg)",
        item6: "var(--)",
        item7: "var(--)",
      },
      screens: {
        nsm: { max: "639px" },
        nlg: { max: "1023px" },
      },
      transitionProperty: {},
    },
  },
  plugins: [],
};
