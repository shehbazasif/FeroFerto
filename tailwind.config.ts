import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        neutral: {
          50: "#fffaf6",
          100: "#fff6ef",
          200: "#fff0e6",
          300: "#fbe7d6",
          400: "#f4dcc7",
          500: "#e9cdb6",
          600: "#cda88f",
          700: "#a67a60",
          800: "#83543f",
          900: "#5a3a28",
        },
      },
      boxShadow: {
        "3d": "0 20px 60px rgba(17, 24, 39, 0.12)",
        "3d-soft": "0 16px 40px rgba(17, 24, 39, 0.08)",
        glow: "0 0 30px rgba(249, 115, 22, 0.18)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "slide-up": "slideUp 0.65s ease-out both",
        "fade-in": "fadeIn 0.6s ease-out both",
        "fade-up": "fadeUp 0.8s ease-out both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotateX(0deg)" },
          "50%": { transform: "translateY(-18px) rotateX(4deg)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        450: "450ms",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        ".glass": {
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(255, 247, 235, 0.72)",
          border: "1px solid rgba(255, 221, 191, 0.32)",
        },
        ".glass-card": {
          backdropFilter: "blur(18px) saturate(180%)",
          backgroundColor: "rgba(255, 250, 244, 0.82)",
          border: "1px solid rgba(255, 224, 201, 0.32)",
        },
      });
    },
  ],
} as Config;
