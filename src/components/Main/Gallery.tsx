import { memo, useEffect, useState } from "react";
import { Style } from "../../styles/GalleryStyle";
import { Images } from "../../utils/data";
import Picture from "./Picture";

function Gallery(){ 
   const [device,setDevice] = useState<string>("mobile");

   useEffect(()=>{
    setDevice(():string =>{
        let device = "";
        window.innerWidth <= 768 ? device = "mobile" : device = "desktop";
        return device
    })

    let screen:number = 0;     
    window.addEventListener("resize",() => {
       screen =  window.innerWidth;
       screen <= 375 ? setDevice("mobile") : setDevice("desktop");  
    }) 
   })

   return(
       <Style className="container">
           <h1>Our creations</h1>
           <Picture />
           <button>See all</button>
       </Style>
   )
}

export default Gallery