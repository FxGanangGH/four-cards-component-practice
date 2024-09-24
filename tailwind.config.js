/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: {
          red: 'hsl(0, 78%, 62%)',
          cyan: 'hsl(180, 62%, 55%)',
          orange: 'hsl(34, 97%, 64%)',
          blue: 'hsl(212, 86%, 64%)'
        },
        secondary: {
          'dark-blue': 'hsl(234, 12%, 34%)',
          'gray-blue': 'hsl(229, 6%, 66%)',
          'light-gray': 'hsl(0, 0%, 98%)'
        }
      },
      fontSize: {
        card: '15px'
      },
      maxWidth: {
        card: '400px'
      },
      minHeight: {
        card: '250px'
      }
    }
  },
  plugins: []
}
