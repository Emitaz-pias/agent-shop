import { Box, Button, Container, Grid } from '@mui/material';
import React from 'react';
import './Homepage.css'
import firstImm from '../../images/img.png'
import { pointsArray } from './pointsArry';

const Homepage = () => {
    return (
    <div>
          <Container sx={{display:'inline-flex',alignItems:'center', flexWrap:{sm:'wrap-reverse',lg:'nowrap',xs:"wrap-reverse"}}}>
            <Grid lg={2} md={6} sm={4}xs={4}>
                <Box className='first-screen__title' component='h1'>
                Make money with MelBet TeamCash!
                </Box>
                <Box component='p' sx={{fontWeight:'bolder'}}>
                PARTNERING UP WITH AN INTERNATIONAL BOOKMAKER IS INCREDIBLY REWARDING. ACCEPT FUNDS, TOP UP ACCOUNTS, MAKE WITHDRAWALS FOR CUSTOMERS OR CREATE YOUR VERY OWN AGENT NETWORK AND EARN COMMISSION!
                </Box>
                <Button sx={{
                marginRight:'2em',
                backgroundColor: '#FEBD02',
                borderRadius: '3px',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '21px',
                textAlign: 'center',
                textTransform: 'uppercase',
                color: '#000000',
                textShadow: '0 2px 0 #FFCF44',
                height:'1em',
                margin:'0.8em',
                padding:'1em'          
              }}>BECOME AN AGENT</Button>
            </Grid>
            <Grid  lg={10} md={6} sm={10}xs={10}>
                <img  src={firstImm} alt="asd" />
            </Grid>
          </Container>
          <Container>
              {pointsArray.map((point )=>
               <Box sx={{display:'inline-flex'}}>
                <Box>
                <Box component={'img'} src={point.image}></Box></Box></Box>
              )}
          </Container>
            
        </div>
    );
};

export default Homepage;