module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'italic': 'italic',
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      vs: '9px',
    },
    minWidth: {
      '1024': '1024px',
      '250' : '250px',
    },
    extend: {
      gridAutoColumns: {
        '3fr': 'minmax(3fr, 3fr)',
        '200': 'minmax(200px,1fr)',
      },
      width: {
        '1024': '1024px',
        '250' : '250px',
        '1160': '1160px',
        '960' : '960px',
        '650' : '650px',
        '336' : '336px',
      },
      height:{
        '1024': '1024',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
