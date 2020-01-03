import React from 'react'
const Box =(props) =>
{return(<div className="Boxes">
    {props.items.map((el,i)=>
     <div className={el.class} key={i}>
         <p>{el.b}</p>
         <h1>{el.p}</h1>
         {(el.chose)&&
         <select>
         <option value="#">CHOOSE COUNTRY</option>
         <option value="#">Argentina</option>
         <option value="#">Australia</option>
         <option value="#">Brazil</option>
         <option value="#">Chile</option>
         <option value="#">Colombia</option>
         <option value="#">Czech</option>
         <option value="#">France</option>
         <option value="#">Italy</option>
         <option value="#">Mexico</option>
         <option value="#">Peru</option>
         <option value="#">Poland</option>
         <option value="#">Portugal</option>
         <option value="#">Spain</option>
         <option value="#">Turkey</option>
         <option value="#">UK</option>
     </select>
         
         } 
         <img src={el.image} alt="photo" className="aa"/>

    </div>   
    
    )
    }

</div>

)}
export default Box