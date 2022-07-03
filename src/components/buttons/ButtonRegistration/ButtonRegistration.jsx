import { Button, Typography } from '@mui/material';
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';

const ButtonRegistration = ({ ...props }) => {
  return (
    <>
      <Button variant="outlined" {...props}>
        Зарегистрироваться
      </Button>
    </>
  );
};

export default ButtonRegistration;
