import styled from "styled-components";

export const Style = styled.div`
margin:3em 5% ;
display:flex ;
flex-direction:column ;
align-items:center ;
text-align:center ;

.container-image{
    width:90%;
}

.container-image img {
    max-width:100% ;
}

.informations h1 {   
    margin:3rem auto 0 ;
    text-transform:uppercase ;
    font-family: 'Alata', sans-serif;
    font-family: 'Josefin Sans', sans-serif;
    font-weight:400 ;
    width:16.5rem ;
}

.informations p {
    line-height:1.45rem ;
    color:hsl(0, 0%, 55%);
    font-family: 'Alata', sans-serif;
    font-weight:300;
    font-size:.9rem ;
    padding:0 15% ;
    margin: 1rem  0 2rem;
}

@media only screen and (min-width: 540px) {
    margin:3em 5% ;
    flex-direction:row ;
    align-items:center ;
    position:relative ;
    text-align:left ;

    .container-image{
     width:60%;
     height:100% ;
   }

    .informations {
        padding-left:5% ;
        width:55% ;
        height:80% ;
        position:absolute ;
        background-color:white;
        bottom: 0;
        right:0 ;
    }

    .informations h1 {   
    margin:4vw 0 0 ;
    font-size:clamp(.5rem,.3rem + 15vw,2rem);
}

.informations p {
    line-height:100% ;
    color:hsl(0, 0%, 55%);
    font-size:2vw;
    padding:0 ;
    margin: .4em  0 2rem;
}

    
}

@media only screen and (min-width: 768px) {

    .informations h1 {   
    font-size:2.2rem;
    width:25rem ;
}

    .informations p {
    line-height:1.1rem ;
    font-size:.9rem;
    width:80% ;
  }
}



`