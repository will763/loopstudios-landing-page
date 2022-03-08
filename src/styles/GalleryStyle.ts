import styled from "styled-components";

export const Style = styled.div`
    display:grid ;
    grid-template-columns:1fr ;
    text-align:center ;
    padding:1rem 5% 5rem;

    h1 {
      text-transform:uppercase ;
      font-family: 'Josefin Sans', sans-serif;
      font-weight:300 ;
      margin-bottom:2.8rem;
    }


    button {
      background-color:white ;
      cursor: pointer;
      border:1px solid black ;
      margin:2em auto 0;
      width:12em ;
      height:2.6rem ;
      text-transform:uppercase ;
      font-family: 'Alata', sans-serif;
      font-size:1em ;
      font-weight:300;
      letter-spacing:.2em ;
      transition:all .28s ease-out ;
    }

    button:hover {
      background-color:black ;
      color: white;
    }

`