import styled from "styled-components";

export const Style = styled.div`
 display:flex ;
 justify-content:center;
 align-items:center ;
 height:40em ;
 background:url("/images/mobile/image-hero.jpg") center;
 background-size:cover;

 div {
    padding:1rem ;
    width:22.5rem ;
    height:max-content ;
    border:2px solid white ;
 }

 div h1 {
    text-transform:uppercase ;
    font-family: 'Josefin Sans', sans-serif;
    font-weight:100 ;
    color:white ;
    font-size:2.5rem ;
    width:1rem ;
 }

 @media only screen and (min-width: 540px) {
   background:url("/images/desktop/image-hero.jpg") center;
   height:30em ;
   justify-content:flex-start;
   padding-left:5% ;

   div {
      width:23rem ;
   }
 
   div h1 {
    width:initial ;
   }

  }

`;