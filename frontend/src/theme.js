import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FAF9F6',
    },
    secondary: {
      main: '#E8E8E8',
    },
    otherColor: {
      main: '#999',
    },
  },
  typography: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    fontSize: 12,
    h1: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 40,
    },
    h2: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 32,
    },
    h3: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 24,
    },
    h4: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 20,
    },
    h5: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 16,
    },
    h6: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 14,
    },
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});
