import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      screens: {
        xs: "320px", // Extra small ekranlar
        sm: "640px", // Small ekranlar
        md: "768px", // Medium ekranlar
        lg: "1024px", // Large ekranlar
        xl: "1280px", // Extra large ekranlar
        "2xl": "1536px", // 2x extra large ekranlar
        "3xl": "1600px" // 3x extra large ekranlar
      }
    }
  },
  plugins: []
};
export default config;
