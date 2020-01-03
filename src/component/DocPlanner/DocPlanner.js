import React from 'react'
 import './Docplanner.css';
const Nav=(props)=>{
    return ( <div>
        <ul className="nav">
            <li><img height="200px" width="200px" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="aa"/></li>
            {props.items.map((el,i) => <li className="hover" key={i}><a href ='#'>{el.title}</a>
                {(el.dropdown)&& 
                <ul className="drop">
                {el.dropdown.map((drop,j) =>  <li key={j}>{drop}</li>
                    
                  )}</ul>}
                
                </li>
        
            )}
        </ul>

    </div>)
}
export default Nav