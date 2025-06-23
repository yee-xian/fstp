import type { Config } from "tailwindcss";
import { createThemes } from "shadcn-ui/themes";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class", // Enables dark mode via class strategy
  ...createThemes({
    baseColor: "slate", // You can change this to "zinc", "gray", etc.
    cssVariables: true,
  }),
};

export default config;
