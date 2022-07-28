import { TextField } from '@mui/material';
import React from 'react';

const InputComponent = ({label, variant, fullWidth ,color}) => {
  return (
    <>
      <TextField color={color} fullWidth={fullWidth} variant={variant} label={label}  />
    </>
  );
};

export default InputComponent;
