import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        // "onyx" is now a light neutral surface scale (renamed in spirit, not
        // in name, to avoid touching every bg-onyx-* class reference).
        // onyx-950 is the page canvas (pure white); descending steps are
        // successively darker greys for elevated cards, borders and the
        // (still-black) footer/header-contrast surfaces.
        onyx: {
          DEFAULT: "#FFFFFF",
          950: "#FFFFFF",
          900: "#FAFAFA",
          850: "#F5F5F4",
          800: "#EFEFED",
          700: "#E2E2DF",
          600: "#CACAC6",
        },
        uda: {
          50: "#FFFBEA",
          100: "#FFF3C4",
          200: "#FCE588",
          300: "#FADB5F",
          400: "#F7C948",
          500: "#FFD700",
          600: "#E0B800",
          700: "#B38F00",
          800: "#8A6D00",
          900: "#6B5300",
        },
        forest: {
          50: "#E6F5E6",
          100: "#C2E8C2",
          200: "#8ED28E",
          300: "#4FB94F",
          400: "#1F9E1F",
          500: "#008000",
          600: "#006B00",
          700: "#005200",
          800: "#003D00",
          900: "#002900",
        },
        party: {
          yellow: "#FFD700",
          // party-gold: a readable-on-white derivative of party-yellow for
          // TEXT use only. Pure #FFD700 text on white fails WCAG contrast —
          // buttons/badges/borders still use the exact yellow hex.
          gold: "#8A6D00",
          green: "#008000",
          black: "#000000",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grain": "url('/images/grain.png')",
        "radial-fade": "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        marquee: "marquee 40s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      letterSpacing: {
        tightest: "-0.06em",
        tighter: "-0.04em",
        widest: "0.14em",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
