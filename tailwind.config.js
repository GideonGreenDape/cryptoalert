/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
        inter:['Inter']
      },
      colors:{
        grey: "#333333",
        primary:"#0d1421",
        primary2:"#58667E",
        btnblue:"#3861FB",
        ash:"#A6B0C3",
        green:"#16C784",
        red:"#EA3943",
        tick:"#F3F2F2"
      },
      dropShadow:{
        '3xl':[
          '0px 4px 24px rgba(88, 102, 126, 0.08)', 
          '0px 1px 2px rgba(88, 102, 126, 0.12)'
        ]
      }
    },
  },
  plugins: [],
}

