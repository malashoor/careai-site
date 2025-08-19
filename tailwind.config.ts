import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  safelist: [
    { pattern: /text-ink-(25|50|100|150|200|300|400|500|600|700|800|900)/ },
    { pattern: /bg-ink-(25|50|100|150|200|300|400|500|600|700|800|900)/ },
    { pattern: /border-ink-(25|50|100|150|200|300|400|500|600|700|800|900)/ },
    "btn", "btn-primary", "btn-ghost",
    { pattern: /(ring|focus:ring)-(brand-blue|ink-(100|150|200))/ },
  ],
  theme: {
    extend: {
      fontFamily: {
        // System stack: shows SF on Apple devices, Segoe on Windows, Roboto on Android
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          "sans-serif",
        ],
      },
      colors: {
        // Neutral palette tuned to Apple vibes
        ink: {
          900: "#111111",
          800: "#1d1d1f",
          700: "#2d2d2d",
          600: "#3a3a3c",
          500: "#515154",
          400: "#6e6e73",
          300: "#86868b",
          200: "#a1a1a6",
          150: "#d2d2d7", // classic Apple border gray
          100: "#e5e5ea",
          50:  "#f5f5f7",  // classic Apple ghost bg
          25:  "#fbfbfd",
        },
        link: {
          DEFAULT: "#06c",   // Apple link blue
          hover:   "#0077ed",
          focus:   "#2997ff",
        },
        brand: {
          blue: "#0071e3",      // CTA blue
          blueHover: "#0077ed",
          graphite: "#1d1d1f",
          shell: "#f5f5f7",
        },
      },
      borderRadius: {
        pill: "9999px",
        xl2: "1rem",
        xl3: "1.25rem",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(0,0,0,.06)",
        card: "0 8px 24px rgba(0,0,0,.06)",
        lift: "0 10px 30px rgba(0,0,0,.08)",
      },
      spacing: {
        // roomy vertical rhythm
        section: "6rem",
        sectionLg: "8rem",
      },
      typography: ({ theme }: any) => ({
        apple: {
          css: {
            "--tw-prose-body": theme("colors.ink.800"),
            "--tw-prose-headings": theme("colors.ink.900"),
            "--tw-prose-links": theme("colors.link.DEFAULT"),
            "--tw-prose-bold": theme("colors.ink.900"),
            "--tw-prose-quotes": theme("colors.ink.800"),
            "--tw-prose-counters": theme("colors.ink.400"),
            "--tw-prose-bullets": theme("colors.ink.200"),
            "--tw-prose-hr": theme("colors.ink.150"),
            "--tw-prose-code": theme("colors.ink.900"),
            "--tw-prose-th-borders": theme("colors.ink.150"),
            "--tw-prose-td-borders": theme("colors.ink.150"),
            a: { textDecoration: "none" },
            "a:hover": { color: theme("colors.link.hover") },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
