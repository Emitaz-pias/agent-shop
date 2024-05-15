import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const  SubmitForm = ()=> {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const [value, setValue] = React.useState('telegram');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel id="demo-radio-buttons-group-label">Name</FormLabel>
      < TextField id="outlined-basic"  variant="outlined" placeholder="Your name" {...register("Your name", {required: true})} /><br/>
      <TextField id="outlined-basic"  variant="outlined" placeholder="Country" {...register("Country", {required: true})} /><br/>
      <TextField id="outlined-basic"  variant="outlined" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} /><br/>
      <TextField id="outlined-basic"  variant="outlined" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} /><br/>
      <FormControl>
  <RadioGroup
    row
    aria-labelledby="demo-radio-buttons-group-label"
    name="radio-buttons-group"
    value={value}
    onChange={handleChange}
  >
    <FormControlLabel value="telegram" control={<Radio />} label="Telegram" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl><br/>
<TextField id="outlined-basic"  variant="outlined" placeholder="Nickname" {...register("Nickname", {required: true})} /><br/>
      <input type="submit" />
    </form>
  );
}
export default SubmitForm;