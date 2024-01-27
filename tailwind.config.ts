import type { Config } from "tailwindcss"
import theme from "tailwindcss/defaultTheme"
import typography from "@tailwindcss/typography"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serif: ["var(--font-playfair)", ...theme.fontFamily.serif],
      sans: ["var(--font-nunito)", ...theme.fontFamily.sans],
    },
    extend: {
      fontFamily: {
        algerian: ["var(--font-algerian)"],
      },
    },
  },
  plugins: [typography],
}
export default config
