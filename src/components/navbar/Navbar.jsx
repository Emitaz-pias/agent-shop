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
  const [,setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  
  // const isMenuOpen = Boolean(anchorEl);
  // console.log(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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
    <Box sx={{padding:'0.1em'}} onClick={handleMenuClose}><CloseIcon/></Box>
    <MenuItem >
        <Link style={{textDecoration:"none",color:'black'}} to ='/about-us'>
          About Us
        </Link>
    </MenuItem>
    <MenuItem>

      <Link style={{textDecoration:"none",color:'black'}} to ='/accessories'>
      Accessories
      </Link>

    </MenuItem>
    <MenuItem>

      <Link style={{textDecoration:"none",color:'black'}} to='/agro'>Agro</Link>

    </MenuItem>
    <MenuItem>

      <Link style={{textDecoration:"none",color:'black'}} to='/IT'>IT</Link>

    </MenuItem>
    <MenuItem>
      <Link style={{textDecoration:"none" ,color:'black'}} to='/garments'>Garments</Link>  
    </MenuItem>
    <MenuItem>
      <Link style={{textDecoration:"none" ,color:'black'}} to='/blog'>Blog</Link>  
    </MenuItem>
  </Menu>
);

  return (
    <React.Fragment>
    <CssBaseline />
    <ElevationScroll {...props}>
      <AppBar>
        <Toolbar>
        <IconButton
              size="large"
              edge="start"
              aria-label="open drawer"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              sx={{ mr:0.5 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h3"
              component="div"
            >
              <Link style={{textDecoration:"none" ,color:'black'}} to='/'>
              <Box component={'img'} sx={{ width:{xs:'2em',lg:'2.8em'},paddingTop:{lg:'0.1em'}}} src={logo} alt="logo" />
              </Link>
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex',color:'grey' } }}>
              <MenuItem>     <Link style={{textDecoration:"none",color:'white'}} to='/accessories'>Accessories</Link>   </MenuItem>
              <MenuItem >    <Link  style={{textDecoration:"none",color:'white'}} to='/about-us'>About Us</Link>   </MenuItem>
              <MenuItem>    <Link style={{textDecoration:"none",color:'white'}} to='/agro'>Agro</Link>    </MenuItem>             
              <MenuItem>    <Link style={{textDecoration:"none",color:'white'}} to='/IT'>IT</Link>  </MenuItem>
              <MenuItem>   <Link  style={{textDecoration:"none",color:'white'}}to='/garments'>Garments</Link>   </MenuItem>
              <MenuItem>  <Link style={{textDecoration:"none" ,color:'white'}} to='/blog'>Blog</Link></MenuItem>
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