/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505', // Preto profundo
        primary: '#FFFFFF',    // Branco puro
        accent: '#e0040b',     // Vermelho OTD
        dark: '#111111',       // Cinza muito escuro
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        drama: ['"DM Serif Display"', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      backgroundImage: {
        'fluid-gradient': 'radial-gradient(circle at center, #1a1a1a 0%, #050505 100%)',
      }
    },
  },
  plugins: [],
}
