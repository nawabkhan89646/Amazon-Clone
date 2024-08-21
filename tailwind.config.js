import { Container } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      maxWidth:{
        container:"1440px"
      },
      screens:{
        xz:"320px",
        sm:"375px",
        sml:"500px",
        md:"667px",
        mdl:"768px",
        lg:"960px",
        lgl:"1024px",
        xl:"1280px"
      },
      colors:{
        amazon_blue:"#131921",
        amazon_light_blue:"#232f3e",
        amazon_yellow:"#febd69",
        whiteText:"#ffffff",
        ligth_text:"#ccc",
        quantity_box:"#F0F2F2",
        footerBottom:"#131A22"
      },
      boxShadow:{
        textShadow :"0px 0px 32px 1px rgba(199,199,199,1)",
        amazonInput :"0 0 3px 2px rgb(228 121 17/50%)",
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [
  ],
}