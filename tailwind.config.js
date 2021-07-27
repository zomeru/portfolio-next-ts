module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      opensans: ['Open Sans'],
    },
    boxShadow: {
      'custom-light': '0 0 10px #313131',
      'custom-dark': '5px 5px 10px #0a0c0e, -5px -5px 10px #14161c',
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: '#4D5C74',
          //DEFAULT: '#64ffda',
        },
        dark: {
          DEFAULT: '#010101',
          100: '#0a0b0e',
          200: '#16181D',
          300: '#16181D',
          500: '#0f1115',
          700: '#202125',
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
    },
  },
  plugins: [],
};
