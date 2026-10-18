import type { Config } from "tailwindcss";

// Colours are CSS variables (see app/globals.css) so light/dark and the single
// accent token can change without touching components.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.ts"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      // Type scale: oversized, fluid, tight.
      fontSize: {
        "display-xl": ["clamp(3.4rem, 10.6vw, 11.5rem)", { lineHeight: "0.9", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.8rem, 7.4vw, 7.5rem)", { lineHeight: "0.93", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2.1rem, 4.6vw, 4.6rem)", { lineHeight: "0.98", letterSpacing: "-0.025em" }],
        "display-sm": ["clamp(1.6rem, 2.8vw, 2.7rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        lead: ["clamp(1.15rem, 1.7vw, 1.5rem)", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        body: ["1rem", { lineHeight: "1.6" }],
        small: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.02em" }],
      },
      spacing: {
        gutter: "var(--gutter)",
        section: "clamp(6rem, 14vw, 13rem)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
