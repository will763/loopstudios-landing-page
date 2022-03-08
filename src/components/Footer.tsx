import { memo } from "react";
import { Style } from "../styles/FooterStyle";

function Footer() {
    return(
        <Style>
            <div className="logo-container">
             <div className="logo">
                <img src="/images/logo.svg" alt="logo" />
             </div>
             <div className="container">
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">Events</a>
                <a href="#">Products</a>
                <a href="#">Support</a>
             </div>
            </div>
            <div className="icons-p">
             <div className="icons-socials">
                <img src="/images/icon-facebook.svg" alt="icon-social" />
                <img src="/images/icon-twitter.svg" alt="icon-social" />
                <img src="/images/icon-pinterest.svg" alt="icon-social" />
                <img src="/images/icon-instagram.svg" alt="icon-social" />
             </div>
             <p>
             © 2021 Loopstudios. All rights reserved.
             </p>
            </div>
        </Style>
    )

}

export default memo(Footer);