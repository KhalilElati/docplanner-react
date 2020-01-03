import React from 'react'
const Image=(props)=>{
    return (<div>
        <div className="images">
            {props.img.map((el,i)=>
             <div>
                 <img src={el.img} alt="photo"/>
                 <p>{el.title}</p>
                 <button>SEE OPENINGS</button>
            </div>   )}
        </div>
        <div className="images">
            {props.img1.map((el,i)=>
             <div>
                 <img src={el.img} alt="photo"/>
                 <p>{el.title}</p>
                 <button>SEE OPENINGS</button>
            </div>   )}
        </div>

    </div>

    )
}
export default Image