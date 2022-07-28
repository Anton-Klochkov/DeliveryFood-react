import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const ButtonLogOut = ({ title, color, variant, fullWidth, ...props }) => {
  return (
    <Button
      {...props}
      color={color}
      fullWidth={fullWidth}
      variant={variant}
      endIcon={<LogoutIcon />}
    >
      {title}
    </Button>
  );
};

export default ButtonLogOut;
