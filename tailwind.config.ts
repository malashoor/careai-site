import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        xl: "16px",   // match Flutter rounded corners
        "2xl": "20px"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        arabic: ["var(--font-kufi)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eef9ff",
          100: "#d7f1ff",
          200: "#afe2ff",
          300: "#7ed1ff",
          400: "#4cc0ff",
          500: "#1aaeff",  // = ThemeData.primaryColor
          600: "#0d8fdb",
          700: "#0c6faf",
          800: "#0b568a",
          900: "#0a466f"
        },
        surface: "#ffffff",     // Scaffold background
        text:    "#0f172a"      // On surface (Slate-900ish)
      }
    },
  },
  plugins: [],
} satisfies Config;
