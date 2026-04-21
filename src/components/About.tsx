// src/components/About.tsx
import React from "react";
import { Box, Typography, Container, Divider, useTheme } from "@mui/material";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

const About: React.FC = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const highlightColor = isDarkMode ? "#00fa43" : "#00bcd4"; // Neon green (dark) or light blue (light)

  return (
    <Container
      id="about"
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
        <EmojiObjectsIcon sx={{ color: highlightColor }} />
        <Typography
          variant="h4"
          fontWeight="bold"
          className="heading-monoton"
          sx={{ color: highlightColor }}
        >
          About Me
        </Typography>
      </Box>

      <Divider sx={{ width: "100%", mb: 4 }} />

      <Typography
        variant="body1"
        sx={{
          px: 2,
          lineHeight: 1.8,
          "& strong": {
            color: highlightColor, // Highlight keywords
            fontWeight: 600,
          },
        }}
      >
        I'm a Data Engineer with hands-on experience building scalable data pipelines on AWS and GCP. I enjoy the full data lifecycle — ingestion, transformation, orchestration, and delivering clean, reliable data that analytics and engineering teams can actually use.

        My core stack includes Snowflake and dbt for warehousing and transformation, PySpark for large-scale data processing, Kafka for real-time streaming, Airflow for workflow orchestration, and Docker for keeping environments consistent. I've worked across both AWS (S3, Glue, Redshift, EMR) and GCP (BigQuery, Dataflow, Pub/Sub).

        I also bring full stack development experience — building web applications, admin dashboards, and REST APIs using React, TypeScript, Python, Django, and PostgreSQL — which gives me a broader view of how data flows end to end in a product.

        Currently pursuing my Master's and actively looking for full-time or internship opportunities in Data Engineering where I can contribute, grow, and build things that matter.

        ⚙️ Data: Snowflake · dbt · PySpark · Kafka · Airflow · AWS · GCP · Docker · Python · SQL
        💻 Dev: React · TypeScript · Django · Flask · PostgreSQL · REST APIs · Git</Typography>
    </Container>
  );
};

export default About;
