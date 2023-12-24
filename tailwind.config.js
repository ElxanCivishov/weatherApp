/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        colorBlack: "#252323",
        colorTextBlack: "#524E4E",
        colorTextError: "#5F2120DE",
        colorLightPink: "#FDEDED",
        colorLight: "#D9D9D9",
        colorLightTwo: "#F2F1F1",
        colorPrimary: "#AD36CB",
        colorLightGreen: "#4FFF32",
        colorDarkGreen: "#3D6E35",
      },
      boxShadow: {
        DEFAULT:
          "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(255, 250, 250, 0.25), 0px 4px 4px 0px rgba(253, 245, 245, 0.25)",
        md: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        // lg: "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)",
        // xl: "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.01)",
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(113deg, #AD36CB 32.23%, #333 67.37%)",
        "gradient-2":
          "linear-gradient(180deg, #B32DD4 0%, rgba(217, 217, 217, 0.00) 100%)",
        "gradient-3":
          "linear-gradient(108deg, #373333 4.85%, rgba(55, 51, 51, 0.00) 103.29%)",
      },
      outline: {
        blue: "2px solid rgba(0, 112, 244, 0.5)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        "2xl": ["1.5rem", { lineHeight: "1.33", letterSpacing: "-0.01em" }],
        "3xl": ["1.88rem", { lineHeight: "1.33", letterSpacing: "-0.01em" }],
        "4xl": ["2.25rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        "5xl": ["3rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        "6xl": ["3.75rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
      screens: {
        // min-width
        xs: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1536px",
      },
      borderWidth: {
        2: "2px",
        3: "3px",
        4: "4px",
      },
      minWidth: {
        36: "9rem",
        44: "11rem",
        56: "14rem",
        60: "15rem",
        72: "18rem",
        80: "20rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      zIndex: {
        60: "60",
      },
    },
  },
  plugins: [],
};
