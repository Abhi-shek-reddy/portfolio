import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";

const educationData = [
  {
    degree: "MS in Information System Technologies",
    field: "Web Design & Development",
    duration: "2024 – 2026",
    university: "Wilmington University",
    location: "Delaware, USA",
    cgpa: "3.8 / 4.0",
    cgpaPercent: "95%",
    status: "Completed",
    highlights: [
      "Designed and deployed cloud-native data pipelines on Azure using ADF, Databricks, and Synapse Analytics as part of applied coursework and independent projects.",
      "Built end-to-end data engineering workflows covering ingestion, transformation with dbt and PySpark, and serving layers on ADLS Gen2 and Snowflake.",
      "Studied distributed systems, cloud architecture, and database engineering — applied directly to building scalable lakehouse solutions.",
      "Developed full-stack applications with React, TypeScript, and Django to expose data APIs and analytics dashboards to end users.",
      "Explored data quality, metadata management, and governance principles aligned with Azure Purview and modern data catalog practices.",
    ],
    accentDark: "#00ffb4",
    accentLight: "#fbbf24",
  },
  {
    degree: "BTech in Computer Science",
    field: "Computer Science & Engineering",
    duration: "2019 – 2023",
    university: "Lovely Professional University",
    location: "Punjab, India",
    cgpa: "7.2 / 10",
    cgpaPercent: "72%",
    status: "Completed",
    highlights: [
      "Built strong foundations in data structures, algorithms, database management systems, and distributed computing — core to modern data engineering.",
      "Studied computer networks, operating systems, and software engineering methodologies applied to building reliable, fault-tolerant systems.",
      "Completed a final-year capstone project building a full-stack data dashboard in React and Python, integrating PostgreSQL and REST APIs.",
      "Explored SQL query optimisation, normalisation, and relational schema design across multiple database engineering modules.",
      "Gained early exposure to cloud concepts and big data paradigms that guided the career path toward data engineering.",
    ],
    accentDark: "#60a5fa",
    accentLight: "#93c5fd",
  },
  {
    degree: "Intermediate — MPC",
    field: "Mathematics, Physics & Chemistry",
    duration: "2017 – 2019",
    university: "Sri Chaitanya Junior College",
    location: "Hyderabad, India",
    cgpa: "9.5 / 10",
    cgpaPercent: "95%",
    status: "Completed",
    highlights: [
      "Achieved high academic performance in core mathematics and physics — disciplines that underpin statistical thinking and systems reasoning in data engineering.",
      "Developed structured analytical and problem-solving skills essential for debugging complex pipeline failures and optimising distributed queries.",
    ],
    accentDark: "#fbbf24",
    accentLight: "#fb923c",
  },
];

