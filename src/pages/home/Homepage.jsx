import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import './Homepage.css'
import firstImm from '../../images/img.png'

const Homepage = () => {
    return (
    <div>
          <Container sx={{display:'inline-flex',alignItems:'center', flexWrap:{sm:'wrap-reverse',lg:'nowrap',xs:"wrap-reverse"}}}>
            <Grid lg={6} md={6} sm={10}xs={10}>
                <Box className='first-screen__title' component='h1'>
                Make money with MelBet TeamCash!
                </Box>
            </Grid>
            <Grid lg={6} md={6} sm={10}xs={10}>
                <img style={{width:'100%'}} src={firstImm} alt="asd" />
            </Grid>
          </Container>
            
        </div>
    );
};

export default Homepage;