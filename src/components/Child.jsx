import React from "react";

const Child=({date,img,btn,title,pay,os})=>
{
    return (
        <div className="card1">
        <div className={os==="Desktop - Mobile"? 'card-orange':'card-grey'}>
            <h4 className="date">{date}</h4>
            <img className="img" src={img}/>
            <button className="btn">{btn}</button>
            <h1 className="title">{title}</h1>
            <h1 className="pay">{pay}</h1>
            <h3 className="flex"><p>{os}</p><span className="material-icons">arrowforward</span></h3>
        </div>
        </div>
    )
}
export default Child;