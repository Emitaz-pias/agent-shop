import React from 'react';
import {
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';

const DepositForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [success, setSuccess] = React.useState(false); // State for form submission success

  const createSheetData = async (data) => {
    try {
      const response = await fetch('https://sheetdb.io/api/v1/dhuvkm64l71xl', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [
            {
              agentId: data.agentId,
              depositType: data.depositType,
              selectChain: data.selectChain,
              depositedAmount: data.depositedAmount,
              transactionId: data.transactionId,
            },
          ],
        }),
      });
      const result = await response.json();
      if (result.created === 1) {
        setSuccess(true);
        reset(); // Reset the form
      }
    } catch (error) {
      alert('An error occurred while submitting the form: ' + error.message);
    }
  };

  const onSubmit = (data) => {
    createSheetData(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ maxWidth: 400, mx: 'auto', p: 2 }}
    >
      <Typography variant="h6" align="center" sx={{ mb: 2 }}>
        Deposit Form
      </Typography>

      <TextField
        label="Agent User ID"
        placeholder="Client"
        variant="outlined"
        {...register('agentId', { required: 'Agent User ID is required' })}
        sx={{ mb: 2 }}
        error={!!errors.agentId}
        helperText={errors.agentId ? errors.agentId.message : ''}
      />

      <FormControl variant="outlined" fullWidth sx={{ mb: 2 }} error={!!errors.depositType}>
        <InputLabel>Type of Deposit</InputLabel>
        <Select
          label="Type of Deposit"
          {...register('depositType', { required: 'Deposit Type is required' })}
          defaultValue=""
        >
          <MenuItem value="1st payments">1st Payments</MenuItem>
          <MenuItem value="Regular deposit">Regular Deposit</MenuItem>
        </Select>
        {errors.depositType && (
          <Typography variant="caption" color="error">{errors.depositType.message}</Typography>
        )}
      </FormControl>

      <FormControl variant="outlined" fullWidth sx={{ mb: 2 }} error={!!errors.selectChain}>
        <InputLabel>Select Chain</InputLabel>
        <Select
          label="Select Chain"
          {...register('selectChain', { required: 'Select Chain is required' })}
          defaultValue=""
        >
          <MenuItem value="USDT (TRC 20)">USDT (TRC 20)</MenuItem>
          <MenuItem value="USDT (BEP 20)">USDT (BEP 20)</MenuItem>
          <MenuItem value="BTC">BTC</MenuItem>
          <MenuItem value="ETH">ETH</MenuItem>
        </Select>
        {errors.selectChain && (
          <Typography variant="caption" color="error">{errors.selectChain.message}</Typography>
        )}
      </FormControl>

      <TextField
        label="Deposited Amount"
        placeholder="Amount"
        variant="outlined"
        {...register('depositedAmount', { required: 'Deposited Amount is required' })}
        sx={{ mb: 2 }}
        error={!!errors.depositedAmount}
        helperText={errors.depositedAmount ? errors.depositedAmount.message : ''}
      />

      <TextField
        label="Transaction ID/User ID"
        placeholder="ID"
        variant="outlined"
        {...register('transactionId', { required: 'Transaction ID/User ID is required' })}
        sx={{ mb: 2 }}
        error={!!errors.transactionId}
        helperText={errors.transactionId ? errors.transactionId.message : ''}
      />

      <Button variant="contained" type="submit" color="primary" fullWidth>
        Submit
      </Button>

      {success && (
        <Typography variant="h6" align="center" sx={{ color: 'green', mt: 2 }}>
          Request is sent. Please wait patiently.
        </Typography>
      )}
    </Box>
  );
};

export default DepositForm;
