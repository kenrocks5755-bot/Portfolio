import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        matte: {
          900: "#050505",
          800: "#111111",
          700: "#1a1a1a",
        },
        silver: {
          100: "#f8f8f8",
          300: "#e0e0e0",
          500: "#a0a0a0",
        },
        electric: {
          500: "#3b82f6", // Muted electric blue
        }
      },
      fontFamily: {
        sans: ['var(--font-orbitron)', 'Orbitron', 'sans-serif'],
        extended: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.2em',
        'mega': '0.3em',
      }
    },
  },
  plugins: [],
};
export default config;
