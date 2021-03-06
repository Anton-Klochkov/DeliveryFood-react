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
      paper: '#b1b3b5',
    },
    info: {
      main: '#a10635',
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
          backgroundColor: '#b1b3b5',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          width: '100%',
          height: '100%',
          '&:hover': {
            boxShadow: '0px 0px 10px 5px #b71c1c',
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: '#d50000',
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
      main: '#2196f3',
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
    MuiCard: {
      styleOverrides: {
        root: {
          width: '100%',
          height: '100%',
          '&:hover': {
            boxShadow: '0px 0px 10px 5px #2196f3 ',
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: '#2196f3',
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
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: '#212121',
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
