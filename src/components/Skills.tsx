// src/components/Skills.tsx
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import "./Skills.css";

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
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box sx={{ textAlign: "center", px: 4, py: 6 }} id="skills">
      <Typography
        variant="h4"
        gutterBottom
        className="monoton-regular"
        sx={{
          color: isDarkMode ? "#00fa43" : "#0288d1",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Skills
      </Typography>

      <Box className="skills-grid">
        {skills.map((skill) => (
          <Box
            key={skill.name}
            className={`skill-card ${isDarkMode ? "dark-mode" : "light-mode"}`}
          >
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <Typography
              variant="subtitle1"
              className="skill-name"
              sx={{
                marginTop: "10px",
                color: isDarkMode ? "white" : "black",
              }}
            >
              {skill.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
