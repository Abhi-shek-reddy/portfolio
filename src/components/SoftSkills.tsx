// src/components/SoftSkills.tsx
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import "./Skills.css"; // assuming same CSS file is reused

const softSkills = [
  { name: "Communication", icon: "/skills/communication.png" },
  { name: "Team Work", icon: "/skills/teamwork.png" },
  { name: "Creativity", icon: "/skills/creativity.png" },
  { name: "Creative Thinking", icon: "/skills/thinking.png" },
  { name: "Problem Solving", icon: "/skills/problem_solving.png" },
];

const SoftSkills = () => {
  return (
    <Box sx={{ px: 4, py: 8, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Soft Skills
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="space-evenly"
        alignItems="center"
      >
        {softSkills.map((skill) => (
          <Grid item key={skill.name} sx={{ maxWidth: 160, flexGrow: 1 }}>
            <Paper elevation={3} className="skill-card">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <Typography variant="subtitle1" sx={{ mt: 1 }}>
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
