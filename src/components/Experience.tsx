// src/components/Experience.tsx
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Divider,
  useTheme,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Experience.css";

const experiences = [
  {
    role: "React Developer",
    company: "Digiuniv Technologies Private Limited",
    location: "Hyderabad, India",
    duration: "Jul 2023 - Jul 2024",
    description:
      "Developed and maintained the Hargharwala app using Node.js and ExpressJS, hosted on private cloud with Nginx and CI/CD pipelines using GitHub Actions. Configured on-premises Ubuntu servers with public IP for development; learned Flutter for cross-platform app development.",
    skills: ["ReactJS", "HTML5", "CSS3", "MUI", "TypeScript", "Bootstrap", "Git", "GitHub"],
  },
  {
    role: "Frontend Web Developer",
    company: "Blockysite",
    location: "Hyderabad, India",
    duration: "Jan 2023 - Jun 2023",
    description:
      "Worked on responsive frontend web development with modern UI technologies and frameworks.",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Bootstrap", "Tailwind CSS"],
  },
];

export default function Experience() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          mb: 4,
          color: isDarkMode ? "#00fa43" : "#023E8A",
        }}
      >
        Experience
      </Typography>

      {experiences.map((exp, index) => (
        <Box key={index} sx={{ display: "flex", mb: 4, position: "relative" }}>
          {/* Timeline Dot & Line */}
          <Box sx={{ mr: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Line Above Dot */}
            {index !== 0 && (
              <Box sx={{ width: 2, flexGrow: 1, bgcolor: "grey.400", mb: 1 }} />
            )}

            {/* Dot */}
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                bgcolor: isDarkMode ? "#00fa43" : "#023E8A",
              }}
            />

            {/* Line Below Dot */}
            {index !== experiences.length - 1 && (
              <Box sx={{ width: 2, flexGrow: 1, bgcolor: "grey.400", mt: 1 }} />
            )}
          </Box>

          {/* Experience Card */}
          <Card
            variant="outlined"
            sx={{
              flex: 1,
              backgroundColor: isDarkMode ? "#000" : "#90E0EF",
              color: isDarkMode ? "#fff" : "#000",
              borderColor: isDarkMode ? "#00fa43" : "#023E8A",
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {exp.role}
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
                <CalendarMonthIcon fontSize="small" />
                {exp.duration}
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOnIcon fontSize="small" />
                {exp.company}, {exp.location}
              </Typography>

              <Typography sx={{ mt: 2, color: isDarkMode ? "#ccc" : "text.secondary" }}>
                {exp.description}
              </Typography>

              <Divider sx={{ my: 2, borderColor: isDarkMode ? "#00fa43" : "#023E8A" }} />

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {exp.skills.map((skill, i) => (
                  <Chip
                    key={i}
                    label={skill}
                    color="primary"
                    variant="outlined"
                    sx={{
                      borderColor: isDarkMode ? "#00fa43" : "#023E8A",
                      color: isDarkMode ? "#00fa43" : "#023E8A",
                    }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
}
