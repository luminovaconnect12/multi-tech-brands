import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Core dark luxury palette
        ink: {
          DEFAULT: "#05060A", // deep black
          900: "#070810",
          800: "#0B0D17",
          700: "#11131F",
        },
        graphite: {
          DEFAULT: "#16181F",
          400: "#2A2D38",
          300: "#3A3E4C",
          200: "#5A5F70",
        },
        // Electric / neon blue accent system
        electric: {
          DEFAULT: "#2E6BFF",
          400: "#4F8BFF",
          300: "#6FA3FF",
          glow: "#3D7CFF",
        },
        neon: {
          DEFAULT: "#19E0FF",
          400: "#54E9FF",
        },
        silver: {
          DEFAULT: "#C7CCD6",
          400: "#9AA0AE",
          200: "#E7EAF0",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Fluid typographic scale (clamp-based)
        "display-xl": ["clamp(3.25rem, 8vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.75rem, 6vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2.25rem, 4.5vw, 3.75rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "heading": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "title": ["clamp(1.25rem, 2vw, 1.6rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "body-lg": ["clamp(1.05rem, 1.4vw, 1.25rem)", { lineHeight: "1.6" }],
        "eyebrow": ["0.78rem", { lineHeight: "1", letterSpacing: "0.22em" }],
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      maxWidth: {
        shell: "1320px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(46,107,255,0.22) 0%, rgba(5,6,10,0) 70%)",
        "premium":
          "linear-gradient(135deg, #2E6BFF 0%, #19E0FF 50%, #6FA3FF 100%)",
        "premium-soft":
          "linear-gradient(135deg, rgba(46,107,255,0.18), rgba(25,224,255,0.12))",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(46,107,255,0.25), 0 24px 80px -20px rgba(46,107,255,0.35)",
        glass: "inset 0 1px 0 0 rgba(255,255,255,0.08), 0 30px 80px -40px rgba(0,0,0,0.9)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "spin-slow": "spin-slow 22s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
