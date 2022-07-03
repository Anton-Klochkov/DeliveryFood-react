import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme({
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontFamilySecondary: "'Roboto Condensed', sans-serif",
  },
});

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: '#b71c1c',
    },
    secondary: {
      main: '#fafafa',
    },
    success: {
      main: '#2196f3',
    },
    action: {
      main: '#d50000',
    },
    disabled: {
      main: '#212121',
    },
    background: {
      paper: '#9e9e9e',
    },
    info: {
      main: '#a10635',
    },
    common: {
      main: 'white',
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#212121',
          width: '20%',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'sticky',
          backgroundColor: '#051b57',
        },
      },
    },
    MuiSpeedDialAction: {
      styleOverrides: {
        staticTooltipLabel: {
          width: '20vh',
        },
      },
    },
  },
});

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#e65100',
    },
    success: {
      main: '#2196f3',
    },
    action: {
      main: '#d50000',
    },
    disabled: {
      main: '#212121',
    },
    background: {
      paper: '#ffff',
    },
    info: {
      main: '#ff9800',
    },
    common: {
      main: '#ffff',
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#212121',
          width: '20%',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'sticky',
          backgroundColor: '#ffffff',
        },
      },
    },
    MuiSpeedDialAction: {
      styleOverrides: {
        staticTooltipLabel: {
          width: '20vh',
        },
      },
    },
  },
});

const redTheme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: '#8a0303',
    },
    secondary: {
      main: '#8a0303',
    },
    success: {
      main: '#2196f3',
    },
    action: {
      main: '#d50000',
    },
    disabled: {
      main: '#212121',
    },
    background: {
      default: '#8a0303',
    },
    common: {
      main: '#8a0303',
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#212121',
          width: '20%',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'sticky',
          backgroundColor: '#ffc48a',
        },
      },
    },
    MuiSpeedDialAction: {
      styleOverrides: {
        staticTooltipLabel: {
          width: '20vh',
        },
      },
    },
  },
});

export { baseTheme, darkTheme, lightTheme, redTheme };
