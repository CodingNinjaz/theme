module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_b2": "#000000b2",
          "900_3f": "#0000003f",
          "900_db": "#000000db",
          "900_01": "#040302",
          "900_00": "#07070d00",
          "900_02": "#060619",
          "900_99": "#00000099",
          "900_19": "#00000019",
          "900_16": "#00000016",
        },
        blue_gray: { 50: "#f1f1f1", 100: "#d9d9d9", "100_7f": "#d9d9d97f" },
        gray: {
          300: "#e2e2e2",
          400: "#bfbaa7",
          600: "#7d8085",
          700: "#5f5f5f",
          800: "#393d46",
          900: "#3c2c04",
          "800_63": "#393d4663",
          "800_71": "#393d4671",
          "900_02": "#1e1a13",
          "300_87": "#e2e2e287",
          "900_03": "#1d1d1b",
          "900_04": "#222222",
          "900_01": "#201703",
          "800_ae": "#393d46ae",
        },
        light_green: { 600: "#77b943", 900: "#574006" },
        green: { A700: "#1fcc5a" },
        amber: { 500: "#feba0d", A700: "#e2a60c" },
        yellow: { 50: "#ffffe8", 800: "#fcaf17" },
        red: { A700: "#dc0d15", A700_01: "#e30d18" },
        lime: {
          800: "#c6910b",
          900: "#ab7d09",
          "900_01": "#8f6908",
          "900_02": "#735407",
          "900_03": "#83481c",
        },
        white: { A700: "#ffffff" },
        indigo: { 800: "#3a2e87" },
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#7d8085,#393d46)",
        gradient1: "linear-gradient(135deg ,#7d8085,#393d46)",
        gradient2: "linear-gradient(58deg ,#000000db,#07070d00)",
      },
      fontFamily: {
        notoseriftamil: "Noto Serif Tamil",
        poppins: "Poppins",
        arial: "Arial",
      },
      boxShadow: {
        bs1: "5px 5px  7px 0px #0000003f",
        bs3: "4px 4px  25px 0px #0000003f",
        bs2: "0px 4px  25px 15px #00000016",
        bs: "0px 15px  25px 15px #00000019",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};