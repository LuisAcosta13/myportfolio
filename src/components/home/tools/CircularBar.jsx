import * as React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './tools.css'

function CircularProgressBar(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', padding: '5%' }}>
      <CircularProgress sx={{ color: 'var(--main_color)'}} variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Tooltip title={props.title} placement='top-end'>
            <Typography component="span" sx={{ color: 'whitesmoke', paddingTop: '3.5%'}}>
              {props.icon}
            </Typography>
        </Tooltip>
      </Box>
    </Box>
  );
}

CircularProgressBar.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularBar(props) {
  const [progress, setProgress] = React.useState(0);

    window.addEventListener("scroll", () => {
    if(window.scrollY > 600){
      const timer = setInterval(() => {
          setProgress((prevProgress) => (prevProgress >= props.value ? props.value : prevProgress + 1));
        }, 100
      );
      return () => {
        clearInterval(timer);
      };
    };
    });

  return <CircularProgressBar value={progress} icon={props.icon} title={props.title}/>;
}