const Education: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // ── Tokens — navy+gold light / black+green dark ───────────────
  // Alternate bg tier (same as About, Experience, Contact)
  const bg            = isDark ? "#080f14"  : "#091420";
  const cardBg        = isDark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.04)";
  const cardBorder    = isDark ? "rgba(255,255,255,0.07)"  : "rgba(99,179,255,0.1)";
  const textPrimary   = isDark ? "#e8f4f0"  : "#e0f2ff";
  const textMuted     = isDark ? "rgba(232,244,240,0.5)"   : "rgba(224,242,255,0.48)";
  const gridColor     = isDark ? "rgba(255,255,255,0.025)" : "rgba(99,179,255,0.03)";
  const sectionAccent = isDark ? "#00ffb4"  : "#fbbf24";
  const endLabel      = isDark ? "rgba(255,255,255,0.15)"  : "rgba(251,191,36,0.2)";
  const headerBg      = isDark ? "rgba(255,255,255,0.02)"  : "rgba(255,255,255,0.03)";

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <Box
      id="education"
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
          07 /
        </Typography>
        <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: textMuted, letterSpacing: "0.08em" }}>
          education.json
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
          Edu<span style={{ color: sectionAccent }}>cation</span>
        </Typography>
        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: textMuted, letterSpacing: "0.06em" }}>
          {"// academic.sort((a, b) => b.year - a.year)"}
        </Typography>
      </Box>

      {/* timeline */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{
          position: "absolute",
          left: { xs: 10, md: 18 }, top: 0, bottom: 0, width: "1px",
          background: `linear-gradient(to bottom, ${cardBorder}, ${cardBorder} 80%, transparent)`,
          zIndex: 0,
        }} />

        {educationData.map((edu, i) => {
          const accent = isDark ? edu.accentDark : edu.accentLight;
          return (
            <Box key={i} sx={{
              display: "flex",
              gap: { xs: 3, md: 5 },
              mb: i < educationData.length - 1 ? { xs: 6, md: 8 } : 0,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-20px)",
              transition: `all 0.7s ease ${0.2 + i * 0.15}s`,
              position: "relative",
            }}>
              {/* dot */}
              <Box sx={{
                flexShrink: 0, width: { xs: 20, md: 36 },
                display: "flex", flexDirection: "column", alignItems: "center",
                pt: "4px", zIndex: 1,
              }}>
                <Box sx={{
                  width: { xs: 12, md: 14 }, height: { xs: 12, md: 14 },
                  borderRadius: "50%", background: accent,
                  border: `3px solid ${bg}`,
                  boxShadow: `0 0 0 1px ${accent}`,
                  flexShrink: 0,
                }} />
              </Box>

              {/* card */}
              <Box sx={{
                flex: 1, border: `1px solid ${cardBorder}`,
                borderRadius: "8px", background: cardBg, overflow: "hidden",
                transition: "border-color 0.25s ease",
                "&:hover": { borderColor: accent },
              }}>
                {/* top bar */}
                <Box sx={{
                  px: { xs: 2.5, md: 3 }, py: 2,
                  borderBottom: `1px solid ${cardBorder}`,
                  background: headerBg,
                  display: "flex", flexWrap: "wrap",
                  justifyContent: "space-between", alignItems: "flex-start", gap: 1.5,
                }}>
                  <Box>
                    <Typography sx={{
                      fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                      fontSize: { xs: "1rem", md: "1.15rem" },
                      color: textPrimary, lineHeight: 1.2, mb: 0.4,
                    }}>
                      {edu.degree}
                    </Typography>
                    <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: accent, fontWeight: 600 }}>
                      {edu.field}
                    </Typography>
                    <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.82rem", color: textMuted, mt: 0.3 }}>
                      {edu.university}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "flex-start", sm: "flex-end" }, gap: 0.6 }}>
                    {/* status badge */}
                    <Box sx={{
                      display: "inline-flex", alignItems: "center", gap: 0.7,
                      px: 1.2, py: 0.3,
                      border: `1px solid ${accent}44`, borderRadius: "3px",
                      background: `${accent}0f`,
                    }}>
                      <Box sx={{ width: 5, height: 5, borderRadius: "50%", background: accent }} />
                      <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: accent, letterSpacing: "0.06em" }}>
                        {edu.status}
                      </Typography>
                    </Box>
                    <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: textMuted, letterSpacing: "0.04em" }}>
                      {edu.duration}
                    </Typography>
                    <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: textMuted }}>
                      📍 {edu.location}
                    </Typography>
                  </Box>
                </Box>

                {/* CGPA bar */}
                <Box sx={{ px: { xs: 2.5, md: 3 }, pt: 2, pb: 0.5, display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: textMuted, letterSpacing: "0.06em", flexShrink: 0 }}>
                    cgpa //
                  </Typography>
                  <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: accent, fontWeight: 700, letterSpacing: "0.04em", flexShrink: 0 }}>
                    {edu.cgpa}
                  </Typography>
                  <Box sx={{ flex: 1, height: "3px", borderRadius: "2px", background: cardBorder, overflow: "hidden" }}>
                    <Box sx={{
                      height: "100%",
                      width: visible ? edu.cgpaPercent : "0%",
                      background: accent, borderRadius: "2px",
                      transition: `width 1.4s ease ${0.4 + i * 0.15}s`,
                    }} />
                  </Box>
                </Box>

                {/* highlights */}
                <Box sx={{ px: { xs: 2.5, md: 3 }, pt: 1.5, pb: 2.5, display: "flex", flexDirection: "column", gap: 1.1 }}>
                  {edu.highlights.map((point, pi) => (
                    <Box key={pi} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                      <Box sx={{ width: 5, height: 5, borderRadius: "50%", background: accent, opacity: 0.65, flexShrink: 0, mt: "7px" }} />
                      <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontSize: { xs: "0.85rem", md: "0.9rem" }, lineHeight: 1.72, color: textMuted }}>
                        {point}
                      </Typography>
                    </Box>
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
        opacity: visible ? 1 : 0, transition: "all 0.7s ease 0.8s",
      }}>
        <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: endLabel, letterSpacing: "0.08em" }}>
          end_of_section
        </Typography>
      </Box>
    </Box>
  );
};

export default Education;