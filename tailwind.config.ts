import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1E33",
          900: "#081627",
          800: "#0B1E33",
          700: "#122c47",
          600: "#1c3d5e",
        },
        paper: {
          DEFAULT: "#F6F3EE",
          dark: "#EDE8E0",
        },
        clay: {
          DEFAULT: "#E1552B",
          600: "#c9481f",
          500: "#E1552B",
          400: "#ec7350",
        },
        sea: {
          DEFAULT: "#1F6E7E",
          600: "#175a68",
        },
        sand: "#D9C9AE",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,30,51,0.04), 0 12px 32px -12px rgba(11,30,51,0.18)",
        lift: "0 20px 50px -20px rgba(11,30,51,0.35)",
      },
      borderRadius: {
        card: "14px",
      },
    },
  },
  plugins: [],
};

export default config;
