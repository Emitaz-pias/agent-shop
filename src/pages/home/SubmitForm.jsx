import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';


const  SubmitForm = ()=> {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <TextField   sx={{width:{lg:"30vw !important",xs:"80vw !important"},margin:'0em 1em'}} className='inps' placeholder="Your name"  required id="outlined-required"label="Name" {...register("Your name", {required: true})} /> <br />
      <TextField   sx={{width:{lg:"30vw !important",xs:"80vw !important"},margin:'0em 1em'}} className='inps'  required id="outlined-required"label="Country" placeholder="Country"  {...register("Country", {required: true})} /> <br />
      <TextField   sx={{width:{lg:"30vw !important",xs:"80vw !important"},margin:'0em 1em'}} className='inps'  required id="outlined-required"label="Email" placeholder="Your email"  {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} /> <br />
      <TextField   sx={{width:{lg:"30vw !important",xs:"80vw !important"},margin:'0em 1em'}} className='inps'  required id="outlined-required"label="Phone" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} /> <br />
      <FormControl>
      <RadioGroup
        row 
        sx={{width:{lg:"30vw !important",xs:"80vw !important"},margin:'0em 1em'}} className='inps'     
      >
        <FormControlLabel value="Telegram" control={<Radio />} label="Telegram" {...register("Telegram", { required: true })} /><br />
        <FormControlLabel value="Other" control={<Radio />} label="Other" {...register("Other", { required: true })} /><br />
      </RadioGroup>
    </FormControl> <br />    
      <TextField  sx={{width:{lg:"30vw !important",xs:"80vw !important"},margin:'0em 1em'}} className='inps' required id="outlined-required"label="Nick Name" placeholder="Nickname" {...register("Nickname", {required: true})} /><br />
      <Button type='submit' className='becomeAgentBttton' style={{
                backgroundColor: '#FEBD02',
                borderRadius: '3px',
                fontWeight: 'bolder',
                fontSize: '18px',
                lineHeight: '21px',
                textAlign: 'center',
                textTransform: 'uppercase',
                color: '#000000',
                textShadow: '0 2px 0 #FFCF44',
                height:'1em',
                margin:'0.8em',
                padding:'1em 7em'          
              }} value='send'>Send</Button>
    </form>
  );
}
export default SubmitForm;