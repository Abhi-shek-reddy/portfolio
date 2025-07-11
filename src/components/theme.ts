// src/theme.ts
import { createTheme } from '@mui/material/styles';
import { blue, blueGrey } from '@mui/material/colors';

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: blue[700],
      },
      background: {
        default: mode === 'dark' ? blueGrey[900] : '#ffffff',
        paper: mode === 'dark' ? blueGrey[800] : '#ffffff',
      },
    },
  });
