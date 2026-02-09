import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0284C7",
          dark: "#0369a1",
        },
        accent: {
          orange: "#EA580C",
          yellow: "#FACC15",
        },
        surface: "#F1F5F9",
        "dark-matter": "#0F172A",
        "background-dark": "#0f1623",
      },
      fontFamily: {
        display: ["Rajdhani", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
