import styled from "styled-components";

interface Props {
    active : boolean
}

export const Style = styled.header<Props>`
  padding: 0 5% ;
  height:7vh ;
  position:absolute ;
  top:0 ;
  left:0 ;
  background-color:${props => props.active ? "black" : "transparent"};
  width:100% ;
  display:flex ;
  justify-content:space-between;
  align-items:flex-end ;

  .logo img {
    width:clamp(7rem,.3rem + 15vw,9rem);
  }

  nav {
    display:${props => props.active ? "flex" : "none"};
    flex-direction:column ;
    justify-content:center ;
    align-items:center ;
    position:absolute ;
    background-color:black;
    top:100% ;
    left:0 ;
    width:100% ;
    height:14rem;
  }

  nav a {
    width:max-content ;
    position:relative ;
    cursor: pointer;
    margin-top:1rem;
    text-decoration:none ;
    text-transform:uppercase ;
    color:white ;
    font-family: 'Josefin Sans', sans-serif;
  }

  nav a:hover::before {
    content:"" ;
    position:absolute ;
    bottom:-.3rem ;
    width:2rem;
    left:50%;
    transform:translateX(-50%) ;
    height:.2rem ;
    background-color:white ;
    border-radius:1rem ;
  }

  .icon-menu img {
    max-width:80% ;
    cursor: pointer;
  }

  @media only screen and (min-width: 540px) {
    background-color:transparent ;

    .icon-menu img {
      display:none ;
   }
    nav {
      margin-left:auto;
      display:flex;
      flex-direction:row ;
      justify-content:space-between;
      align-items:flex-end;
      position:relative ;
      top:0 ;
      width:65%;
      max-width:22rem ;
      height:100%;
      background-color:transparent ;
  }
    nav a {
      margin-top:0rem;
      text-transform:capitalize ;
      color:white ;
      font-size: clamp(.85em,5em + 3vw,1em) ;
      font-weight:bold ;
  }
}

`;