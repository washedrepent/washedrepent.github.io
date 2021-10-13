module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:{
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        menuactive: 'var(--color-bg-menu-active)',
      },
      textColor:{
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        menuactive: 'var(--color-text-menu-active)',
        accent: 'var(--color-text-accent)',
        accent2: 'var(--color-text-accent2)',
      },
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
        'mainbg': "url('./img/waves-bg.svg')",
        'herolight': "url('./img/herolight2.svg')",
        'herodark': "url('./img/herodark2.svg')",
        'portrait': "url('./img/portrait.png')",
        'triangle-dark': "url('./img/triangle-bg-dark.svg')",
        'triangle-light': "url('./img/triangle-bg-light.svg')",

      })
    },
  },
  variants: {
    extend: {
      display:['dark'],
      backgroundImage:['dark'],
    },
  },
  plugins: [],
}