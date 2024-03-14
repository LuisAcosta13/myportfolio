import React from "react";
import cv from "./Luis_Acosta_Resume_2024.pdf"
import QR from './QR_WP_LuisAcosta.jpg'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import './contact.css';

export default function Contact(){
    return(
        <div className="contactContainer">
            <div>
                <h1>
                    Need a hand with your website?<br/> 
                    Let's work together!
                </h1>
                <h3>
                    I'm always looking for new challenges and open to proposals that 
                    align with my profile or give me the opportunity to learn 
                    how to use other tools.
                </h3>
            </div>
            <div>

            </div>
            <div className="contactSubcontainer">
                <a className="cv_button" href={cv} download="Luis Acosta CV">
                    Download my resume
                </a>
            </div>
            <div>
                <h3>
                    Here are some of my websites for you to visit
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
                    You can also scan this QR to contact me
                </h3>
                <img className='img_QR' src={QR} alt='Mi QR de WhatsApp'/>
            </div>
        </div>
    )
}