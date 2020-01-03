import React from 'react'
const Nav=['Home','Services','Contact']
const dropDown=['For entrepreneurs','For students','For hobbyists']


const Dropdown=(props) =>{
    return ( 
        <div>
            <ul>
                {props.items.map((el,i)=>

             <li key={i}><a href='#'>{el}</a>
                
               { (el=='Services')&&
                     <ul className="drop">
                        {props.drop.map((drop,j) =>  <li key={j}>{drop}</li>   )}

                        </ul>
                        }
                </li>
                )}
            }


            </ul>
        </div>


    )
}
const Navv =()=>{
    return <Dropdown items={Nav} drop={dropDown}  />
}
export  default Navv;