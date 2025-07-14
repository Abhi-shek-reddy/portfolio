// src/components/CodeContribution.tsx
import React from 'react';
import { Box, Typography, Paper, useTheme } from '@mui/material';

const CodeContribution: React.FC = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        px: 4,
        py: 6,
        textAlign: 'center',
        backgroundColor: isDarkMode ? '#111' : '#021230ff',
        borderRadius: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: isDarkMode ? '#37c65d' : '#0077b5',
          mb: 3,
        }}
      >
        Days Abhishek Code
      </Typography>

      <Paper
        elevation={3}
        sx={{
          display: 'inline-block',
          padding: 2,
          borderRadius: 2,
          backgroundColor: isDarkMode ? '#37c65d' : '#0077b5',
        }}
      >
        <img
          src="./images/gitRepo.png"
          alt="Abhishek's GitHub Contribution"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
        />
      </Paper>

      <Typography
        variant="subtitle1"
        sx={{
          mt: 3,
          fontWeight: 500,
          color: '#ffffff',
        }}
      >
        Passionate full-stack developer crafting clean UI and solid backend logic.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          mt: 2,
          fontStyle: 'italic',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          color: isDarkMode ? '#00ff80' : '#0077b5',
          textShadow: isDarkMode
            ? '0 0 8px #00ff80, 0 0 16px #00ff80aa'
            : '0 0 8px #0077b5, 0 0 16px #0077b5aa',
        }}
      >
        “Code is like a joke. If you have to explain it, it’s probably not that good.” 😅
      </Typography>
    </Box>
  );
};

export default CodeContribution;
