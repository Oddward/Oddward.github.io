module.exports = {
  content: [
    './_site/**/*.html',
  ],
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
      },
      opacity: {
        '90': '0.90',
        'primary': '0.87',
        'secondary': '0.60',
        'mute': '0.38'
      }
    },
  },
  variants: {},
  plugins: [],
}
