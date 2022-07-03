import { Button, Typography } from '@mui/material';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
const ButtonLogIn = ({ ...props }) => {
  return (
    <Button variant="contained" {...props} endIcon={<PersonIcon />}>
      Войти
    </Button>
  );
};

export default ButtonLogIn;
