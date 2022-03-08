import styled from "styled-components";


export const Style = styled.footer`
  display:flex ;
  flex-direction:column ;
  align-content:center ;
  background-color:black ;

  .logo-container {
    text-align:center ;
  }

  .logo-container .logo img {
    margin-top:2.8rem ;
    width:30% ;
    max-width:9rem;
  }

  .container {
    padding:1rem 0 2rem ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
  }

  .container a {
    position:relative ;
    text-decoration:none;
    color:white ;
    margin:.6rem 0 ;
    cursor: pointer;
    font-family: 'Josefin Sans', sans-serif;
    font-weight:bold;
    font-size:.85rem ;
  }

  .icons-p .icons-socials {
    margin: 0 auto ;
    display:flex ;
    justify-content:space-between ;
    width:30% ;
    max-width:10rem;
  }

  .icons-p .icons-socials img{
    position:relative ;
    width:16%;
    max-width: 1.5rem;
    cursor: pointer;
  }

  .icons-p p {
    font-size:.8em ;
    margin:1.3rem 0 3rem ;
    color:hsl(0, 0%, 55%) ;
    text-align:center ;
  }

  @media only screen and (min-width: 540px) {
    flex-direction:row ;
    justify-content:space-between;
    padding:0 5% ;

    .logo-container {
      margin:auto 0 ;
      text-align:left ;
    }

    .logo-container .logo img {
      margin-top:0rem ;
      width:55% ;
      max-width:8rem;
    }

   .container {
      padding:0 ;
      flex-direction:row ;
      align-items:center ;
    }

   .container a {
      position: relative;
      margin:.9rem 1rem 0 0;
      cursor: pointer;
    }

   .container a:hover::before {
      content:"";
      position:absolute ;
      left:50% ;
      bottom:-.2rem ;
      transform:translateX(-50%);
      width:1rem ;
      height:.14rem ;
      background-color:white ;
    }

    .icons-p {
      margin-top:3rem ;
    }

    .icons-p .icons-socials {
      margin: 0 0 0 auto ;
      width:60% ;
      max-width:8rem;
    }

    .icons-p .icons-socials img::before {
      content:"";
      position:absolute ;
      width:4rem ;
      height:4rem ;
      background-color:blue ;
    }
  }

`