/** @type {import('tailwindcss').Config} */
module.exports = {
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
        primary: "#9683EC",  // Couleur primaire
        secondary: "#DFD8FF",  // Couleur secondaire
        black: "#171717",  // Noir
        white: "#FFFFFF",  // Blanc
      },
    },
  },
  plugins: [],
};
