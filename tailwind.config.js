module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'orange': '#fab560',
        'teal':  '#60f2fa',
        'blurp': '#6860fa',
        'bled':'#fa6860',
        'mainblue':{
          'darkest': '#032958',
          'dark': '#065eca',
          'DEFAULT':'#60a5fa',
          'light': '#86bbfb',
          'lightest': '#bfdbfd'
        },
        'pinky':'#fa60a5',
        'linkedin': '#0a66c2',
        'upwork': '#14a800',
      },
      backgroundImage: theme=> ({
        'mainbg': "url('waves-bg.svg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
