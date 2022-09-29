const colors = require ("tailwindcss/colors");

module.exports = {
  content: ["src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      padding: {
        12.5 : "50px",
      },
      colors: {
      "tomato-300":"rgb(245, 148, 148)",
      "tomato-500":"rgb(255, 81, 81)",
      "tomato-700":"rgb(258, 47, 47)",
      "footer-500":"rgb(65, 80, 97)",
    },
      gray:colors.gray,
      white:colors.white,
      black:colors.black,
    },
     
    
  },
  plugins: [],
}
