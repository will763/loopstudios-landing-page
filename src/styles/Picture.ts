import styled from "styled-components";

export const Style = styled.div`
  display:grid ;
  grid-template-columns:1fr ;
  row-gap:1em ;

  .container-image {
    position:relative;
    transition:transform .22s ease-out ;
  }

  picture img{
    max-height:100% ;
    max-width:100% ;
  }

  picture figcaption {
    width:5.5em;
    text-align:left ;
    font-family: 'Josefin Sans', sans-serif;
    color:white ;
    text-transform:uppercase ;
    position:absolute;
    bottom:1em ;
    left:1em ;
    font-size:clamp(1em,1em + 3vw,2em);
  }

  picture:nth-child(4) figcaption {
    width:3em;
}

  .container-image:hover {
    cursor: pointer;
    transform:scale(1.05,1.05) ;
  }

  @media only screen and (min-width: 540px) {
    grid-template-columns: repeat(auto-fit, minmax(14.8em, auto));
    column-gap:1em ;

    picture img{
    object-fit:cover ;
    }

    picture figcaption {
    left:2em ;

  }
}

  @media only screen and (min-width: 774px) {
    picture figcaption {
    left:1em ;
    } 
  }
  
  

`