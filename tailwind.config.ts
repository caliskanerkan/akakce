import type { Config } from "tailwindcss";

export default {
  mode: "jit",
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        layout: "calc(100vh - 100px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
