import React from "react";
import ReviewCard from './reviewCard.jsx'
import './reviews.css'

export default function Reviews(){

    const reviews = [
        {
            name: 'Daniel Henderson',
            rol: 'Digital Creation & Optimization Expert - data.ai',
            opinion: 'Luis was a wonderful partner in our website management at data.ai. He had a very ambitious personality and a great sense of urgency to projects with quick deadlines. I could always rely on Luis to be responsive and quick to take action. When given proper details, Luis could run with website tickets on his own without extensive guidance. It was a pleasure working with Luis and I highly recommend him not just for the skills he has but for his attitude and dedication he gives to his work.'
        },
        {
            name: 'Rosibel Mendoza',
            rol: 'FullStack Developer at SoyHenry Bootcamp',
            opinion: "Respectful, responsible, perfectionist and very professional, he's always looking foward to give his best and encourages his environment to follow the leed. His skills allow him to lead a team but he also works fine following comand. He always seeks to learn new things and shares his knowledge with his peers. Definetly he's a must have in any team."
        },
        {
            name: 'Alejandro Morales',
            rol: 'FullStack Developer at SoyHenry Bootcamp',
            opinion: 'Es una persona muy capacitada y dedicada en sus tareas, mantiene un nivel alto de exigencia sobre su trabajo y está siempre dispuesto a contribuir en la solución de problemas de otros compañeros. personalmente valoro su entusiasmo, creatividad al momento de realizar un trabajo.'
        },
        {
            name: 'Bernardo Broscheit',
            rol: 'FullStack Developer at SoyHenry Bootcamp',
            opinion: 'Trabaje con Luis a lo largo del Bootcamp Soy Henry y durante la cursada siempre demostro ser compañero, divertido, creativo y con ganas de aprender nuevas herramientas. Su curiosidad, pro actividad y poder de adaptacion fueron claves tambien para encarar los desafios del proyecto final. No tengo dudas que puede manejarse muy bien en un entorno laboral y aportar muchas habilidades mas.'
        },
        {
            name: 'Bárbara Miranda',
            rol: 'FullStack Developer Student at SoyHenry Bootcamp',
            opinion: 'Tuve el placer de transitar mi cursada de soyHenry con Luis, quien fue mi teacher Assistant. Destacado por la paciencia, la contención, el positivismo y un gran developer web que siempre supo responder a nuestras dudas!'
        },
        {
            name: 'José Carlos Mestre',
            rol: 'FullStack Developer Student at SoyHenry Bootcamp',
            opinion: 'Nos conocimos en SoyHenry. Su ayuda como TA fue excelente. Es un gran ser humano. Nos apoyo, a mis compañeros y a mi, tanto en respaldo emocional como en ayudas técnicas.'
        },
        {
            name: 'Claudio Di Toro',
            rol: 'FullStack Developer Student at SoyHenry Bootcamp',
            opinion: 'Durante la cursada de Henry, Luis fue mi TA, demostrando grandes dotes de líder, con amplios conocimientos en desarrollo Full Stack, con un excelente trato y disposición con todos, y siempre dispuesto a dar una mano a quien lo necesitara.'
        }
    ]

    return(
        <div className="reviewsContainer">
            <h1>
                People I've worked with have something to say...
            </h1>
            <div className="reviewsSubcontainer">
                {reviews.map((rev) => 
                    <ReviewCard name={rev.name} rol={rev.rol} opinion={rev.opinion}/>    
                )}
            </div>
        </div>
    )
}