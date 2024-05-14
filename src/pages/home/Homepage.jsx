import { Box, Button, Container, Grid } from '@mui/material';
import React from 'react';
import './Homepage.css'
import firstImm from '../../images/img.png'
import { pointsArray } from './pointsArry';

const Homepage = () => {
    return (
    <div>
          <Grid container sx={{display:'inline-flex',alignItems:'center',justifyContent:'center', flexWrap:{sm:'wrap-reverse',lg:'nowrap',md:'nowrap',xs:"wrap-reverse"}}}>
            <Grid padding={'0.5em'} item lg={6} md={12}xs={12} >
            <Box className='first-screen__title' component='h1'>
                Make money with MelBet TeamCash!
                </Box>
                <Box component='p' sx={{fontWeight:'bolder'}}>
                PARTNERING UP WITH AN INTERNATIONAL BOOKMAKER IS INCREDIBLY REWARDING. ACCEPT FUNDS, TOP UP ACCOUNTS, MAKE WITHDRAWALS FOR CUSTOMERS OR CREATE YOUR VERY OWN AGENT NETWORK AND EARN COMMISSION!
                </Box>
                <Button className="becomeAgentBttton" sx={{
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
            <Grid padding={'0.5em'} item lg={6} md={12}xs={12} >
              <Box component='img' sx={{width:{xs:'100%',lg:'70%',md:'75%'}}} src={firstImm}></Box>
            </Grid>
          </Grid>
          <Grid container >

          </Grid>
        </div>
    );
};

export default Homepage;