import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro", "sans-serif"],
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;