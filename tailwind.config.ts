import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      // Reference the CSS variable that Next.js font sets up
      sans: ["var(--font-jetbrains-mono)", "monospace"],
      mono: ["var(--font-jetbrains-mono)", "monospace"],
    },
    colors: {
      // Accent colors
      accent: {
        600: "#3f92ff",
        700: "#016fff",
        800: "#1561df",
        900: "#2049a2",
        1000: "#203d85",
        1200: "#1b264f",
      },
      // Primary colors
      primary: {
        "000": "#ffffff",
        "050": "#fdfcfc",
        100: "#f9f8f7",
        200: "#f4f2ef",
        300: "#eeebe7",
        600: "#d7d1c7",
        700: "#ccc5b9",
        800: "#b3aca2",
        900: "#837e77",
        1000: "#6c6862",
        1200: "#1a1918",
      },
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      // Positive colors
      positive: {
        600: "#77ce7b",
        700: "#45bf55",
        800: "#3fa84c",
        900: "#337b3a",
        1000: "#2d6631",
      },
      // Destructive colors
      destructive: {
        600: "#fa7356",
        700: "#ef4129",
        800: "#d23c26",
        900: "#9a301f",
        1000: "#7f2b1b",
      },
    },
    borderRadius: {
      none: "0",
      "2xs": "8px",
      xs: "10px",
      sm: "24px",
      md: "32px",
      lg: "40px",
      full: "9999px",
    },
    padding: {
      "6xs": "4px",
      "5xs": "6px",
      "4xs": "8px",
      "3xs": "10px",
      "2xs": "12px",
      xs: "14px",
      sm: "16px",
      md: "24px",
      lg: "36px",
      xl: "48px",
    },
    fontSize: {
      "2xs": "10px",
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "20px",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    gap: {
      "4xs": "2px",
      "3xs": "4px",
      "2xs": "6px",
      xs: "8px",
      sm: "12px",
      md: "16px",
      lg: "24px",
      xl: "32px",
    },
  },
  plugins: [
    // Add a base plugin to ensure font is applied globally
    plugin(function ({ addBase }) {
      addBase({
        "html, body": {
          fontFamily: "var(--font-jetbrains-mono), monospace",
        },
      });
    }),

    // Component definitions
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".body-xs": {
          fontSize: theme("fontSize.xs"),
          fontWeight: theme("fontWeight.normal"),
          lineHeight: "140%",
        },
        ".body-sm": {
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.normal"),
          lineHeight: "140%",
        },
        ".body-md": {
          fontSize: theme("fontSize.md"),
          fontWeight: theme("fontWeight.normal"),
          lineHeight: "140%",
        },
        ".button-md": {
          fontSize: theme("fontSize.md"),
          fontWeight: theme("fontWeight.bold"),
        },
        ".shadow-card": {
          boxShadow:
            "0px 26px 10px rgba(0, 0, 0, 0.01), 0px 15px 9px rgba(0, 0, 0, 0.03), 0px 6px 6px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.05)",
        },
        ".shadow-toggle": {
          boxShadow:
            "0px 5px 2px rgba(0, 0, 0, 0.01), 0px 3px 2px rgba(0, 0, 0, 0.03), 0px 1px 1px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.05)",
        },
      });
    }),
  ],
};

export default config;
