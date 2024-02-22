import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "charcoal-black": "#090909",
      },
      fontFamily: {
        heading: ["var(--font-NIKEA)", '"Red Hat Display"'],
        body: ['"Sulphur Point"'],
      },
    },
  },
  plugins: [],
};
export default config;
