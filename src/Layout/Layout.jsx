import { useContext } from 'react';

import { ThemeProvider, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';

import { darkTheme, lightTheme, redTheme } from '../UI/Theme/Theme';
import { ThemeContext } from '../UI/ThemeHandler/ThemeHandler';

import { styled } from '@mui/material/styles';

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

  const AppMainWrapper = styled('div')(() => {
    switch (themeMode) {
      case 'light':
        return {
          backgroundColor: '#ffffff',
          borderRadius: '0',
          boxShadow:
            '0px 0 0 0 rgb(0 0 0 / 20%), 0 0 0 0 rgb(0 0 0 / 14%), 0 0 0 0 rgb(0 0 0 / 12%)',
        };
      case 'dark':
        return {
          backgroundColor: '#2d2e2e',
          borderRadius: '0',
          boxShadow:
            '0px 0 0 0 rgb(0 0 0 / 20%), 0 0 0 0 rgb(0 0 0 / 14%), 0 0 0 0 rgb(0 0 0 / 12%)',
        };
      case 'red':
        return {
          backgroundColor: '#ffffff',
          borderRadius: '0',
          boxShadow:
            '0px 0 0 0 rgb(0 0 0 / 20%), 0 0 0 0 rgb(0 0 0 / 14%), 0 0 0 0 rgb(0 0 0 / 12%)',
        };
      default:
        break;
    }
  });

  return (
    <ThemeProvider theme={changeColorMode(themeMode)}>
      <AppMainWrapper>
        <HeaderComponent />
        <main>
          <Outlet />
        </main>

        <footer>
          <Typography>footer</Typography>
        </footer>
      </AppMainWrapper>
    </ThemeProvider>
  );
};

export { Layout };
