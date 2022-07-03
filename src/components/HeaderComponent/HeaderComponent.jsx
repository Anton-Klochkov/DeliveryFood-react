import { AppBar, Box, Button, CardMedia, Menu, MenuItem } from '@mui/material';
import { useContext, useState } from 'react';

import LightLogoIcon from '../../assets/logoDarkTheme.svg';
import DarkLogoIcon from '../../assets/logoLightTheme.svg';
import { ThemeContext } from '../../UI/ThemeHandler/ThemeHandler';
import ButtonLogIn from '../buttons/ButtonLogIn/ButtonLogIn';
import ButtonLogOut from '../buttons/ButtonLogOut/ButtonLogOut';
import ButtonRegistration from '../buttons/ButtonRegistration/ButtonRegistration';
import InputComponent from '../Input/InputComponent';
import ColorSetting from './ColorSetting/ColorSetting';

import styles from './HeaderComponent.module.scss';

const HeaderComponent = () => {
  const [isActive, setIsActive] = useState(true);

  const toggleLogin = () => {
    setIsActive(!isActive);
  };
  const ThemeModeContext = useContext(ThemeContext);
  const { themeMode } = ThemeModeContext;

  const colorLogo = (themeMode) => {
    switch (themeMode) {
      case 'light':
        return <CardMedia image={DarkLogoIcon} component="img" alt="Logo" />;
      case 'dark':
        return <CardMedia image={LightLogoIcon} component="img" alt="Logo" />;
      case 'red':
        return <CardMedia image={DarkLogoIcon} component="img" alt="Logo" />;
      default:
        break;
    }
  };

  return (
    <AppBar position="sticky" className={styles.appBarContainer}>
      <Box className={styles.headerLogo}>{colorLogo(themeMode)}</Box>
      <Box className={styles.inputContainer}>
        <InputComponent
          fullWidth={true}
          label="Введите ресторан"
          variant="outlined"
        />
      </Box>
      <Box>
        <ColorSetting />
      </Box>
      <Box>
        {isActive ? (
          <Box className={styles.headerAction}>
            <Button variant="contained">Корзина</Button>
            <ButtonLogOut onClick={toggleLogin} />
          </Box>
        ) : (
          <Box className={styles.headerAction}>
            <ButtonLogIn onClick={toggleLogin} />
            <ButtonRegistration />
          </Box>
        )}
      </Box>
    </AppBar>
  );
};

export default HeaderComponent;
