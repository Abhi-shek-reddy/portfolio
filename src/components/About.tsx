import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, useTheme, Chip } from "@mui/material";

const About: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // ── Tokens — navy+gold light / black+green dark ───────────────
  const accent = isDark ? "#00ffb4" : "#fbbf24";
  const bg = isDark ? "#080f14" : "#091420";   // alternate tier
  const cardBg = isDark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.04)";
  const cardBorder = isDark ? "rgba(255,255,255,0.07)" : "rgba(99,179,255,0.1)";
  const textPrimary = isDark ? "#e8f4f0" : "#e0f2ff";
  const textMuted = isDark ? "rgba(232,244,240,0.52)" : "rgba(224,242,255,0.48)";
  const gridColor = isDark ? "rgba(255,255,255,0.025)" : "rgba(99,179,255,0.03)";
  const numColor = isDark ? "rgba(0,255,180,0.3)" : "rgba(251,191,36,0.35)";
  const endLabel = isDark ? "rgba(0,255,180,0.2)" : "rgba(251,191,36,0.2)";
  const fileLabel = isDark ? "rgba(232,244,240,0.2)" : "rgba(224,242,255,0.18)";

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const stacks = [
    {
      label: "Azure Data Platform",
      prefix: "01",
      color: isDark ? "#00ffb4" : "#fbbf24",
      chips: [
        "Azure Data Factory",
        "Azure Databricks",
        "Azure Synapse",
        "ADLS Gen2",
        "Azure Event Hubs",
        "Azure SQL",
        "Azure DevOps"
      ],
    },
    {
      label: "AWS",
      prefix: "02",
      color: isDark ? "#60a5fa" : "#fb923c",
      chips: [
        "S3",
        "Glue",
        "Redshift",
        "EMR",
        "Athena",
        "Lambda"
      ],
    },
    {
      label: "GCP",
      prefix: "03",
      color: isDark ? "#f9a8d4" : "#86efac",
      chips: [
        "BigQuery",
        "Dataflow",
        "Pub/Sub",
        "Cloud Composer",
        "GCS"
      ],
    },
    {
      label: "Data Engineering",
      prefix: "04",
      color: isDark ? "#fbbf24" : "#a78bfa",
      chips: [
        "PySpark",
        "Kafka",
        "Snowflake",
        "dbt",
        "Delta Lake",
        "Airflow",
        "SQL",
        "Python"
      ],
    },
    {
      label: "Tools & DevOps",
      prefix: "05",
      color: isDark ? "#a78bfa" : "#f9a8d4",
      chips: [
        "Git",
        "GitHub",
        "Docker",
        "Linux",
        "CI/CD",
        "Jira"
      ],
    },
  ];


  const paragraphs = [
    {
      prefix: "01",
      highlight: "Aspiring Data Engineer",
      text: "with hands-on experience designing and building scalable data pipelines using Azure Data Factory, Databricks, PySpark, Delta Lake, and Azure Synapse Analytics. I focus on transforming raw data into reliable, analytics-ready datasets that support business decision-making.",
    },
    {
      prefix: "02",
      highlight: "Cloud Data Engineering Practitioner",
      text: "with practical exposure to Azure, AWS, and GCP ecosystems. I have worked with services including Azure Data Factory, ADLS Gen2, Databricks, Snowflake, AWS S3, Glue, and BigQuery to build modern data platforms and ETL workflows.",
    },
    {
      prefix: "03",
      highlight: "Batch & Real-Time Data Processing Specialist",
      text: "experienced in developing data ingestion and transformation pipelines using PySpark, Kafka, Delta Lake, and SQL. I enjoy solving complex data challenges involving large-scale processing, optimization, and data quality management.",
    },
    {
      prefix: "04",
      highlight: "Strong Foundation in Data Systems",
      text: "with expertise in database design, data modeling, ETL development, warehousing concepts, and cloud-native architectures. I continuously improve my skills through hands-on projects and real-world implementations.",
    },
    {
      prefix: "05",
      highlight: "Recent Master's Graduate",
      text: "currently seeking full-time opportunities in Data Engineering, Analytics Engineering, and Cloud Data Platforms where I can contribute to building scalable, reliable, and business-focused data solutions.",
    },
  ];


  return (
    <Box
      id="about"
      ref={sectionRef}
      sx={{
        position: "relative",
        backgroundColor: bg,
        py: { xs: 8, md: 12 },
        px: { xs: 3, sm: 5, md: 10, lg: 16 },
        overflow: "hidden",
      }}
    >
      {/* grid */}
      <Box sx={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
        backgroundSize: "44px 44px",
      }} />

      {/* section label */}
      <Box sx={{
        display: "flex", alignItems: "center", gap: 2, mb: 6,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "all 0.6s ease",
      }}>
        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: accent, letterSpacing: "0.12em" }}>
          02 /
        </Typography>
        <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: fileLabel, letterSpacing: "0.08em" }}>
          about.md
        </Typography>
      </Box>

      {/* heading */}
      <Box sx={{
        mb: 8,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.7s ease 0.1s",
      }}>
        <Typography sx={{
          fontFamily: "'Outfit', sans-serif", fontWeight: 900,
          fontSize: { xs: "2.4rem", sm: "3rem", md: "3.6rem" },
          lineHeight: 0.95, letterSpacing: "-0.03em", color: textPrimary, mb: 1,
        }}>
          About <span style={{ color: accent }}>Me</span>
        </Typography>
        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: textMuted, letterSpacing: "0.06em" }}>
          // data_engineer + cloud_architect + full_stack_dev
        </Typography>
      </Box>

      {/* two-column */}
      <Box sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
        gap: { xs: 6, lg: 10 },
        position: "relative", zIndex: 1,
      }}>
        {/* LEFT — paragraphs */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {paragraphs.map((p, i) => (
            <Box key={i} sx={{
              display: "flex", gap: 2,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(18px)",
              transition: `all 0.65s ease ${0.15 + i * 0.08}s`,
            }}>
              <Typography sx={{
                fontFamily: "'Space Mono', monospace", fontSize: "0.6rem",
                color: numColor, pt: "3px", flexShrink: 0, letterSpacing: "0.04em",
              }}>
                {p.prefix}
              </Typography>
              <Typography sx={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: { xs: "0.92rem", md: "0.97rem" },
                lineHeight: 1.82, color: textMuted,
              }}>
                <Box component="span" sx={{ color: textPrimary, fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>
                  {p.highlight}{" "}
                </Box>
                {p.text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* RIGHT — stack cards */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {stacks.map((stack, i) => (
            <Box key={stack.label} sx={{
              border: `1px solid ${cardBorder}`,
              borderRadius: "6px", p: 2, background: cardBg,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(20px)",
              transition: `all 0.65s ease ${0.2 + i * 0.09}s`,
              "&:hover": {
                borderColor: stack.color,
                background: "rgba(255,255,255,0.06)",
              },
            }}>
              {/* card header */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", color: textMuted, opacity: 0.6 }}>
                  {stack.prefix}
                </Typography>
                <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: stack.color, flexShrink: 0 }} />
                <Typography sx={{
                  fontFamily: "'Space Mono', monospace", fontWeight: 700,
                  fontSize: "0.7rem", color: stack.color,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                }}>
                  {stack.label}
                </Typography>
                <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
              </Box>

              {/* chips */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.7 }}>
                {stack.chips.map(chip => (
                  <Chip key={chip} label={chip} size="small" sx={{
                    fontFamily: "'Outfit', sans-serif", fontWeight: 600,
                    fontSize: "0.7rem", height: 24, borderRadius: "3px",
                    background: "rgba(255,255,255,0.05)",
                    color: textMuted,
                    border: `1px solid ${cardBorder}`,
                    "& .MuiChip-label": { px: 1 },
                    "&:hover": {
                      background: "rgba(255,255,255,0.09)",
                      color: stack.color, borderColor: stack.color,
                    },
                    transition: "all 0.18s ease", cursor: "default",
                  }} />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* bottom line */}
      <Box sx={{
        mt: 10, display: "flex", alignItems: "center", gap: 2,
        opacity: visible ? 1 : 0, transition: "all 0.7s ease 0.7s",
      }}>
        <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
        <Typography sx={{
          fontFamily: "'Space Mono', monospace", fontSize: "0.6rem",
          color: endLabel, letterSpacing: "0.08em",
        }}>
          end_of_section
        </Typography>
      </Box>
    </Box>
  );
};

export default About;