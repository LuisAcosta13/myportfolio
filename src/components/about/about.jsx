import React from "react";
import Henry_Certificate from './henry_certificate.png'
import efset_certificate from './efset_certificate.png'
import came_certificate from './came_certificate.png'
import esi_certificate from './esi_certificate.png'
import './about.css'

export default function About(){
    return(
        <div className="about_container">
            <div className="about_subcontainer">

                <h3 className="about_subtitle">🥇 ¿Por qué yo?</h3>
                Conmigo obtendrás una persona responsable con gran capacidad de liderazgo 
                y empatía, trabajo en equipo, resolución de problemas, creatividad 
                y con muchas ganas de aprender de, y guiar a otros.

                <h3 className="about_subtitle">📝 ¿Quién soy?</h3>
                Soy un Full Stack Developer con orientación en Front End.<br/>
                Ex estudiante de medicina, ex soldado del Ejército Argentino y 
                apasionado por el canto, 
                comencé mi camino como desarrollador en Henry y me posicioné como 
                "Teaching Assistant" para devolverle a la comunidad 
                aquello que me dio.

                <h3 className="about_subtitle">📜 Certificaciones</h3>
                <div className="certifications">
                    <div data-toggle="tooltip" data-placement="bottom" title="Programación">
                    <p>Full Stack Web Developer</p> 
                        <img 
                        className='certificate_img' 
                        src={Henry_Certificate} 
                        alt='Certificado Henry'/>
                    </div>
                    <div data-toggle="tooltip" data-placement="bottom" title="Inglés"> 
                        <p>EF SET English Certificate</p>
                        <img 
                        className='certificate_img' 
                        src={efset_certificate} 
                        alt='Certificado EF SET'/>
                    </div>
                    <div data-toggle="tooltip" data-placement="bottom" title="Recursos humanos">
                        <p>Técnicas de selección RRHH</p>
                        <img 
                        className='certificate_img' 
                        src={came_certificate} 
                        alt='Certificado CAME'/>
                    </div>
                    <div data-toggle="tooltip" data-placement="bottom" title="Educación sexual integral">
                        <p>Diplomatura en ESI</p>
                        <img 
                        className='certificate_img' 
                        src={esi_certificate} 
                        alt='Certificado ESI'/>
                    </div>
                </div>
            </div>
        </div>
    )
}