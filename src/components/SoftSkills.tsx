// src/components/SoftSkills.tsx
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
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
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box sx={{ px: 4, py: 8, textAlign: "center" }}>
      <Typography
        className="heading-monoton"
        variant="h4"
        gutterBottom
        sx={{
          color: isDarkMode ? "#00fa43" : "#00bcd4",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Soft Skills
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          mt: 4,
        }}
      >
        {softSkills.map((skill) => (
          <Box
            key={skill.name}
            sx={{
              width: 150,
              p: 2,
              borderRadius: 2,
              backgroundColor: isDarkMode ? "#292c28ff" : "#e0f7fa",
              boxShadow: 3,
              textAlign: "center",
            }}
            className={`skill-card ${isDarkMode ? "dark-mode" : "light-mode"}`}
          >
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <Typography
              variant="subtitle1"
              sx={{
                mt: 1,
                color: isDarkMode ? "#ffffff" : "#000000", // ✅ Dark/Light mode control here
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

export default SoftSkills;
