module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Fredoka: "'Fredoka', sans-serif",
        Paint:"'Finger Paint', cursive;",
        Oswald: "'Oswald', sans-serif;",
        Slab: "'Roboto Slab', serif;"
      },
      backgroundImage: {
        'hero-pattern': "url('/utils/banner/banner1.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
