/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        AzulSidebar: '#01215A',
        selectB: '#0651B6',
        selectB2: '#006DFF',
        GreenIcon: '#7ED321', 
        AzulIcon: '#0450B5', 
        CelesteIcon: '#0077FF',
        botonAgregar: '#53D321',
      },
    },
  },
  plugins: [],
}

