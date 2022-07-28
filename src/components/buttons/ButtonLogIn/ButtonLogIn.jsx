import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const ButtonLogIn = ({ title, color, variant, fullWidth, ...props }) => {
  return (
    <Button {...props} color={color} fullWidth={fullWidth} variant={variant} endIcon={<PersonIcon />}>
     {title}
    </Button>
  );
};

export default ButtonLogIn;
