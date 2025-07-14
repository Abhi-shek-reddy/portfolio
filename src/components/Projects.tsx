import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  useTheme,
} from "@mui/material";
import "./Projects.css";

const projects = [
  {
    name: "Bookstore Website",
    image: "/images/bsPortfolio.png",
    summary:
      "Built a responsive Bookstore website using React (Vite + TypeScript) and FastAPI with Python/MongoDB, featuring live search, genre-based listings, cart/wishlist APIs, and smooth state handling via Context API.",
    skills: [
      "React",
      "TypeScript",
      "Vite",
      "MUI",
      "Context API",
      "FastAPI",
      "Python",
      "MongoDB",
      "REST API",
      "Responsive Design",
    ],
  },
  {
    name: "Admin DashBoard",
    image: "/images/hwPortfolio.png",
    summary:
      "Developed a responsive admin dashboard using React and MUI to manage users, delivery agents, and orders with tabular views, filters, and role-based UI components.",
    skills: ["React", "JavaScript", "MUI", "HTML5", "CSS3", "Dashboard Design"],
  },
  {
    name: "Blockysite ",
    image: "/images/bPortfolio.png",
    summary:
      "Worked on designing and developing the landing page and a custom IDE builder interface using React, focusing on responsive layout, smooth UI, and component reusability.",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
  },
];

const Projects: React.FC = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box
      id="projects"
      className="project-section"
      sx={{
        backgroundColor: isDarkMode ? "#70f570ff" : "#90c5cbff",
        px: 4,
        py: 6,
        minHeight: "100vh",
      }}
    >
      <Typography
        className="heading-monoton"
        sx={{
          color: isDarkMode ? "#000000ff" : "#023E8A",
          fontWeight: "bold",
          fontSize: "2rem",
          mb: 4,
          fontFamily: "'Monoton', cursive",
          textAlign: "center",
        }}
      >
        🚀 Projects
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {projects.map((project, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", sm: "80%", md: "30%" },
              display: "flex",
            }}
            className="project-grid-item"
          >
            <Card
              className="project-card"
              sx={{
                backgroundColor: isDarkMode ? "#000" : "#021230ff",
                color: isDarkMode ? "#ffffff" : "#fff",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={project.name}
                className="project-image"
              />
              <CardContent className="project-content" sx={{ flexGrow: 1 }}>
                <Typography
                  className="project-name"
                  sx={{
                    color: isDarkMode ? "#00fa43" : "#ffffff",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    mb: 1.5,
                  }}
                >
                  {project.name}
                </Typography>

                <Typography
                  className="project-summary"
                  sx={{
                    mb: 2,
                    fontSize: "0.95rem",
                    color: isDarkMode ? "#ccc" : "#e0e0e0",
                  }}
                >
                  {project.summary}
                </Typography>

                <Box
                  className="project-skills"
                  sx={{ mt: "auto", gap: 1, display: "flex", flexWrap: "wrap" }}
                >
                  {project.skills.map((skill, i) => (
                    <Chip
                      key={i}
                      label={skill}
                      size="small"
                      sx={{
                        backgroundColor: isDarkMode ? "#1b5e20" : "#e3f2fd",
                        color: isDarkMode ? "#00fa43" : "#0d47a1",
                        fontWeight: "500",
                        border: `1px solid ${
                          isDarkMode ? "#00fa43" : "#90caf9"
                        }`,
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
