import { TextField } from '@mui/material';
import React from 'react';

const InputComponent = ({label, variant, fullWidth}) => {
  return (
    <>
      <TextField fullWidth={fullWidth} variant={variant} label={label}  />
    </>
  );
};

export default InputComponent;
