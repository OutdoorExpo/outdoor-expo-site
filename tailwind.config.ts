import type { Config } from "tailwindcss";

/**
 * Outdoor Expo 2026 — Tailwind Configuration
 *
 * This file is the SINGLE SOURCE OF TRUTH for the design system.
 * Every color, font size, spacing value used on the site MUST come from here.
 *
 * Aligned with:
 * - Phase 1 Brand Identity (colors, typography)
 * - Phase 3.5 Design Consistency Rules (8pt grid, type scale)
 * - Mobile Design Rules v1.0 (touch targets, mobile type scale)
 */

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // RESET defaults so designers can't accidentally use non-system values
    fontFamily: {
      sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      heading: ["var(--font-sora)", "Sora", "system-ui", "sans-serif"],
    },
    // 8-POINT GRID — Rule #1 — these are the ONLY allowed spacing values
    spacing: {
      "0": "0",
      px: "1px",
      "0.5": "2px",
      "1": "8px",
      "2": "16px",
      "3": "24px",
      "4": "32px",
      "5": "40px",
      "6": "48px",
      "7": "56px",
      "8": "64px",
      "10": "80px",
      "12": "96px",
      "15": "120px",
      "20": "160px",
    },
    // BRAND COLORS — Rule #9 — exact tokens from Phase 1
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#0F0E0C",
      // Primary — Forest Green
      green: {
        50: "#E8F5EC",
        200: "#95D1A6",
        400: "#2E944D",
        500: "#1E783A", // base brand
        700: "#155427",
        900: "#0B2E15",
      },
      // Accent — Vibrant Orange
      orange: {
        50: "#FFF4ED",
        200: "#FFC9A8",
        400: "#FF8438",
        500: "#F97316", // base accent
        700: "#BA4404",
      },
      // Tertiary — Sky Blue (marine contexts only)
      blue: {
        50: "#E0F2FE",
        200: "#7DD3FC",
        400: "#38BDF8",
        500: "#0EA5E9",
        700: "#0369A1",
      },
      // Warm neutrals
      paper: "#FAFAF7",
      sand: "#F1EFE9",
      "light-grey": "#D9D6CE",
      "mid-grey": "#8B8780",
      "dark-grey": "#4A4843",
      charcoal: "#2C2A26",
      // Semantic
      success: "#2E944D",
      warning: "#F59E0B",
      error: "#DC2626",
      info: "#0EA5E9",
    },
    extend: {
      // TYPE SCALE — Rule #4 — desktop / mobile responsive
      fontSize: {
        // Display / Hero (Rule: 88px desktop, 44px mobile)
        display: ["clamp(44px, 7vw, 88px)", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "800" }],
        // H1 (56px desktop, 36px mobile)
        h1: ["clamp(36px, 5vw, 56px)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        // H2 (40px desktop, 28px mobile)
        h2: ["clamp(28px, 4vw, 40px)", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "700" }],
        // H3 (28px desktop, 22px mobile)
        h3: ["clamp(22px, 2.5vw, 28px)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        // H4 (22px desktop, 18px mobile)
        h4: ["clamp(18px, 1.8vw, 22px)", { lineHeight: "1.25", fontWeight: "600" }],
        // Body L (20px desktop, 18px mobile)
        "body-l": ["clamp(18px, 1.5vw, 20px)", { lineHeight: "1.6", fontWeight: "400" }],
        // Body (16px both — must NEVER go below 16 for iOS zoom prevention)
        body: ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        // Body S (14px both)
        "body-s": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        // Label / Button (14px both)
        label: ["14px", { lineHeight: "1.2", letterSpacing: "0.08em", fontWeight: "600" }],
        // Eyebrow (12px both, uppercase, tracked)
        eyebrow: ["12px", { lineHeight: "1.2", letterSpacing: "0.08em", fontWeight: "600" }],
      },
      // BORDER RADIUS — Rule #9
      borderRadius: {
        none: "0",
        sm: "2px", // buttons
        DEFAULT: "4px", // cards
        lg: "8px", // larger surfaces
        full: "9999px", // pills, avatars
      },
      // CONTAINER
      maxWidth: {
        content: "1280px", // standard container
        prose: "760px", // text block max width
      },
      // SECTION MIN HEIGHTS
      minHeight: {
        "hero-desktop": "88vh",
        "hero-mobile": "70vh",
        "hero-sub": "56vh", // sub-pages like Visit
      },
      // TOUCH TARGETS — Mobile Rule #2 — minimum touch areas
      width: {
        "touch-min": "44px",
        "touch-rec": "48px",
      },
      height: {
        "touch-min": "44px",
        "touch-rec": "48px",
        "btn": "48px",
        "btn-lg": "56px",
        "input": "48px",
      },
      // ANIMATION
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};

export default config;
