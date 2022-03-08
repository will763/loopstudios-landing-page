import { Style } from "../../styles/Picture";
import { Images } from "../../utils/data";


function Picture() {
   return <Style className="pictures">
       {
           Images.map((data,idx) =>{
               return (
                <div key={idx} className="container-image">
                 <picture>
                  <source media="(max-width:540px)" srcSet={data.srcset} />
                  <img src={data.url} alt="picture"/> 
                  <figcaption>{data.legend}</figcaption>
                </picture>
               </div>
               )
           })
       }
       
   </Style>
}

export default Picture;