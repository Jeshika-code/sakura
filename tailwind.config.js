/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",flowbite.content(),],
 
  theme: {
    extend: {
      colors: {
        textteal: '	#008080',
        // textteal: '#ec275f',


        ewhite:'#F4F4F6',
        
      },
    },
  },
  plugins: [
    flowbite.plugin(),
]
}

