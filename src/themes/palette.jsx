import { createTheme } from '@mui/material';

const Palette = (mode) => {

  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#1C1B20"
      },
      // common: {
      //   black: '#fff',
      //   white: '#fff',
      // },
      text: {
        primary: "#000",
        menuItemText:"#fff",
        secondary: "#000",
      },
      divider: mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
      background: {
        paper: mode === 'dark' ? "#111827" : "#fff", // Adjust paper color for dark and light mode
        default: mode === 'dark' ? "#030712" : "#1C1B20", // Adjust default background color
      },
    },
  });
};

export default Palette;
