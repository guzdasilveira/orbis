import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0A1220",
        navy: {
          DEFAULT: "#101B33",
          raised: "#17233F",
          raised2: "#1E2C4C",
        },
        gold: {
          DEFAULT: "#C9A24B",
          bright: "#E8C572",
          // gold #C9A24B only hits 2.2:1 on paper — este tono es para texto sobre fondo claro (AA: 5.22:1)
          ink: "#8A5E10",
        },
        paper: "#F7F5F0",
        ink: {
          DEFAULT: "#10141C",
          soft: "#545B68",
          faint: "#7A8288",
        },
        cream: "#F4F1EA",
        mist: "#C7CDD6",
        line: {
          DEFAULT: "rgba(255,255,255,0.09)",
          strong: "rgba(255,255,255,0.16)",
        },
        finanzy: { DEFAULT: "#7FA3E8", fill: "#3E63B3" },
        flux: { DEFAULT: "#2CBF95", fill: "#1E9C78" },
        puremind: { DEFAULT: "#A99CE8", fill: "#7C6FC4" },
      },
      fontFamily: {
        display: ["var(--font-syne)", "Helvetica Neue", "Arial", "sans-serif"],
        voice: ["var(--font-instrument)", "Georgia", "serif"],
        body: ["var(--font-dmsans)", "-apple-system", "Segoe UI", "Arial", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.02em" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1.03rem", { lineHeight: "1.65" }],
        md: ["1.19rem", { lineHeight: "1.6" }],
        lg: ["1.44rem", { lineHeight: "1.3" }],
        xl: ["1.81rem", { lineHeight: "1.15" }],
        "2xl": ["2.375rem", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        "3xl": ["3.125rem", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        hero: ["clamp(2.875rem, 7vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        lg: "10px",
        xl: "16px",
      },
      keyframes: {
        "orbit-move": {
          from: { offsetDistance: "0%" },
          to: { offsetDistance: "100%" },
        },
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
      animation: {
        "orbit-slow": "orbit-move 18s linear infinite",
        "orbit-fast": "orbit-move 11s linear infinite reverse",
        ticker: "ticker 30s linear infinite",
        blink: "blink 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
