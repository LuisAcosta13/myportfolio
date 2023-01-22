import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './reviews.css'

export default function ReviewCard({name, rol, opinion}) {

  return ( 
    <div className='reviewCard'>
        <Card sx={{ maxWidth: 345, backgroundColor: '#232323' }}>
            <CardHeader
                // avatar={
                //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                //     R
                //   </Avatar>
                // }
                // action={
                //   <IconButton aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButton>
                // }
                sx={{ color: 'whitesmoke' }}
                title={name}
                subheader={rol}
            />
            {/* <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
            /> */}
            <CardContent sx={{ minHeight: 200 }}>
                <Typography className='reviewText' variant="body2" sx={{ color: 'whitesmoke' }}>
                {opinion}
                </Typography>
            </CardContent>
        </Card>
    </div>
  );
}