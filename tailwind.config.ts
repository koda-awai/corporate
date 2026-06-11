import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F7F4",
        foreground: "#1A1A1A",
        primary: "#1A1A1A",
        secondary: "#6B6B6B",
        muted: "#6B6B6B",
        dark: "#111111",
        border: "rgba(26, 26, 26, 0.1)",
        accent: "#8A7A5C",
      },
      fontFamily: {
        serif: ["var(--font-noto-serif-jp)", "serif"],
        sans: ["var(--font-dm-sans)", "var(--font-noto-serif-jp)", "sans-serif"],
      },
      maxWidth: {
        content: "1100px",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
