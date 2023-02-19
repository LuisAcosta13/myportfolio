import React from "react";
import ReviewCard from './reviewCard.jsx'
import './reviews.css'

export default function Reviews(){

    const reviews = [
        {
            name: 'Rosibel Mendoza',
            rol: 'Desarrollador FullStack',
            opinion: 'Responsable, meticuloso, respetuoso y muy profesional, siempre buscar dar lo mejor de si e impulsa su entorno a seguir el mismo estándar. Sus aptitudes le permiten liderar un equipo sin que esto implique que siempre debe estar a la cabeza. Siempre busca aprender cosas nuevas y comparte sus conocimientos con sus compañeros.'
        },
        {
            name: 'Alejandro Morales',
            rol: 'Desarrollador FullStack',
            opinion: 'Es una persona muy capacitada y dedicada en sus tareas, mantiene un nivel alto de exigencia sobre su trabajo y está siempre dispuesto a contribuir en la solución de problemas de otros compañeros. personalmente valoro su entusiasmo, creatividad al momento de realizar un trabajo.'
        },
        {
            name: 'Bernardo Broscheit',
            rol: 'Desarrollador FullStack',
            opinion: 'Trabaje con Luis a lo largo del Bootcamp Soy Henry y durante la cursada siempre demostro ser compañero, divertido, creativo y con ganas de aprender nuevas herramientas. Su curiosidad, pro actividad y poder de adaptacion fueron claves tambien para encarar los desafios del proyecto final. No tengo dudas que puede manejarse muy bien en un entorno laboral y aportar muchas habilidades mas.'
        },
        {
            name: 'Bárbara Miranda',
            rol: 'Estudiante de FullStack',
            opinion: 'Tuve el placer de transitar mi cursada de soyHenry con Luis, quien fue mi teacher Assistant. Destacado por la paciencia, la contención, el positivismo y un gran developer web que siempre supo responder a nuestras dudas!'
        },
        {
            name: 'José Carlos Mestre',
            rol: 'Estudiante de FullStack',
            opinion: 'Nos conocimos en SoyHenry. Su ayuda como TA fue excelente. Es un gran ser humano. Nos apoyo, a mis compañeros y a mi, tanto en respaldo emocional como en ayudas técnicas.'
        },
        {
            name: 'José Carlos Mestre',
            rol: 'Estudiante de FullStack',
            opinion: 'Nos conocimos en SoyHenry. Su ayuda como TA fue excelente. Es un gran ser humano. Nos apoyo, a mis compañeros y a mi, tanto en respaldo emocional como en ayudas técnicas.'
        },
        {
            name: 'José Carlos Mestre',
            rol: 'Estudiante de FullStack',
            opinion: 'Durante la cursada de Henry, Luis fue mi TA, demostrando grandes dotes de líder, con amplios conocimientos en desarrollo Full Stack, con un excelente trato y disposición con todos, y siempre dispuesto a dar una mano a quien lo necesitara.'
        }
    ]

    return(
        <div className="reviewsContainer">
            <h1>
                No me creas a mi, esto es lo que dicen los demás...
            </h1>
            <div className="reviewsSubcontainer">
                {reviews.map((rev) => 
                    <ReviewCard name={rev.name} rol={rev.rol} opinion={rev.opinion}/>    
                )}
            </div>
        </div>
    )
}