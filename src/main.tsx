// main.tsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from './components/Theme';

const Root = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <App setMode={setMode} mode={mode} />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);
