import { Button } from '@mui/material';
import React from 'react';

const ButtonDefault = ({ title, color, variant, fullWidth, ...props }) => {
  return (
    <Button {...props} color={color} fullWidth={fullWidth} variant={variant}>
      {title}
    </Button>
  );
};

export default ButtonDefault;
