import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import { Button } from '@mui/material';
import ReactFlagsSelect from 'react-flags-select';

import './Navbar.css'
function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  const appBarStyles = {
    backgroundColor: trigger ? 'black' : 'inherit',
    transition: 'background-color 0.8s',
  };
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: appBarStyles,
  });
}

const Navbar = (props) => {
  const [, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [select, setSelect] = useState("GB");
  const onSelect = (code) => setSelect(code);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);

  };
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Box sx={{ padding: '0.1em' }} onClick={handleMenuClose}><CloseIcon /></Box>

    </Menu>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar >
          <Toolbar sx={{display:'flex',alignItems:'start',textAlign:'center',justifyContent:'space-around'}}>
            <IconButton
              size="large"
              edge="start"
              aria-label="open drawer"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              sx={{
                display: {
                    lg: 'none',
                    md:'none',
                    xs:'block'}
            }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h3"
              component="div"
            >
              <Link style={{ textDecoration: "none", color: 'black' }} to='/'>
            <Box component={'img'} sx={{ width: { xs: '2em', lg: '2.8em' }, paddingTop: { lg: '0.1em' } }} src={logo} alt="logo" />
              </Link>
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex', color: 'grey' } }}>
              <MenuItem>     <Link style={{ textDecoration: "none", color: 'white', fontStyle: 'italic', fontSize: '1em',fontWeight:'bold' }} to='/accessories'>ABOUT US</Link>   </MenuItem>
              <MenuItem >    <Link style={{ textDecoration: "none", color: 'white', fontStyle: 'italic', fontSize: '1em',fontWeight:'bold' }} to='/about-us'>COLLABORATION</Link>   </MenuItem>
              <MenuItem>    <Link style={{ textDecoration: "none", color: 'white', fontStyle: 'italic', fontSize: '1em',fontWeight:'bold' }} to='/agro'>CONTACTS</Link>    </MenuItem>
              <MenuItem className="becomeAgentBttton" sx={{
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
              }}> BECOME AN AGENT</MenuItem>
              <MenuItem>
                <ReactFlagsSelect
                  selected={select}
                  onSelect={onSelect}
                  countries={["GB", "FR", "es", "ES", "pt", "PT", "zh", "CN", "ja", "JP", "th", "TH", "ru", "RU", "az", "AZ", "ar", "AR", "kr", "KR", "my", "MY"]}
                  customLabels={{
                    GB: "EN", FR: "FR", es: "es", ES: "ES", pt: "pt", PT: "PT", CN: "ZH", ZH: "ZH", JP: "JA", JA: "JA", th: "TH", TH: "TH", ru: "RU", RU: "RU", az: "AZ", AZ: "AZ", ar: "AR", AR: "AR", kr: "KR", KR: "KR", my: "MY", MY: "MY"
                  }}
                  selectedSize={15}
                  optionsSize={15} />
              </MenuItem>

            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      {renderMobileMenu}
    </React.Fragment>
  );
};

export default Navbar;