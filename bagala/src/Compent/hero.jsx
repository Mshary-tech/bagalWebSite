import React from "react";
import arrorw from "../Assets/icon/arrorw.svg"
import Cover from "../Assets/image/bagalaIphone.png"

export default function Hero(){
    return <div className="hero">
        <h4 className="hero-slogen">موثوق من أكثر من 1000 بقالة</h4>
        <h1 className="hero-title">جودة يمكن تذوقها , خدمة يمكن الاعتماد عليها</h1>
        <div className="hero-btns">
            <Btn Color = "#000"  herf= '#' backgroundcolor= '#fff' text = 'اكتشف المزيد' ></Btn>
            <Btn Color = "#FFF"  herf= '#' backgroundcolor= '#5252E4' text = 'تواصل معنا' icon = {<img src ={arrorw} alt = 'right arrow'></img>}></Btn>
        </div>
        <img className="hero-cover" width={'900px'}  src={Cover}></img>
    </div>
}



export function Btn(props){
    return <a href={props.herf} style={{background : props.backgroundcolor , color : props.Color } }  className="hero-btn">
        {props.text}
        {props.icon}
    </a>
}