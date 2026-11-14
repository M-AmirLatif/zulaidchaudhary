import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#0C2B1E",
          800: "#143D2B",
          700: "#1C523B",
          600: "#25684B",
          100: "#E8F2EC",
        },
        accent: {
          gold: "#C69234",
          "gold-light": "#E5B55D",
          "gold-dark": "#94681E",
        },
        surface: {
          cream: "#FDFBF7",
          muted: "#F4F0E8",
          card: "#FFFFFF",
        },
        charcoal: {
          DEFAULT: "#1A201C",
          muted: "#4B554E",
        },
        alert: {
          red: "#B91C1C",
        },
        status: {
          green: "#15803D",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        urdu: ["var(--font-urdu)", "Noto Nastaliq Urdu", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
