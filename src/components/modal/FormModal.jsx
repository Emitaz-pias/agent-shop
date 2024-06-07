import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { AppContext } from '../../AppContext';
import SubmitForm from '../../pages/home/SubmitForm';
import { Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '48%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start', // Center the content horizontally
  bgcolor: '#212121',
  padding: '2em', // Decreased padding for better mobile display
  borderRadius: '1em',
};

export default function BasicModal({ open, handleClose }) {
  const { success, language } = React.useContext(AppContext);
  const translations = require(`../../translations/${language.toLowerCase()}.json`);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
        <CloseIcon sx={{ fontSize: 40, color: 'gray', cursor: 'pointer', marginTop: '1em', }} onClick={handleClose} />
          {success ? (
            <Box sx={{width:{xs:'85vw'}}}>
              <h2>{translations.homepage.thanks}</h2>
              <p>{translations.homepage.modalPara}</p>
            </Box>
          ) : (
            <Grid container spacing={2} justifyContent="center">
              <Grid item lg={12} md={12} xs={12}>
                <SubmitForm />
              </Grid>
            </Grid>
          )}
        </Box>
      </Modal>
    </div>
  );
}
