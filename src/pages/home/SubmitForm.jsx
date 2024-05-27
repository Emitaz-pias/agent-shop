import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';
import './SubmitForm.css';

const SubmitForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const [isTelegramChecked, setIsTelegramChecked] = useState(false);

  const handleRadioChange = (event) => {
    setIsTelegramChecked(event.target.value === 'Telegram');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        sx={{
          width: { lg: "30vw !important", xs: "80vw !important" },
          margin: '0em 1em',
          '& .MuiOutlinedInput-root': {
            '& .MuiInputBase-input': { color: 'gray' },
            '&.Mui-focused .MuiInputBase-input': { color: 'gray' },
          },
        }}
        className='inps'        
        id="outlined-required"
        label="Name"
        placeholder="Your name"
        {...register("name", { required: "Please fill out this field." })}
      />
      {errors.name && <span className="error-message">{errors.name.message}</span>}
      <br />

      <TextField
        sx={{
          width: { lg: "30vw !important", xs: "80vw !important" },
          margin: '0em 1em',
          '& .MuiOutlinedInput-root': {
            '& .MuiInputBase-input': { color: 'gray' },
            '&.Mui-focused .MuiInputBase-input': { color: 'gray' },
          },
        }}
        className='inps'
        
        id="outlined-required"
        label="Country"
        placeholder="Country"
        {...register("country", { required: "Please fill out this field." })}
      />
      {errors.country && <span className="error-message">{errors.country.message}</span>}
      <br />

      <TextField
        sx={{
          width: { lg: "30vw !important", xs: "80vw !important" },
          margin: '0em 1em',
          '& .MuiOutlinedInput-root': {
            '& .MuiInputBase-input': { color: 'gray' },
            '&.Mui-focused .MuiInputBase-input': { color: 'gray' },
          },
        }}
        className='inps'
        
        id="outlined-required"
        label="Email"
        placeholder="Your email"
        {...register("email", {
          required: "Please fill out this field.",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Please enter a valid email address.",
          },
        })}
      />
      {errors.email && <span className="error-message">{errors.email.message}</span>}
      <br />

      <TextField
        sx={{
          width: { lg: "30vw !important", xs: "80vw !important" },
          margin: '0em 1em',
          '& .MuiOutlinedInput-root': {
            '& .MuiInputBase-input': { color: 'gray' },
            '&.Mui-focused .MuiInputBase-input': { color: 'gray' },
          },
        }}
        className='inps'        
        id="outlined-required"
        label="Phone"
        placeholder="Mobile number"
        {...register("phone", {
          required: "Please fill out this field.",
          minLength: {
            value: 6,
            message: "Phone number must be at least 6 characters long.",
          },
          maxLength: {
            value: 12,
            message: "Phone number must be no longer than 12 characters.",
          },
          pattern: {
            value: /^\d+$/,
            message: "Please enter a valid phone number.",
          },
        })}
      />
      {errors.phone && <span className="error-message">{errors.phone.message}</span>}
      <br />

      <FormControl>
        <RadioGroup
          row
          sx={{ width: { lg: "30vw !important", xs: "80vw !important" }, margin: '0em 1em' }}
          className='inps'
          value={isTelegramChecked ? "Telegram" : "Other"}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value="Telegram"
            control={<Radio sx={{ '&.MuiButtonBase-root': { color: '#FEBD02 !important', '&.MuiRadio-root': { '&.Mui-checked': { color: '#FEBD02 !important' } } } }} />}
            label="Telegram"
            {...register("contactMethod", { required: true })}
          />
          <br />
          <FormControlLabel
            value="Other"
            control={<Radio sx={{ '&.MuiButtonBase-root': { color: '#FEBD02 !important', '&.MuiRadio-root': { '&.Mui-checked': { color: '#FEBD02 !important' } } } }} />}
            label="Other"
            {...register("contactMethod", { required: true })}
          />
          <br />
        </RadioGroup>
      </FormControl>
      <br />

      <TextField
        sx={{
          width: { lg: "30vw !important", xs: "80vw !important" },
          margin: '0em 1em',
          '& .MuiOutlinedInput-root': {
            '& .MuiInputBase-input': { color: 'gray' },
            '&.Mui-focused .MuiInputBase-input': { color: 'gray' },
          },
        }}
        className='inps'        
        id="outlined-required"
        label="Nickname"
        placeholder={isTelegramChecked ? "@" : ""}
        {...register("nickname", { required: "Please fill out this field." })}
      />
      {errors.nickname && <span className="error-message">{errors.nickname.message}</span>}
      <br />

      <Button
        type='submit'
        className='becomeAgentBttton'
        style={{
          backgroundColor: '#FEBD02',
          borderRadius: '3px',
          fontWeight: 'bolder',
          fontSize: '18px',
          lineHeight: '21px',
          textAlign: 'center',
          textTransform: 'uppercase',
          color: '#000000',
          textShadow: '0 2px 0 #FFCF44',
          height: '1em',
          margin: '0.8em',
          padding: '1em 7em',
        }}
      >
        Send
      </Button>
    </form>
  );
};

export default SubmitForm;
