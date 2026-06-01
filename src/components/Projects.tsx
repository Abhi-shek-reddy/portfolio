import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, Chip, useTheme } from "@mui/material";
import GitHubIcon    from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const projects = [
  {
    num: "01",
    name: "Azure End-to-End Data Lakehouse",
    category: "Data Engineering · Azure",
    image: "/images/dataEng.png",
    summary: "Architected a production-grade lakehouse on Azure using ADF for orchestration, Databricks + PySpark for large-scale transformation, Delta Lake for ACID-compliant storage, and Synapse Analytics for BI-ready serving. Implemented parameterised ADF pipelines, schema enforcement, and automated data quality checks across bronze, silver, and gold layers.",
    skills: ["Azure Data Factory","Azure Databricks","Delta Lake","Azure Synapse","ADLS Gen2","PySpark","Python","SQL"],
    accentDark: "#00ffb4", accentLight: "#fbbf24",
    github: "#", live: "",
  },
  {
    num: "02",
    name: "Modern Data Warehouse — dbt + Snowflake",
    category: "Data Engineering · Cloud",
    image: "/images/snowflake.png",
    summary: "Designed a multi-layer data warehouse in Snowflake using dbt for staging, intermediate, and mart transformations. Built incremental models, snapshot tracking for SCD Type 2, source freshness checks, and schema tests. Integrated AWS S3 and Glue for scalable raw data ingestion into Snowflake external stages.",
    skills: ["Snowflake","dbt","AWS S3","AWS Glue","SQL","Data Modeling","ETL/ELT","Snapshots"],
    accentDark: "#60a5fa", accentLight: "#93c5fd",
    github: "#", live: "",
  },
  {
    num: "03",
    name: "Real-Time Streaming Pipeline — Kafka + PySpark",
    category: "Data Engineering · Streaming",
    image: "/images/dataEng.png",
    summary: "Built a real-time event streaming pipeline using Apache Kafka as the message broker and PySpark Structured Streaming for stateful processing. Consumed from Azure Event Hubs Kafka endpoint, transformed and aggregated events, and sinked to both Snowflake and ADLS Gen2 via Delta Lake. Orchestrated with Apache Airflow.",
    skills: ["Apache Kafka","PySpark","Azure Event Hubs","Apache Airflow","Delta Lake","Snowflake","Docker","Python"],
    accentDark: "#fbbf24", accentLight: "#fb923c",
    github: "#", live: "",
  },
  {
    num: "04",
    name: "GCP Data Pipeline — BigQuery + Dataflow",
    category: "Data Engineering · GCP",
    image: "/images/dataEng.png",
    summary: "Engineered a batch and streaming data pipeline on GCP using Cloud Storage as the landing zone, Dataflow for distributed data processing, and BigQuery as the analytical warehouse. Orchestrated multi-step workflows with Cloud Composer (Airflow) and implemented Pub/Sub-triggered pipeline execution for near-real-time ingestion.",
    skills: ["BigQuery","Dataflow","Cloud Composer","Pub/Sub","GCS","Apache Beam","Python","SQL"],
    accentDark: "#a78bfa", accentLight: "#a78bfa",
    github: "#", live: "",
  },
  {
    num: "05",
    name: "BookishBeacon — Full Stack Platform",
    category: "Full Stack · React · FastAPI",
    image: "/images/bsPortfolio.png",
    summary: "Developed a full-stack bookstore platform with React and TypeScript on the frontend and FastAPI on the backend. Features include cart management, search with filters, wishlist, JWT authentication, and a PostgreSQL-backed REST API. Containerised with Docker and deployed with CI/CD.",
    skills: ["React","TypeScript","FastAPI","Python","PostgreSQL","MongoDB","REST API","Docker","JWT"],
    accentDark: "#f9a8d4", accentLight: "#f9a8d4",
    github: "#", live: "#",
  },
  {
    num: "06",
    name: "Admin Dashboard — Role-Based UI",
    category: "Full Stack · React · Django",
    image: "/images/hwPortfolio.png",
    summary: "Built a full-featured admin dashboard with role-based access control, dynamic server-side tables with filtering and pagination, Chart.js analytics visualisations, and a Django REST API backend. JWT-authenticated with refresh-token rotation and a PostgreSQL data layer.",
    skills: ["React","TypeScript","Django","PostgreSQL","MUI","Chart.js","JWT","REST API"],
    accentDark: "#34d399", accentLight: "#34d399",
    github: "#", live: "",
  },
];

