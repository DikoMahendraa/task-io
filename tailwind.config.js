/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    colors: {
      primary: {
        'gray-50': '#EAEAEA',
        'gray-100': '#F8F8F8',
        'gray-300': '#787878',
        'gray-200': '#858585',
        'gray-400': '#F2F0EE',

        'white-50': '#FFFFFF',

        'orange-50': '#FFF2EC',
        'orange-100': '#FF7940',

        'purple-50': '#F1F1FF',
        'purple-100': '#7775F6',

        'pink-50': '#FFE9E9',
        'pink-50': '#FF7F81',

        'green-50': '#EEFBE7',
        'green-100': '#6AD38C',

        'blue-50': '#EFFBFF',
        'blue-100': '#75DFFB',

        'black-100': '#000000'
      }
    }
  },
  plugins: []
};
