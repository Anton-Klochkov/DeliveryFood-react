import { AppBar, Box, CardMedia } from '@mui/material';
import { useContext, useState } from 'react';

import LightLogoIcon from '../../assets/AppLogo/logoDarkTheme.svg';
import DarkLogoIcon from '../../assets/AppLogo/logoLightTheme.svg';
import { ThemeContext } from '../../UI/ThemeHandler/ThemeHandler';
import ButtonDefault from '../buttons/ButtonDefault/ButtonDefault';
import ButtonLogIn from '../buttons/ButtonLogIn/ButtonLogIn';
import ButtonLogOut from '../buttons/ButtonLogOut/ButtonLogOut';
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
          variant="standard"
          color="common"
        />
      </Box>
      <Box>
        <ColorSetting />
      </Box>
      {isActive ? (
        <Box className={styles.headerAction}>
          <Box className={styles.containerButton}>
            <ButtonDefault
              color="action"
              fullWidth={true}
              title="Корзина"
              variant="contained"
            />
          </Box>
          <Box className={styles.containerButton}>
            <ButtonLogOut
              title="Выйти"
              variant="outlined"
              fullWidth={true}
              onClick={toggleLogin}
            />
          </Box>
        </Box>
      ) : (
        <Box className={styles.headerAction}>
          <Box className={styles.containerButton}>
            <ButtonLogIn
              title="Войти"
              variant="outlined"
              fullWidth={true}
              onClick={toggleLogin}
            />
          </Box>
        </Box>
      )}
    </AppBar>
  );
};

export default HeaderComponent;
