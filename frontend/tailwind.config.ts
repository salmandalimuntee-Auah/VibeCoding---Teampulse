import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary, #0066cc)",
          focus: "var(--color-primary-focus, #0071e3)",
          dark: "var(--color-primary-on-dark, #2997ff)",
        },
        canvas: {
          DEFAULT: "var(--color-canvas, #ffffff)",
          parchment: "var(--color-canvas-parchment, #f5f5f7)",
        },
        surface: {
          pearl: "var(--color-surface-pearl, #fafafc)",
          tile1: "var(--color-surface-tile-1, #272729)",
          tile2: "var(--color-surface-tile-2, #2a2a2c)",
          tile3: "var(--color-surface-tile-3, #252527)",
          black: "var(--color-surface-black, #000000)",
        },
        ink: {
          DEFAULT: "var(--color-ink, #1d1d1f)",
          muted80: "var(--color-ink-muted-80, #333333)",
          muted48: "var(--color-ink-muted-48, #7a7a7a)",
        },
        hairline: "var(--color-hairline, #e0e0e0)",
        divider: "var(--color-divider-soft, #f0f0f0)",
      },
      borderRadius: {
        pill: "9999px",
        lg: "18px",
        md: "11px",
        sm: "8px",
        xs: "5px",
      },
      spacing: {
        section: "80px",
      },
      boxShadow: {
        product: "0px 5px 30px 0px rgba(0, 0, 0, 0.22)",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["SF Pro Display", "Inter", "system-ui", "sans-serif"],
        body: ["SF Pro Text", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
