import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
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
      fontFamily: {
        inter: "var(--font-inter)",
        lato: "var(--font-lato)",
      },
    },
  },
  daisyui: {
    // themes: ["emerald"],

    themes: [
      {
        emeralds: {
          ...require("daisyui/src/theming/themes")["emerald"],
          primary: "#009540",
          success: "#009540",
          "primary-content": "#ffffff",

          // "primary-content": "#ffffff",
          // secondary: "#f000b8",
          // "secondary-content": "#ffffff",
          // accent: "#37cdbe",
          // "accent-content": "#ffffff",
          // neutral: "#2a2e37",
          // "neutral-content": "#ffffff",
          // "base-100": "#3d4451",
          // "base-200": "#2a2e37",
          // "base-300": "#16181d",
          // "base-content": "#ebecf0",
          // info: "#66c6ff",
          // "info-content": "#ffffff", // added "info-content"

          // "success-content": "#ffffff", // added "success-content"
          // warning: "#e2d562",
          // "warning-content": "#ffffff", // added "warning-content"
          error: "#F5222D",
          "error-content": "#ffffff",
        },
      },
    ],
  },
  plugins: [daisyui],
};
export default config;
