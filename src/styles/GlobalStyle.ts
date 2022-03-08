import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
   // Dark Gray: hsl(0, 0%, 55%)
   // Very Dark Gray: hsl(0, 0%, 41%)

   //font-family: 'Alata', sans-serif;
   //font-family: 'Josefin Sans', sans-serif;


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,body {
        display:block ;
        min-height:100vh;
        font-size: 15px;
        scrollbar-width: none;
        -ms-overflow-style: none;
        -webkit-font-smoothing: subpixel-antialiased;
        -moz-osx-font-smoothing: grayscale;
        ::-webkit-scrollbar { display: none;}
    }

`