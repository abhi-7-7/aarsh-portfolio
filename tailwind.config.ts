import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace"],
      },
      colors: {
        accent: {
          DEFAULT: "#2563eb",
          light: "#dbeafe",
          dark: "#1d4ed8",
        },
      },
      maxWidth: {
        content: "680px",
      },
    },
  },
  plugins: [],
};

export default config;
