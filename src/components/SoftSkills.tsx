// src/components/SoftSkills.tsx
import React from "react";
import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";
import "./Skills.css"; // Reuse same CSS

const softSkills = [
  { name: "Communication", icon: "./images/conversation.png" },
  { name: "Team Work", icon: "./images/brainstorm.png" },
  { name: "Creativity", icon: "./images/brain.png" },
  { name: "Creative Thinking", icon: "./images/idea.png" },
  { name: "Problem Solving", icon: "./images/problem-solving-skills.png" },
];

const SoftSkills: React.FC = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box sx={{ px: 4, py: 8, textAlign: "center" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: isDarkMode ? '#00fa43' : '#00bcd4',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Soft Skills
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        {softSkills.map((skill) => (
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
                sx={{ marginTop: '10px', color: '#000000' }}
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

export default SoftSkills;
