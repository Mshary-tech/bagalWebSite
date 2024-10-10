import React from "react";
import Logo from "../Assets/icon/bagala-logo.png"
import MenuB from "../Assets/icon/sand.svg"
import x from "../Assets/icon/x.svg"
export default  function Nav(){
    const [display , setDisplay] = React.useState('none')

    return <nav className="nav">
                    <a className="bagala-logo" href="snakex.ai"> <img width={'50px'} height={'50px'} src={Logo} alt="bagala logo"></img></a>
                    <li className="nav-menu">
                        <i className="nav-menu-item">الأخبار</i>
                        <i className="nav-menu-item">اعرف عنا</i>
                        <i className="nav-menu-item">منتجاتنا</i>
                    </li>
                    <div className="nav-contact">
                        <a href="#" className="contact-btn">تواصل معنا</a>
                        <img onClick={() =>{
                            if(display == 'flex')setDisplay('none');
                            else setDisplay('flex');
                        }} className="menu-btn" width={'50px'} height={'50px'}  src={display == 'none' ? MenuB : x} alt="menu btn"></img>
                    </div>
                    <div className="nav-menu-iphone" style={{display :display}}>
                        <a className="nav-item-iphone">الأخبار</a>
                        <a className="nav-item-iphone">اعرف عنا</a>
                        <a className="nav-item-iphone">تواصل معنا</a>
                    </div>
            </nav>
}