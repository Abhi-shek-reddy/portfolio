import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Grid,
} from "@mui/material";
import "./Projects.css";

const projects = [
  {
    name: "Portfolio Website",
    image: "/images/project1.jpg",
    summary: "A modern portfolio website built using React and TypeScript.",
    skills: ["React", "TypeScript", "MUI"],
  },
  {
    name: "E-Commerce App",
    image: "/images/project2.jpg",
    summary: "An online bookstore with cart, wishlist, and checkout.",
    skills: ["MongoDB", "Express", "React", "Node"],
  },
  {
    name: "AI Blog Generator",
    image: "/images/project3.jpg",
    summary: "An AI-powered blog content generator using GPT API.",
    skills: ["OpenAI", "Next.js", "Tailwind CSS"],
  },
];

const Projects: React.FC = () => {
  return (
    <Box className="project-section">
      <Typography className="project-title">🚀 Projects</Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            sm={10}
            md={4}
            key={index}
            className="project-grid-item"
          >
            <Card className="project-card">
              <CardMedia
                component="img"
                image={project.image}
                alt={project.name}
                className="project-image"
              />
              <CardContent className="project-content">
                <Typography className="project-name">
                  {project.name}
                </Typography>
                <Typography className="project-summary">
                  {project.summary}
                </Typography>
                <Box className="project-skills">
                  {project.skills.map((skill, i) => (
                    <Chip
                      key={i}
                      label={skill}
                      className="chip"
                      size="small"
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
