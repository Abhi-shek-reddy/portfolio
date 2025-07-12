import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import './Skills.css';

const skills = [
  { name: "HTML5", icon: "/skills/html5.png" },
  { name: "CSS3", icon: "/skills/css3.png" },
  { name: "JavaScript", icon: "/skills/javascript.png" },
  { name: "TypeScript", icon: "/skills/typescript.png" },
  { name: "React", icon: "/skills/react.png" },
  { name: "Bootstrap", icon: "/skills/bootstrap.png" },
  { name: "Tailwind CSS", icon: "/skills/tailwind_css.png" },
  { name: "Python", icon: "/skills/python.png" },
  { name: "MongoDB", icon: "/skills/mongodb.png" },
  { name: "Git", icon: "/skills/git.png" },
  { name: "GitHub", icon: "/skills/github.png" },
  { name: "VS Code", icon: "/skills/vs_code.png" },
];

const Skills: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', px: 4, py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill) => (
          <Grid item key={skill.name}>
            <Paper elevation={3} className="skill-card">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <Typography variant="subtitle1" mt={1}>
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
