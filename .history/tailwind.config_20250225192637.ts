import type { Config } from "tailwindcss";

export default {
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
      },
      maskImage: {
        'fade': 'linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)',
      }
    },
  },
  plugins: [],
} satisfies Config;
