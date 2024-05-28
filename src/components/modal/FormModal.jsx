import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SubmitForm from '../../pages/home/SubmitForm';
import CloseIcon from '@mui/icons-material/Close';
import { JoinFull } from '@mui/icons-material';
import { AppContext } from '../../AppContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:'60vw',
  display:'flex',
  justifyContent: 'center',
  bgcolor: '#212121',
  padding:'4em 0em',
  borderRadius:'1em'
  
};

export default function BasicModal({ open, handleClose}) {
  
  const {success,setSuccess,language} = React.useContext(AppContext);  
  const translations = require(`../../translations/${language.toLowerCase()}.json`);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
       {success? <Box><h1 className='first-screen__title'>{translations.homepage.thanks}</h1><Box color={'grey'} component={'p'}>{translations.homepage.modalPara}</Box></Box>
       : <Box><SubmitForm/></Box>}
        <Box sx={{paddingLeft:'5em',marginTop:"-3em"}}><CloseIcon sx={{ fontSize: 60 ,color:'gray'}}  onClick={handleClose}/></Box>       
        </Box>
      </Modal>
    </div>
  );
}
