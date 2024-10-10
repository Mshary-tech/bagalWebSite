import React from "react";
import Nav from "./nav";
import Hero from "./hero";

export default function Header(){
    return <div className="header">
            <Nav></Nav>
            <Hero></Hero>
    </div>
}