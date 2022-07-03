import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';

const ButtonLogOut = ({ ...props }) => {
  return (
    <Button variant="outlined" type="auth" {...props} endIcon={<LogoutIcon />}>
      Выйти
    </Button>
  );
};

export default ButtonLogOut;
