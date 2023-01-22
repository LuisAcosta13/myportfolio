import React from "react";
import About_short from "./about_short/about_short";
import Title from "./title/title";
import './home.css'
import Tools from "./tools/tools";

export default function Home(){
    return(
        <div className="home_container">
            <div className="title">
                <Title/>
            </div>
            <div className="about_short">
                <About_short/>
            </div>
            <div className="tools">
                <Tools/>
            </div>
        </div>
    )
}