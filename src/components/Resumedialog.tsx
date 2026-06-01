import React, { useState } from "react";
import {
  Box, Typography, IconButton, Button,
  Dialog, DialogContent, useTheme, Chip,
} from "@mui/material";
import CloseIcon     from "@mui/icons-material/Close";
import DownloadIcon  from "@mui/icons-material/Download";
import WorkIcon      from "@mui/icons-material/Work";
import SchoolIcon    from "@mui/icons-material/School";
import CodeIcon      from "@mui/icons-material/Code";
import CloudIcon     from "@mui/icons-material/Cloud";

interface ResumeDialogProps {
  open: boolean;
  onClose: () => void;
}

const resume = {
  name: "Abhishek Reddy Manam",
  title: "Data Engineer - Azure Data Engineer · Full Stack Developer",
  location: "Delaware, USA",
  email: "abhishekreddymanam@gmail.com",
  phone: "+1 484-482-9961",
  linkedin: "linkedin.com/in/abhishek-reddy-manam-1b5167204",
  github: "github.com/Abhi-shek-reddy",

  summary:
    "Azure-first Data Engineer with hands-on experience building production-grade pipelines across Azure, AWS, and GCP. Skilled in dbt, PySpark, Kafka, and Airflow. Full-stack background in React, TypeScript, Django, and PostgreSQL.",

  experience: [
    {
      role: "Data Engineer",
      company: "Digiuniv Technologies",
      duration: "Jul 2023 – Jul 2024",
      type: "Full-time",
      points: [
        "Azure Data Factory (40+ linked services), Databricks, Delta Lake, Synapse",
        "dbt Snowflake project — staging, intermediate, mart; ~60% runtime reduction",
        "Real-time Kafka + PySpark pipelines into Azure Synapse via Event Hubs",
        "Airflow on Cloud Composer for cross-cloud BigQuery + AWS Glue orchestration",
      ],
    },
    {
      role: "Data Engineering Intern",
      company: "Digiuniv Technologies",
      duration: "Jul 2022 – Jun 2023",
      type: "Internship",
      points: [
        "ETL pipelines on AWS (S3, Glue, Lambda) and GCP (BigQuery, Pub/Sub)",
        "Airflow DAGs with Slack alerting and dependency management",
        "PySpark on EMR — dedup, null-handling, schema enforcement",
        "Python data quality utilities and row-count reconciliation scripts",
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "Blockysite",
      duration: "Jan 2022 – Jun 2022",
      type: "Internship",
      points: [
        "Admin dashboard: RBAC, server-side tables, Chart.js visualisations",
        "Django + Flask REST APIs with JWT authentication",
        "React + TypeScript frontend with Axios and React Context",
      ],
    },
  ],

  education: [
    { degree: "MS Information System Technologies", school: "Wilmington University", year: "2024–2026", gpa: "3.8/4.0" },
    { degree: "BTech Computer Science",            school: "Lovely Professional University", year: "2019–2023", gpa: "7.2/10" },
  ],

  skills: {
    azure:    ["ADF", "Databricks", "Synapse", "ADLS Gen2", "Event Hubs", "DevOps", "Purview"],
    aws:      ["S3", "Glue", "Redshift", "EMR", "Lambda", "Kinesis"],
    gcp:      ["BigQuery", "Dataflow", "Pub/Sub", "Cloud Composer"],
    data:     ["Snowflake", "dbt", "PySpark", "Kafka", "Airflow", "Delta Lake", "Python", "SQL"],
    fullstack:["React", "TypeScript", "Django", "Flask", "PostgreSQL", "REST APIs", "Docker"],
  },
};

const ResumeDialog: React.FC<ResumeDialogProps> = ({ open, onClose }) => {
  const theme  = useTheme();
  const isDark = theme.palette.mode === "dark";

  const accent      = isDark ? "#00ffb4" : "#fbbf24";
  const bg          = isDark ? "#05090e" : "#0d1b2a";
  const cardBg      = isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.05)";
  const cardBorder  = isDark ? "rgba(255,255,255,0.08)" : "rgba(99,179,255,0.12)";
  const textPrimary = isDark ? "#e8f4f0" : "#e0f2ff";
  const textMuted   = isDark ? "rgba(232,244,240,0.5)" : "rgba(224,242,255,0.48)";
  const accentText  = isDark ? "#05090e" : "#0d1b2a";

  const skillColors: Record<string, string> = {
    azure:     isDark ? "#00ffb4" : "#fbbf24",
    aws:       isDark ? "#fbbf24" : "#fb923c",
    gcp:       isDark ? "#60a5fa" : "#93c5fd",
    data:      isDark ? "#a78bfa" : "#a78bfa",
    fullstack: isDark ? "#f9a8d4" : "#f9a8d4",
  };

  const Section: React.FC<{ icon: React.ReactNode; label: string; color: string; children: React.ReactNode }> = ({ icon, label, color, children }) => (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
        <Box sx={{ color, display: "flex", alignItems: "center" }}>{icon}</Box>
        <Typography sx={{
          fontFamily: "'Space Mono', monospace", fontSize: "0.65rem",
          color, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700,
        }}>
          {label}
        </Typography>
        <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
      </Box>
      {children}
    </Box>
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          background: bg,
          border: `1px solid ${cardBorder}`,
          borderRadius: "12px",
          boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
          maxHeight: "92vh",
          overflow: "hidden",
        },
      }}
    >
      {/* ── Header ── */}
      <Box sx={{
        px: 3.5, pt: 3, pb: 2.5,
        borderBottom: `1px solid ${cardBorder}`,
        background: isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.03)",
        display: "flex", justifyContent: "space-between", alignItems: "flex-start",
        flexShrink: 0,
      }}>
        <Box>
          {/* terminal bar dots */}
          <Box sx={{ display: "flex", gap: 0.7, mb: 1.5 }}>
            {["#ff5f57","#febc2e","#28c840"].map(c => (
              <Box key={c} sx={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
            ))}
          </Box>
          <Typography sx={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 900,
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: textPrimary, lineHeight: 1.1, letterSpacing: "-0.03em",
          }}>
            {resume.name.split(" ")[0]}
            <span style={{ color: accent }}> {resume.name.split(" ").slice(1).join(" ")}</span>
          </Typography>
          <Typography sx={{
            fontFamily: "'Space Mono', monospace", fontSize: "0.72rem",
            color: accent, mt: 0.5, letterSpacing: "0.04em",
          }}>
            // {resume.title}
          </Typography>
          {/* contact row */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 1.5 }}>
            {[resume.location, resume.email, resume.phone].map(item => (
              <Typography key={item} sx={{
                fontFamily: "'Space Mono', monospace", fontSize: "0.62rem",
                color: textMuted, letterSpacing: "0.03em",
              }}>
                {item}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 1 }}>
          <IconButton onClick={onClose} size="small"
            sx={{ color: textMuted, border: `1px solid ${cardBorder}`, borderRadius: "6px", width: 32, height: 32 }}>
            <CloseIcon sx={{ fontSize: 15 }} />
          </IconButton>
          <Button
            variant="contained"
            href="/Abhishek_Reddy_Resume.pdf"
            download
            startIcon={<DownloadIcon sx={{ fontSize: "0.85rem !important" }} />}
            sx={{
              textTransform: "none", fontFamily: "'Outfit', sans-serif",
              fontWeight: 700, fontSize: "0.82rem",
              px: 2, py: 0.8, borderRadius: "4px",
              background: accent, color: accentText,
              ":hover": { background: isDark ? "#00e8a3" : "#f59e0b" },
              whiteSpace: "nowrap",
            }}
          >
            Download PDF
          </Button>
        </Box>
      </Box>

      {/* ── Scrollable body ── */}
      <DialogContent sx={{ p: 3.5, overflowY: "auto",
        "&::-webkit-scrollbar": { width: "4px" },
        "&::-webkit-scrollbar-track": { background: "transparent" },
        "&::-webkit-scrollbar-thumb": { background: cardBorder, borderRadius: "2px" },
      }}>

        {/* Summary */}
        <Box sx={{
          p: 2, mb: 3, borderRadius: "6px",
          border: `1px solid ${cardBorder}`, background: cardBg,
        }}>
          <Typography sx={{
            fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem",
            lineHeight: 1.75, color: textMuted,
          }}>
            {resume.summary}
          </Typography>
        </Box>

        {/* Two-column grid */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 4 }}>

          {/* ── LEFT: Experience + Education ── */}
          <Box>
            <Section icon={<WorkIcon sx={{ fontSize: 14 }} />} label="Experience" color={accent}>
              {resume.experience.map((exp, i) => (
                <Box key={i} sx={{
                  mb: i < resume.experience.length - 1 ? 2.5 : 0,
                  pl: 2, borderLeft: `2px solid ${i === 0 ? accent : cardBorder}`,
                }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 1, mb: 0.5 }}>
                    <Box>
                      <Typography sx={{
                        fontFamily: "'Outfit', sans-serif", fontWeight: 700,
                        fontSize: "0.9rem", color: textPrimary, lineHeight: 1.2,
                      }}>
                        {exp.role}
                      </Typography>
                      <Typography sx={{
                        fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem",
                        color: i === 0 ? accent : textMuted,
                      }}>
                        {exp.company}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "right", flexShrink: 0 }}>
                      <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: textMuted }}>
                        {exp.duration}
                      </Typography>
                      <Box sx={{
                        display: "inline-flex", alignItems: "center", gap: 0.5,
                        px: 0.8, py: 0.2, mt: 0.4,
                        border: `1px solid ${cardBorder}`, borderRadius: "3px",
                        background: "rgba(255,255,255,0.04)",
                      }}>
                        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: textMuted }}>
                          {exp.type}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 0.6, mt: 1 }}>
                    {exp.points.map((pt, pi) => (
                      <Box key={pi} sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                        <Box sx={{
                          width: 4, height: 4, borderRadius: "50%",
                          background: accent, opacity: 0.6,
                          flexShrink: 0, mt: "6px",
                        }} />
                        <Typography sx={{
                          fontFamily: "'Outfit', sans-serif", fontSize: "0.78rem",
                          lineHeight: 1.65, color: textMuted,
                        }}>
                          {pt}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Section>

            <Section icon={<SchoolIcon sx={{ fontSize: 14 }} />} label="Education" color={isDark ? "#60a5fa" : "#93c5fd"}>
              {resume.education.map((edu, i) => (
                <Box key={i} sx={{
                  mb: i < resume.education.length - 1 ? 2 : 0,
                  pl: 2, borderLeft: `2px solid ${cardBorder}`,
                }}>
                  <Typography sx={{
                    fontFamily: "'Outfit', sans-serif", fontWeight: 700,
                    fontSize: "0.88rem", color: textPrimary, lineHeight: 1.2,
                  }}>
                    {edu.degree}
                  </Typography>
                  <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.78rem", color: textMuted }}>
                    {edu.school}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2, mt: 0.4 }}>
                    <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: textMuted }}>
                      {edu.year}
                    </Typography>
                    <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: isDark ? "#60a5fa" : "#93c5fd" }}>
                      GPA: {edu.gpa}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Section>
          </Box>

          {/* ── RIGHT: Skills ── */}
          <Box>
            <Section icon={<CloudIcon sx={{ fontSize: 14 }} />} label="Cloud & Data Skills" color={accent}>
              {(Object.entries(resume.skills) as [keyof typeof resume.skills, string[]][]).map(([key, chips]) => (
                <Box key={key} sx={{ mb: 2 }}>
                  <Typography sx={{
                    fontFamily: "'Space Mono', monospace", fontSize: "0.58rem",
                    color: skillColors[key], letterSpacing: "0.08em",
                    textTransform: "uppercase", mb: 0.8,
                  }}>
                    {key === "fullstack" ? "Full Stack" : key.toUpperCase()}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.6 }}>
                    {chips.map(chip => (
                      <Chip key={chip} label={chip} size="small" sx={{
                        fontFamily: "'Outfit', sans-serif", fontWeight: 600,
                        fontSize: "0.68rem", height: 22, borderRadius: "3px",
                        background: "rgba(255,255,255,0.05)",
                        color: textMuted,
                        border: `1px solid ${cardBorder}`,
                        "& .MuiChip-label": { px: 0.8 },
                        "&:hover": { color: skillColors[key], borderColor: skillColors[key] },
                        transition: "all 0.18s ease", cursor: "default",
                      }} />
                    ))}
                  </Box>
                </Box>
              ))}
            </Section>

            <Section icon={<CodeIcon sx={{ fontSize: 14 }} />} label="Links" color={isDark ? "#a78bfa" : "#a78bfa"}>
              {[
                { label: "linkedin", value: resume.linkedin, href: `https://${resume.linkedin}` },
                { label: "github",   value: resume.github,   href: `https://${resume.github}` },
              ].map(link => (
                <Box key={link.label} sx={{
                  display: "flex", alignItems: "center", gap: 1.5, mb: 1,
                  p: 1.2, borderRadius: "5px",
                  border: `1px solid ${cardBorder}`,
                  background: cardBg,
                }}>
                  <Typography sx={{
                    fontFamily: "'Space Mono', monospace", fontSize: "0.6rem",
                    color: isDark ? "#a78bfa" : "#a78bfa", minWidth: 52, letterSpacing: "0.06em",
                  }}>
                    {link.label}
                  </Typography>
                  <Box component="a" href={link.href} target="_blank"
                    sx={{
                      fontFamily: "'Space Mono', monospace", fontSize: "0.65rem",
                      color: textMuted, textDecoration: "none",
                      "&:hover": { color: accent },
                      transition: "color 0.18s ease",
                      wordBreak: "break-all",
                    }}
                  >
                    {link.value}
                  </Box>
                </Box>
              ))}
            </Section>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeDialog;