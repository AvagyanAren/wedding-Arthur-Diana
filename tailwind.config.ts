import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F4F0E8",
        mint: "#F0F3ED",
        sageSoft: "#D8E0CF",
        sage: "#A9B79D",
        sageDeep: "#7E8D72",
        olive: "#8C9A6E",
        leaf: "#6D7D58",
        blush: "#E9C8CC",
        stone: "#6B6E66",
        charcoal: "#3E4338",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.35em",
      },
      boxShadow: {
        invitation: "0 12px 40px rgba(62, 67, 56, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
