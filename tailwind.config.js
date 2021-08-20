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
        'mainblue':'#60a5fa',
        'pinky':'#fa60a5',
      },
      backgroundImage:theme=> ({
        'mainbg': "url('waves-bg.svg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
