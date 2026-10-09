import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF7EE",
        pearl: "#F3ECDC",
        champagne: "#D9C08C",
        gold: "#B8975A",
        emerald: { DEFAULT: "#0F4A3A", deep: "#0A3328", soft: "#2E6B58" },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
