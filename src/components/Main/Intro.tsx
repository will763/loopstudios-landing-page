import { Style } from "../../styles/IntroStyle";

function Intro (){
    return(
        <Style>
            <div className="container-image">
                <img src="/images/desktop/image-interactive.jpg" alt="image-interactive.jpg" />
            </div>
            <div className="informations">
                <h1>The leader in interactive VR</h1>
                <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
            </div>
        </Style>
    )
}

export default Intro;