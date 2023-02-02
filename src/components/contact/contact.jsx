import React from "react";
import cv from "./LuisAcosta_CV.pdf"
import QR from './QR_WP_LuisAcosta.jpg'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import './contact.css';

export default function Contact(){
    return(
        <div className="contactContainer">
            <div>
                <h1>
                    Necesitas una mano con tu página web?<br/> 
                    ¡Trabajemos juntos!
                </h1>
                <h3>
                    Siempre estoy buscando nuevos desafios y me encuentro abierto a propuestas que 
                    se adapten a mi perfil o que me den la oportunidad de aprender 
                    a utilizar otras herramientas
                </h3>
            </div>
            <div>

            </div>
            <div className="contactSubcontainer">
                <a className="cv_button" href={cv} download="Luis Acosta CV">
                    Descarga mi curriculum
                </a>
            </div>
            <div>
                <h3>
                    Visita algunos de mis perfiles
                </h3>
                <div className="logoContainer">
                    <a className="linkedinLogo" 
                        href="https://www.linkedin.com/in/react-front/" 
                        target="_blank"
                    >
                        <BsLinkedin/>
                    </a>
                    <a className="linkedinLogo" 
                        href="https://www.github.com/LuisAcosta13/" 
                        target="_blank"
                    >
                        <BsGithub/>
                    </a>   
                </div>   
            </div>
            <div>
                <h3>
                    O escanea el siguiente QR con tu celular
                </h3>
                <img className='img_QR' src={QR} alt='Mi QR de WhatsApp'/>
            </div>
        </div>
    )
}