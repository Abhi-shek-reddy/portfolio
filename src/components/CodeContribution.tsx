// src/components/CodeContribution.tsx
import React from "react";
import { Box, Typography, Paper, useTheme } from "@mui/material";
import "./CodeContribution.css";

const CodeContribution: React.FC = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        px: 4,
        py: 6,
        textAlign: "center",
        backgroundColor: isDarkMode ? "#111" : "#021230ff",
        borderRadius: 4,
      }}
    >
      <Typography
        variant="h4"
        className="heading-monoton"
        sx={{
          fontWeight: "bold",
          color: isDarkMode ? "#37c65d" : "#00bcd4",
          mb: 3,
        }}
      >
        Days Abhishek Code
      </Typography>

      <Paper
        elevation={3}
        sx={{
          display: "inline-block",
          padding: 2,
          borderRadius: 2,
          backgroundColor: isDarkMode ? "#37c65d" : "#0077b5",
        }}
      >
        <img
          src="./images/gitRepo.png"
          alt="Abhishek's GitHub Contribution"
          style={{ width: "100%", maxWidth: "600px", borderRadius: "8px" }}
        />
      </Paper>

      <Typography
        variant="subtitle1"
        sx={{
          mt: 3,
          fontWeight: 500,
          color: "#ffffff",
        }}
      >
        Passionate full-stack developer crafting clean UI and solid backend
        logic.
      </Typography>

      {/* Glowing rectangular quote box */}
     <Box className={`quote-box-enhanced ${isDarkMode ? 'quote-dark' : 'quote-light'}`}>
  <Typography variant="h6" className="quote-text">
    💬 “Code is like a joke. If you have to explain it, it’s probably not that good.” 😅
  </Typography>
</Box>

    </Box>
  );
};

export default CodeContribution;
