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
import cvba from './CVBA.png'
import './projects.css'

export default function Projects() {

    const projects = [
        {
            name: 'Camerata Vocalis Buenos Aires',
            description: "This website shows Camerata Vocalis work and it's story. You can also read and take a listen to their repertory, access their YouTube channel and see future concerts dates.",
            img: cvba
        },
        {
            name: 'My Wapp',
            description: 'My Wapp is a WhatsApp Web clone built with React and TypeScript.',
            img: mywapp
        },
        {
            name: 'HenryMarket',
            description: 'HenryMarket is an e-commerce platform for selling grocery products, created as the final project for the SoyHenry bootcamp in collaboration with seven other students from Argentina, Venezuela, and Colombia. During its development, I was responsible for coordinating UI/UX design and overseeing the work of each team member. Additionally, I actively contributed to the development of most of the components visible on the screen. The technologies used included JavaScript, React.js, Redux, Material UI, Node.js, Express.js, SQL, PostgreSQL, and Sequelize.',
            img: henryMarket
        },
        {
            name: 'LuishiGames',
            description: 'LuishiGames is a video game search engine that draws data from the Rawg.io API. I developed it as an individual project during the SoyHenry bootcamp. Throughout this project, I put all my skills as a Front-End and Back-End developer to the test, utilizing JavaScript, React.js, Redux, Node.js, Express.js, SQL, PostgreSQL, and Sequelize.',
            img: luishiGames
        },
        {
            name: 'Rick & Morty Database',
            description: 'This is my first frontend project built with React.js. It allows you to browse a list of all the characters that appeared in the Rick and Morty series and access the details of each one.',
            img: rickAndMorty
        }
    ];

    return (
        <div className='projects_container'>
            <h1 className='projectsTitle'>Take a look at my projects</h1>
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