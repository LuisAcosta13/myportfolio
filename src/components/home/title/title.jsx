import React from "react";
import img from './profile_img.jpeg'
import './title.css'

export default function Title(){
    return(
        <div className="title_container">
            <div>
            <img className="profile_img" src={img} alt="Foto de perfil"/>
            </div>
            <div className="title_text">
                Hello there! I'm Luis.
            </div>
            <div className="title_subtext">
                I'm a Frontend Developer and I enjoy creating and translating mock-ups into code!
            </div>
        </div>
    )
}