import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#003676",
          50: "#eef4fb",
          100: "#d6e4f5",
          200: "#aecbeb",
          300: "#7faedf",
          400: "#4d87cc",
          500: "#2a66b3",
          600: "#1a4f96",
          700: "#003676",
          800: "#012c5e",
          900: "#02224a",
        },
        accent: {
          DEFAULT: "#f5a623",
          dark: "#d98a0b",
        },
      },
      fontFamily: {
        sans: ["var(--font-be-vietnam)", "system-ui", "sans-serif"],
        display: ["var(--font-be-vietnam)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(0, 54, 118, 0.25)",
        card: "0 4px 24px -6px rgba(0, 54, 118, 0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
