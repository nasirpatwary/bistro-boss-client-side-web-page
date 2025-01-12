/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'chef': "url('../src/assets/home/chef-service.jpg')",
        'parallax': "url('../src/assets/home/featured.jpg')",  
        'our-menu': "url('../src/assets/menu/banner3.jpg')",  
        'authentication': "url('./src/assets/others/authentication.png')",  
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

