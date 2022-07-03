import { useContext } from 'react';

import { Box, Paper, ThemeProvider, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';

import { darkTheme, lightTheme, redTheme } from '../UI/Theme/Theme';
import { ThemeContext } from '../UI/ThemeHandler/ThemeHandler';

import styles from './Layout.module.scss';

const Layout = () => {
  const ThemeModeContext = useContext(ThemeContext);
  const { themeMode } = ThemeModeContext;

  const changeColorMode = (themeMode) => {
    switch (themeMode) {
      case 'light':
        return lightTheme;
      case 'dark':
        return darkTheme;
      case 'red':
        return redTheme;
      default:
        return lightTheme;
    }
  };
  return (
    <ThemeProvider theme={changeColorMode(themeMode)}>
      {/* <Paper className={styles.mainLayout}> */}
      {/* <header> */}
      <HeaderComponent />
      {/* </header> */}
      {/* <Box> */}
        <main>
          <Outlet />
        </main>
      {/* </Box> */}

      <footer>
        <Typography>footer</Typography>
      </footer>
      {/* </Paper> */}
    </ThemeProvider>
  );
};

export { Layout };
