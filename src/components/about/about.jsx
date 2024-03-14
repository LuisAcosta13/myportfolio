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
                <h3 className="about_subtitle">📝 Who am I?</h3>
                I'm a Front End Developer working from Argentina for a french enterprise called Canari. 
                <br/>
                I have worked with international companies such as data.ai and McDonalds.

                <h3 className="about_subtitle">🥇 Why me?</h3>
                With me you will get an experienced, responsible and resorceful person 
                with great leadership and empathy skills, teamwork, problem solving, 
                creativity and a great desire to learn and guide others.

                <h3 className="about_subtitle">🚀 My experience</h3>
                My latest experience as a FrontEnd Dev allowed me to participate 
                in projects for american and french enterprises using my Javascript 
                and SASS knowledge, integrating my work with backend and design team.
                I worked with SCSS, JQuery, React, Next.js, Wordpress, php, Symfony 
                and SULU. I also had the chance to lead a migration team with 8 people, 
                working on details to clone a full online website from Wordpress to SULU.
                <br/>
                I led the creation of an E-commerce for the sale of supermarket products, 
                actively participating in the UI/UX design, integrating the work of the 
                entire team to achieve a completely integrated, intuitive and pleasant result.
                <br/>
                I studied as a Full Stack developer at Henry's bootcamp, perfecting my 
                Front-End and Back-End bases, acquiring knowledge in React.js, Redux, Node.js, 
                Express.js, PostgreSQL and Sequelize, and adding an excellent use of Javascript,
                 with its libraries and frameworks.

                <h3 className="about_subtitle">📜 Certifications</h3>
                <div className="certifications">
                    <div data-toggle="tooltip" data-placement="bottom" title="Programming">
                    <p>Full Stack Web Developer</p> 
                        <img 
                        className='certificate_img' 
                        src={Henry_Certificate} 
                        alt='Certificado Henry'/>
                    </div>
                    <div data-toggle="tooltip" data-placement="bottom" title="English"> 
                        <p>EF SET English Certificate</p>
                        <img 
                        className='certificate_img' 
                        src={efset_certificate} 
                        alt='Certificado EF SET'/>
                    </div>
                    <div data-toggle="tooltip" data-placement="bottom" title="Human Resources">
                        <p>Human Resources Techniques</p>
                        <img 
                        className='certificate_img' 
                        src={came_certificate} 
                        alt='Certificado CAME'/>
                    </div>
                    <div data-toggle="tooltip" data-placement="bottom" title="Comprehensive Sexual Education">
                        <p>CSE Diploma</p>
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