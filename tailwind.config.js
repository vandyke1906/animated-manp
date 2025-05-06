/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        zentry:['zentry','sanf-serif'],
        general:['general','sanf-serif'],
        'circular-web':['circular-web','sanf-serif'],
        'robert-medium':['robert-medium','sanf-serif'],
        'robert-regular':['robert-regular','sanf-serif'],
      },
      colors:{
        blue:{
          50:'#DFDFF0',
          75:'#DFDFF2',
          100:'#F0F2FA',
          200:'#010101',
          300:'#4FB7DD',
        },
        violet:{
          300:'#5724FF'
        },
        yellow:{
          100:'#8E983F',
          300:'#EDFF66'
        },
      },
      animation: {
        'fade-up': 'fadeUp 2s infinite ease-in-out',
      },
      keyframes: {
        fadeUp: {
          '0%, 100%': { opacity: 0, transform: 'translateY(10px)' },
          '50%': { opacity: 1, transform: 'translateY(0)' },
        },
      },

    },
  },
  plugins: [],
}