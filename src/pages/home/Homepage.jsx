import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import './Homepage.css'
import firstImm from '../../images/img.png'
import manStanding from '../../images/manStanding.png'
import epos from '../../images/epos.png'
import coinHands from '../../images/coinHands.png'
import submitApplication from '../../images/submitApplication.png'
import website from '../../images/website.png'
import email from '../../images/email.png'
import logo from '../../images/logo.png'
import './SubmitForm'
import { pointsArray } from './pointsArry';
import SubmitForm from './SubmitForm'
import { useRef } from 'react';



const Homepage = () => {
  const aboutUsRef = useRef(null);
  const collaborationRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Grid container sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexWrap: { sm: 'wrap-reverse', lg: 'nowrap', md: 'nowrap', xs: "wrap-reverse" } }}>
        <Grid padding={'0.5em'} item lg={6} md={12} xs={12} >
          <Box className='first-screen__title' component='h1'>
            Make money with MelBet TeamCash!
          </Box>
          <Box component='p' sx={{ fontWeight: 'bolder' }}>
            PARTNERING UP WITH AN INTERNATIONAL BOOKMAKER IS INCREDIBLY REWARDING. ACCEPT FUNDS, TOP UP ACCOUNTS, MAKE WITHDRAWALS FOR CUSTOMERS OR CREATE YOUR VERY OWN AGENT NETWORK AND EARN COMMISSION!
          </Box>
          <Button className="becomeAgentBttton" sx={{
            marginRight: '2em',
            backgroundColor: '#FEBD02',
            borderRadius: '3px',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '21px',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#000000',
            textShadow: '0 2px 0 #FFCF44',
            height: '1em',
            margin: '0.8em',
            padding: '1em'
          }}>BECOME AN AGENT</Button>

        </Grid>
        <Grid padding={'0.5em'} item lg={6} md={12} xs={12} >
          <Box component='img' sx={{ width: { xs: '100%', lg: '70%', md: '75%' } }} src={firstImm}></Box>
        </Grid>
      </Grid>
      <Grid container justifyContent={'space-around'} textAlign={'center'} alignItems='center'>
        {pointsArray.map(point =>
          <Grid item lg={2} xs={10} md={6} >
            <Box component='img' sx={{ width: { lg: '30%', xs: '40%' } }} src={point.image} alt={point.title} />
            <Box component='h3' sx={{ fontWeight: 'bold', textAlign: 'center' }}>{point.title}</Box>
          </Grid>
        )}
      </Grid>
      <Grid container sx={{ marginTop: '1em', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexWrap: { sm: 'wrap-reverse', lg: 'nowrap', md: 'nowrap', xs: "wrap" } }}>
        <Grid padding={'0.5em'} item lg={6} md={12} xs={12} >
          <Box component='img' sx={{ width: { xs: '100%', lg: '70%', md: '75%' } }} src={manStanding}></Box>
        </Grid>
        <Grid id='aboutUs' ref={aboutUsRef} padding={'0.5em'} item lg={6} md={12} xs={12} >
          <Box className='first-screen__title' component='h1'>
            WHAT IS A MELBET AGENT?
          </Box>
          <Box component='p' sx={{ fontWeight: 'bolder' }}>A Melbet agent is someone who works online/offline and earns commission for bringing in new customers and helping them make deposits/withdrawals from their account.</Box>
          <Box component='p' sx={{ fontWeight: 'bolder' }}>With Melbet continuing to expand globally each year, why not join our international team? If you’d like to earn more, you could even set up your own agent network.</Box>
          <Box component='p' sx={{ fontWeight: 'bolder' }}>The more agents in your network, the larger your income! You can start earning with Melbet today. Submit an application on our website and we’ll soon be in touch!</Box>
          <Button className="becomeAgentBttton" sx={{
            marginRight: '2em',
            backgroundColor: '#FEBD02',
            borderRadius: '3px',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '21px',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#000000',
            textShadow: '0 2px 0 #FFCF44',
            height: '1em',
            margin: '0.8em',
            padding: '1em'
          }}>START EARNING</Button>

        </Grid>
      </Grid>
      <Grid container sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexWrap: { sm: 'wrap-reverse', lg: 'nowrap', md: 'nowrap', xs: "wrap-reverse" } }}>
        <Grid padding={'0.5em'} item lg={6} md={12} xs={12} >
          <Box className='first-screen__title' component='h1'>
            MOBILE EPOS
          </Box>
          <Box component='p' sx={{ fontWeight: 'bolder' }}>
            For smooth operation and workflow, we have developed a convenient Android app available in several languages. Thanks to the app’s simple interface, you’ll be able to create your very own agent network and boost your income.
            <br />
            You can use our app to:
            <ul>
              <li>Accept deposits and top up customers’ accounts</li>
              <li>Credit winnings online or in cash</li>
              <li>Set up your own agent network in your regio</li>
              <li>Expand your business to another country and bring in new customers</li>
            </ul>
          </Box>
        </Grid>
        <Grid padding={'0.5em'} item lg={6} md={12} xs={12} >
          <Box component='img' sx={{ width: { xs: '100%', lg: '70%', md: '75%' } }} src={epos}></Box>
        </Grid>
      </Grid>
      <Grid id='collaboration' ref={collaborationRef} container sx={{ marginTop: '1em', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexWrap: { sm: 'wrap-reverse', lg: 'nowrap', md: 'nowrap', xs: "wrap" } }}>
        <Grid padding={'0.5em'} item lg={6} md={12} xs={12} >
          <Box component='img' sx={{ width: { xs: '100%', lg: '70%', md: '75%' } }} src={coinHands}></Box>
        </Grid>
        <Grid padding={'0.5em'} item lg={6} md={12} xs={12} >
          <Box className='first-screen__title' component='h1'>
            HOW CAN I BECOME A MELBET AGENT?
          </Box>
          <ol style={{ color: '#FEBD02', fontWeight: 'bolder' }}>
            <li>
              <h3>OBTAIN AGENT STATUS</h3>
              <p style={{ color: 'white' }}>Once you've completed verification, the bookmaker will grant you agent status.</p>
            </li>
            <li>
              <h3>LOG IN AND MAKE YOUR FIRST DEPOSIT</h3>
              <p style={{ color: 'white' }}>Once you've logged in, you'll need to verify your identity on the MelBet website. You'll then get access to your own agent balance, which you'll use to top up customers' accounts.</p>
            </li>
            <li>
              <h3>DOWNLOAD AND INSTALL THE APP</h3>
              <p style={{ color: 'white' }}>Your manager will send you a link which you can use to download the mobile app. Please make sure that your phone's operating system is no older than the Android 4.4 version before installing the app.</p>
            </li>
            <li>
              <h3>START CHATTING WITH PLAYERS</h3>
              <p style={{ color: 'white' }}>Make sure that they have a MelBet account.</p>
            </li>
            <li>
              <h3>HELP PLAYERS MAKE QUICK DEPOSITS</h3>
              <p style={{ color: 'white' }}>You'll be able to top up customers' accounts quickly and easily. Use the deposits in your account to transfer funds from your agent account to customers' accounts.
              </p>
            </li>
            <li>
              <h3>EARN COMMISSION</h3>
              <span style={{ color: 'white' }}>Earn between 3-5% comission on deposits and 2% on withdrawals. Your total earnings will depend on the specifics of your region and other parameters. You'll gain access to additional information once you fill in all of your details.</span>
            </li>
          </ol>

        </Grid>
      </Grid>
      <Grid id='contact' ref={contactRef} container marginBottom={'6em'} >
        <Grid textAlign={'center'} marginTop={'1em'} item lg={6} xs={12} >
          <h1 className='first-screen__title'>Contact Information</h1>
          <ul>
            <li style={{ listStyle: 'none', padding: '1em' }} ><Box sx={{ display: 'flex', alignItems: 'center' }}> <Box component='img' sx={{ width:{lg:'5%',xs:'10%'} }} src={website}></Box><Box component="p" sx={{ margin: '1em' }}> <u>melbet.com</u></Box></Box></li>
            <li style={{ listStyle: 'none', padding: '1em' }} ><Box sx={{ display: 'flex',alignItems: 'center' }}><Box component='img' sx={{ width:{lg:'5%',xs:'10%'},height:{lg:'6%',xs:'9%'} }} src={email}></Box> <Box component="p" sx={{ margin: '1em' }}><u>support@melbet.com</u> </Box></Box> </li>
          </ul>       
          <Box   component="img" src={submitApplication} sx={{ width: '100%', marginTop:{lg:'-12em'},marginLeft:{lg:'4em'}}} />                          
        </Grid>
        
        <Grid item sx={{marginLeft:{lg:'6em'}}} lg={5} xs={12} md={8} >
          <Box className='first-screen__title' component='h1'>
            submit an application
          </Box>
          <Box>
           <SubmitForm></SubmitForm>
          </Box>
               
        </Grid>
    
         <Box sx={{ display: 'inline-flex', marginTop:{lg:'-7em'},justifyContent:{lg:'space-around',xs:'center'},alignItems:'center',flexWrap:{lg:'nowrap',xs:'wrap'} }}>
            <Box component='img' sx={{ width:{lg:'25%',xs:'30%'} }} src={logo}></Box>
             <Box  component="p" sx={{ margin: '1em',textAlign:'center' }}>
            Copyright © 2012-2024 «MelBet». <br />
            All rights are reserved and protected by law.</Box>
            </Box>         
      </Grid>

    </div>
  );
};

export default Homepage;