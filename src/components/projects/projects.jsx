import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import luishiGames from './LuishiGames.png' 
import henryMarket from './HenryMarket.png' 
import rickAndMorty from './RickandMorty.png'
import mywapp from './Mywapp.png' 
import './projects.css'

export default function Projects() {

    const projects = [
        {
            name: 'My Wapp',
            description: 'My Wapp es un clon de WhatsApp Web realizado con React y Typescript.',
            img: mywapp
        },
        {
            name: 'HenryMarket',
            description: 'HenryMarket es una plataforma e-commerce para la venta de productos de supermercado hecha como proyecto final para el bootcamp SoyHenry junto a otros 7 alumnos de Argentina, Venezuela y Colombia. Durante su desarrollo estuve a cargo de coordinar el diseño UI/UX y el trabajo de cada integrante del equipo, a la vez que participé del desarrollo de la mayoría de los componentes que se visualizan en pantalla. Entre las herramientas usadas se encuentran Javascript, React.js, Redux, Material UI, Node.js, Express.js, SQL, PostgreSQL y Sequelize.',
            img: henryMarket
        },
        {
            name: 'LuishiGames',
            description: 'LuishiGames es un buscador de videojuegos que se alimenta de la api Rawg.io y fue desarrollada por mí como proyecto individual para el bootcamp SoyHenry.En este proyecto puse a prueba todas mis habilidades como Front-End y Back-End developer, utilizando javascript, React.js, Redux, Node.js, Express.js, SQL, PostgreSQL y Sequelize.',
            img: luishiGames
        },
        {
            name: 'Rick & Morty Database',
            description: 'Este es mi primer proyecto de frontend realizado con React.js. Permite navegar por una lista de todos los personajes que aparecieron en la serie de Ricky y Morty, y acceder al detalle de cada uno.',
            img: rickAndMorty
        }
    ];

    return (
        <div className='projects_container'>
            <h1 className='projectsTitle'>Un poco de mi trabajo</h1>
        {projects.map((project) =>
            <div className='projects_subcontainer'>
                <Card sx={{ width: '70%', display: 'flex', backgroundColor: '#171717' }}>
                    <Box sx={{ overflowY: 'scroll', display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5" sx={{ color: 'whitesmoke' }}>
                            {project.name}
                        </Typography>
                        <Typography sx={{ color: 'whitesmoke' }} component="div">
                            {project.description}
                        </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}/>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: '50%', objectFit: 'contain' }}
                        image={project.img}
                        alt={project.name}
                    />
                </Card>
            </div>
        )}</div>
    );
}