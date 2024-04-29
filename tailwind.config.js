/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function({addUtilities}){
      const newUtilities = {
        ".scrollbar-thin" : {
          scrollbarWidth : "thin",
          scrollbarColor : "rbg(31 29 29) white"
        },
        ".scrollbar-webkit" :{
          "&::-webkit-scrollbar" :{
            width: "8px",
          },
          "&::-webkit-scrollbar-track" :{
            background: "white",
          },
          "&::-webkit-scrollbar-thumb" :{
            backgroundColor: "rbg(31 41 55)",
            borderRadius: "20px",
            border: "1px solid white"
          },
        }
      }

      addUtilities(newUtilities , ["responsive","hover"])
    }
  ],
}

