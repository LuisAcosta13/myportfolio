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
                Hola, soy Luis.
            </div>
            <div className="title_subtext">
                Desarrollador Full Stack con orientación en Front End, me defino a mi mismo como un potencial líder.
            </div>
        </div>
    )
}