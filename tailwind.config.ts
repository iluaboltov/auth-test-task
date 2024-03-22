import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      animation: {
        fadein: "fadein 200ms ease-in-out",
        fadeout: "fadeout 200ms ease-in-out",
      },
      backgroundColor: {
        blue: {
          DEFAULT: "#316FEA",
        },
      },
      borderColor: {
        grey: {
          DEFAULT: "#D3D8DC",
        },
      },
      fontFamily: {
        Qencode: ['"Basis Grotesque Pro"', "sans-serif"],
      },
      fontSize: {
        "2sm": ["0.938rem", "1.25rem"],
        "3xl": ["1.875rem", "2.421rem"],
        base: ["1rem", "1.313rem"],
      },
      keyframes: {
        fadein: {
          "0%": { opacity: "100" },
          "100%": { opacity: "0" },
        },
        fadeout: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
      },
      textColor: {
        blue: {
          DEFAULT: "#316FEA",
        },
        grey: {
          DEFAULT: "#A1ABB5",
        },
      },
      width: {
        "100": "25rem",
      },
    },
  },
};
export default config;
