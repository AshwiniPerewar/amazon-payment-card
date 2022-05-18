import React from  "react";
import Child from "./Child";
import styles from "./style.css";

const Payment=()=>
{
    const data=[
        {
          date:"28/10/2020", 
          img:"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
      btn:"Case Study",
      title:"Amazon Gift",
      pay:"Pay",
      os:"Desktop - Mobile",
      },
      {
        date:"17 Sep 2020", 
        img:"https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png",
    btn:"Case Study",
    title:"Apple Gift",
    pay:"Payment",
    os:"MacOS - Mobile",
    }];
    
    return (
        <div className="card">
            {data.map((el)=>
            (
                <Child date={el.date}
                img={el.img}
                btn={el.btn}
                title={el.title}
                pay={el.pay}
                os={el.os}/>
            ))
        }
        </div>
    )
}

export default  Payment;