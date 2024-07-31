import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
    },
    fontFamily:{
      Poetsen:['Poetsen One'], 
      popin:['Poppins']
    },
  },
  plugins: [],
};
export default config;
