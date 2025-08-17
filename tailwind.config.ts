import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        base: {
          100: "var(--color-base-100)",
          200: "var(--color-base-200)",
          300: "var(--color-base-300)",
          content: "var(--color-base-content)",
        },
        // Primary colors
        primary: {
          DEFAULT: "var(--color-primary)",
          content: "var(--color-primary-content)",
        },
        // Secondary colors
        secondary: {
          DEFAULT: "var(--color-secondary)",
          content: "var(--color-secondary-content)",
        },
        // Accent colors
        accent: {
          DEFAULT: "var(--color-accent)",
          content: "var(--color-accent-content)",
        },
        // Neutral colors
        neutral: {
          DEFAULT: "var(--color-neutral)",
          content: "var(--color-neutral-content)",
        },
        // Status colors
        info: {
          DEFAULT: "var(--color-info)",
          content: "var(--color-info-content)",
        },
        success: {
          DEFAULT: "var(--color-success)",
          content: "var(--color-success-content)",
        },
        warning: {
          DEFAULT: "var(--color-warning)",
          content: "var(--color-warning-content)",
        },
        error: {
          DEFAULT: "var(--color-error)",
          content: "var(--color-error-content)",
        },
      },
      borderRadius: {
        selector: "var(--radius-selector)",
        field: "var(--radius-field)",
        box: "var(--radius-box)",
      },
      spacing: {
        selector: "var(--size-selector)",
        field: "var(--size-field)",
      },
      borderWidth: {
        DEFAULT: "var(--border)",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(15, 23, 42, 0.06)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
