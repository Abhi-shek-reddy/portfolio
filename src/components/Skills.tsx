// src/components/Skills.tsx
import React from 'react';
import { Box, Typography, Grid, Paper, useTheme } from '@mui/material';
import './Skills.css';

const skills = [
  { name: "HTML5", icon: "./images/Html.svg" },
  { name: "CSS3", icon: "./images/CSS3_logo.svg" },
  { name: "JavaScript", icon: "./images/JavaScript-logo.png" },
  { name: "TypeScript", icon: "./images/Typescript.svg" },
  { name: "React", icon: "./images/React-icon.svg" },
  { name: "Bootstrap", icon: "./images/Bootstrap_logo.svg" },
  { name: "Tailwind CSS", icon: "./images/Tailwind_CSS_Logo.svg" },
  { name: "Python", icon: "./images/Python.svg" },
  { name: "MongoDB", icon: "./images/mongodb.png" },
  { name: "Git", icon: "./images/Git.png" },
  { name: "GitHub", icon: "./images/GitHub.png" },
  { name: "MUI", icon: "./images/muilogo.png" },
];

const Skills: React.FC = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box sx={{ textAlign: 'center', px: 4, py: 6 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: isDarkMode ? '#00fa43' : '#00bcd4',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Skills
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill) => (
          <Grid item key={skill.name}>
            <Paper
              elevation={3}
              className={`skill-card ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
              sx={{
                backgroundColor: isDarkMode ? '#292c28ff' : '#e0f7fa',
              }}
            >
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <Typography
                variant="subtitle1"
                className={`skill-name ${isDarkMode ? 'dark-text' : 'light-text'}`}
                sx={{
                  marginTop: '10px',
                  color: '#000000',
                }}
              >
                {skill.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
