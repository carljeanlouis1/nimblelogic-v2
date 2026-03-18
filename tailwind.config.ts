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
      colors: {
        background: "#0A0F1C",
        surface: "#111827",
        elevated: "#1F2937",
        primary: {
          DEFAULT: "#00D4AA",
          hover: "#00E8BC",
          muted: "rgba(0, 212, 170, 0.1)",
        },
        secondary: {
          DEFAULT: "#0EA5E9",
          muted: "rgba(14, 165, 233, 0.1)",
        },
        amber: {
          DEFAULT: "#F59E0B",
          muted: "rgba(245, 158, 11, 0.1)",
        },
        "text-primary": "#F9FAFB",
        "text-secondary": "#9CA3AF",
        "text-muted": "#6B7280",
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.05)",
          hover: "rgba(255, 255, 255, 0.1)",
          active: "rgba(0, 212, 170, 0.3)",
        },
        foreground: "#F9FAFB",
        card: {
          DEFAULT: "#111827",
          foreground: "#F9FAFB",
        },
        popover: {
          DEFAULT: "#111827",
          foreground: "#F9FAFB",
        },
        muted: {
          DEFAULT: "#1F2937",
          foreground: "#9CA3AF",
        },
        accent: {
          DEFAULT: "#1F2937",
          foreground: "#F9FAFB",
        },
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#F9FAFB",
        },
        input: "rgba(255, 255, 255, 0.1)",
        ring: "#00D4AA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "700" }],
        "heading": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "subheading": ["1.25rem", { lineHeight: "1.5", fontWeight: "500" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body": ["1rem", { lineHeight: "1.75" }],
        "small": ["0.875rem", { lineHeight: "1.6" }],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #00D4AA, #0EA5E9)",
        "gradient-accent-hover": "linear-gradient(135deg, #00E8BC, #38BDF8)",
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(0, 212, 170, 0.15)",
        "glow-md": "0 0 40px rgba(0, 212, 170, 0.2)",
        "glow-lg": "0 0 80px rgba(0, 212, 170, 0.25)",
        "glow-amber": "0 0 40px rgba(245, 158, 11, 0.15)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "border-rotate": "border-rotate 4s linear infinite",
        "waveform-1": "waveform 1.2s ease-in-out infinite",
        "waveform-2": "waveform 1.2s ease-in-out 0.15s infinite",
        "waveform-3": "waveform 1.2s ease-in-out 0.3s infinite",
        "waveform-4": "waveform 1.2s ease-in-out 0.45s infinite",
        "waveform-5": "waveform 1.2s ease-in-out 0.6s infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "mesh-drift": "mesh-drift 30s ease-in-out infinite",
        "mesh-drift-2": "mesh-drift-2 40s ease-in-out infinite",
        "mesh-drift-3": "mesh-drift-3 35s ease-in-out infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "border-rotate": {
          from: { "--angle": "0deg" },
          to: { "--angle": "360deg" },
        },
        waveform: {
          "0%, 100%": { height: "20%" },
          "50%": { height: "80%" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.8" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
        "mesh-drift": {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "25%": { transform: "translate(5%, -3%) scale(1.05)" },
          "50%": { transform: "translate(-3%, 5%) scale(0.95)" },
          "75%": { transform: "translate(3%, 2%) scale(1.02)" },
        },
        "mesh-drift-2": {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "33%": { transform: "translate(-5%, 4%) scale(1.08)" },
          "66%": { transform: "translate(4%, -2%) scale(0.97)" },
        },
        "mesh-drift-3": {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "20%": { transform: "translate(3%, -5%) scale(1.03)" },
          "40%": { transform: "translate(-4%, 3%) scale(0.98)" },
          "60%": { transform: "translate(2%, 4%) scale(1.06)" },
          "80%": { transform: "translate(-3%, -2%) scale(0.96)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
