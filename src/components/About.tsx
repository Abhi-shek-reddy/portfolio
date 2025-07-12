// src/components/About.tsx
import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

const About: React.FC = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        py: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box display="flex" alignItems="center" gap={1} mb={2}>
        <EmojiObjectsIcon color="primary" />
        <Typography variant="h4" fontWeight="bold">
          About Me
        </Typography>
      </Box>

      <Divider sx={{ width: "100%", mb: 4 }} />

      <Typography variant="body1" sx={{ px: 2, lineHeight: 1.8 }}>
        I'm a passionate <strong>frontend developer</strong> with a strong foundation in <strong>web design</strong> and a growing skillset in <strong>backend technologies</strong>. Currently pursuing my Master's with a concentration in Web Design, I specialize in building responsive, scalable, and user-centric applications using <strong>React</strong>, <strong>TypeScript</strong>, and modern UI frameworks.
        <br />
        <br />
        With hands-on experience in both frontend and backend development, I thrive in crafting seamless digital experiences that blend performance with visual appeal. I'm also deeply curious about emerging <strong>AI technologies</strong> and tools, and continuously explore how they can shape the future of web development.
        <br />
        <br />
        Eager to contribute to real-world projects, I'm actively looking for <strong>internship</strong>, <strong>part-time</strong>, or <strong>full-time roles</strong> where I can collaborate with like-minded professionals, grow technically, and deliver innovative solutions.
      </Typography>
    </Container>
  );
};

export default About;
