import { memo, useEffect, useState } from "react";
import { Style } from "../styles/Header";

function Header() {

    const [active,setActive] = useState<boolean>(false);

    useEffect(()=>{
      const iconMenu = document.querySelector(".image-menu");
      active ? iconMenu?.setAttribute("src","/images/icon-close.svg") : iconMenu?.setAttribute("src","/images/icon-hamburger.svg")
    },[active])


  return (
  <Style active={active} >
    <div className="logo">
        <img src="/images/logo.svg" alt="logo" />
    </div>
    <nav>
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Events</a>
        <a href="#">Products</a>
        <a href="#">Support</a>
    </nav>
    <div className="icon-menu">
        <img className="image-menu" onClick={()=> setActive(!active)} src="/images/icon-hamburger.svg" alt="icon menu" />
    </div>    
  </Style>
  )
}

export default memo(Header)