const Projects: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  // ── Tokens — navy+gold light / black+green dark ───────────────
  // Primary bg tier (same as Home, AzureSkills)
  const bg            = isDark ? "#05090e"  : "#0d1b2a";
  const cardBg        = isDark ? "rgba(255,255,255,0.03)"  : "rgba(255,255,255,0.04)";
  const cardBorder    = isDark ? "rgba(255,255,255,0.07)"  : "rgba(99,179,255,0.1)";
  const textPrimary   = isDark ? "#e8f4f0"  : "#e0f2ff";
  const textMuted     = isDark ? "rgba(232,244,240,0.5)"   : "rgba(224,242,255,0.48)";
  const gridColor     = isDark ? "rgba(0,255,180,0.03)"    : "rgba(99,179,255,0.04)";
  const sectionAccent = isDark ? "#00ffb4"  : "#fbbf24";
  const endLabel      = isDark ? "rgba(0,255,180,0.2)"     : "rgba(251,191,36,0.2)";
  const overlayBg     = isDark ? "rgba(5,9,14,0.85)"       : "rgba(13,27,42,0.7)";
  const badgeBg       = isDark ? "rgba(5,9,14,0.82)"       : "rgba(13,27,42,0.75)";
  const chipBg        = isDark ? "rgba(255,255,255,0.05)"  : "rgba(255,255,255,0.05)";

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <Box
      id="projects"
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
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "all 0.6s ease",
      }}>
        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: sectionAccent, letterSpacing: "0.12em" }}>
          06 /
        </Typography>
        <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: textMuted, letterSpacing: "0.08em" }}>
          projects.index
        </Typography>
      </Box>

      {/* heading */}
      <Box sx={{
        mb: 10,
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.7s ease 0.1s",
      }}>
        <Typography sx={{
          fontFamily: "'Outfit', sans-serif", fontWeight: 900,
          fontSize: { xs: "2.4rem", sm: "3rem", md: "3.6rem" },
          lineHeight: 0.95, letterSpacing: "-0.03em", color: textPrimary, mb: 1,
        }}>
          Selected <span style={{ color: sectionAccent }}>Projects</span>
        </Typography>
        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: textMuted, letterSpacing: "0.06em" }}>
          {'// projects.filter(p => p.impact === "high").sort()'}
        </Typography>
      </Box>

      {/* project grid */}
      <Box sx={{
        position: "relative", zIndex: 1,
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" },
        gap: 2.5,
      }}>
        {projects.map((project, i) => {
          const accent = isDark ? project.accentDark : project.accentLight;
          const isHov  = hovered === i;
          return (
            <Box
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              sx={{
                border: `1px solid ${isHov ? accent : cardBorder}`,
                borderRadius: "8px",
                background: cardBg,
                overflow: "hidden",
                display: "flex", flexDirection: "column",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.7s ease ${0.1 + i * 0.08}s, transform 0.7s ease ${0.1 + i * 0.08}s, border-color 0.22s ease, box-shadow 0.22s ease`,
                boxShadow: isHov
                  ? `0 16px 48px rgba(0,0,0,0.55), 0 0 0 1px ${accent}22`
                  : "none",
              }}
            >
              {/* image */}
              <Box sx={{
                position: "relative", height: 180, overflow: "hidden",
                borderBottom: `1px solid ${cardBorder}`, flexShrink: 0,
              }}>
                <Box component="img" src={project.image} alt={project.name} sx={{
                  width: "100%", height: "100%", objectFit: "cover", display: "block",
                  transition: "transform 0.5s ease",
                  transform: isHov ? "scale(1.05)" : "scale(1)",
                  filter: "brightness(0.72)",
                }} />
                {/* gradient overlay */}
                <Box sx={{
                  position: "absolute", inset: 0,
                  background: `linear-gradient(to top, ${overlayBg} 0%, transparent 60%)`,
                }} />
                {/* number badge */}
                <Box sx={{
                  position: "absolute", top: 12, left: 12,
                  px: 1, py: 0.3,
                  border: `1px solid ${accent}55`, borderRadius: "3px",
                  background: badgeBg, backdropFilter: "blur(8px)",
                }}>
                  <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", color: accent, letterSpacing: "0.08em" }}>
                    {project.num}
                  </Typography>
                </Box>
                {/* category badge */}
                <Box sx={{
                  position: "absolute", top: 12, right: 12,
                  px: 1, py: 0.3,
                  border: `1px solid ${cardBorder}`, borderRadius: "3px",
                  background: badgeBg, backdropFilter: "blur(8px)",
                }}>
                  <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: textMuted, letterSpacing: "0.05em" }}>
                    {project.category}
                  </Typography>
                </Box>
              </Box>

              {/* content */}
              <Box sx={{ p: { xs: 2, md: 2.5 }, flex: 1, display: "flex", flexDirection: "column", gap: 1.5 }}>
                {/* title + links */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 1 }}>
                  <Typography sx={{
                    fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                    fontSize: { xs: "1rem", md: "1.05rem" },
                    color: isHov ? accent : textPrimary,
                    lineHeight: 1.25, transition: "color 0.2s ease",
                  }}>
                    {project.name}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 0.8, flexShrink: 0 }}>
                    {project.github && (
                      <Box component="a" href={project.github} target="_blank" aria-label="GitHub"
                        sx={{
                          width: 28, height: 28, border: `1px solid ${cardBorder}`,
                          borderRadius: "5px", display: "flex", alignItems: "center", justifyContent: "center",
                          color: textMuted, textDecoration: "none", transition: "all 0.18s ease",
                          "&:hover": { borderColor: accent, color: accent },
                        }}
                      >
                        <GitHubIcon sx={{ fontSize: 14 }} />
                      </Box>
                    )}
                    {project.live && (
                      <Box component="a" href={project.live} target="_blank" aria-label="Live"
                        sx={{
                          width: 28, height: 28, border: `1px solid ${cardBorder}`,
                          borderRadius: "5px", display: "flex", alignItems: "center", justifyContent: "center",
                          color: textMuted, textDecoration: "none", transition: "all 0.18s ease",
                          "&:hover": { borderColor: accent, color: accent },
                        }}
                      >
                        <OpenInNewIcon sx={{ fontSize: 14 }} />
                      </Box>
                    )}
                  </Box>
                </Box>

                {/* summary */}
                <Typography sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: { xs: "0.82rem", md: "0.85rem" },
                  lineHeight: 1.72, color: textMuted, flex: 1,
                }}>
                  {project.summary}
                </Typography>

                <Box sx={{ height: "1px", background: cardBorder }} />

                {/* chips */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.7 }}>
                  {project.skills.map((skill, si) => (
                    <Chip key={si} label={skill} size="small" sx={{
                      fontFamily: "'Outfit', sans-serif", fontWeight: 600,
                      fontSize: "0.65rem", height: 22, borderRadius: "3px",
                      background: chipBg, color: textMuted,
                      border: `1px solid ${cardBorder}`,
                      "& .MuiChip-label": { px: 0.8 },
                      "&:hover": { color: accent, borderColor: accent },
                      transition: "all 0.18s ease", cursor: "default",
                    }} />
                  ))}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* bottom line */}
      <Box sx={{
        mt: 10, display: "flex", alignItems: "center", gap: 2,
        opacity: visible ? 1 : 0, transition: "all 0.7s ease 1s",
      }}>
        <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: endLabel, letterSpacing: "0.08em" }}>
          end_of_section
        </Typography>
      </Box>
    </Box>
  );
};

export default Projects;