import React from 'react'
const BigBox=(props)=>{
    return (
        <div className="bigbox">
            <div>
                <h1 className="title">The world's<br/>
                    biggest healthcare platform
                </h1>
                <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
                <img className="imaa" src="https://www.docplanner.com/img/sygnet.png" alt="taswira" />   
            </div>
            <div  className="Box1">
                {props.box.map((el,i)=> 
                <div className="sbox1"> 
                   <img src={el.img} alt="logo"/>
                   <h2 className="title">{el.title}</h2>
                   <p>{el.p}</p>
                </div>)}
            </div>
            <div className="Box2">
                {props.box1.map((el,i)=>
                <div className="sbox2">
                    <img src={el.img} alt="logo"/>
                    <h2 className="title">{el.title}</h2>
                    <p>{el.p}</p>
                 </div>   )}

            </div>


        </div>
    )

}

export default BigBox