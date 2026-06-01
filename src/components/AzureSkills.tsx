import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";

const categories = [
  {
    label: "Azure Data Platform",
    prefix: "01",
    accentDark: "#00ffb4",
    accentLight: "#fbbf24",
    skills: [
      { name: "Azure Data Factory", icon: "https://img.icons8.com/color/96/azure-1.png" },
      { name: "Azure Databricks",   icon: "https://img.icons8.com/color/96/azure-1.png" },
      { name: "Azure Synapse",      icon: "https://img.icons8.com/color/96/azure-1.png" },
      { name: "ADLS Gen2",          icon: "https://img.icons8.com/color/96/azure-1.png" },
      { name: "Azure Event Hubs",   icon: "https://img.icons8.com/color/96/azure-1.png" },
      { name: "Azure SQL",          icon: "https://img.icons8.com/color/96/azure-1.png" },
      { name: "Cosmos DB",          icon: "https://img.icons8.com/color/96/azure-1.png" },
      { name: "Azure Purview",      icon: "https://img.icons8.com/color/96/azure-1.png" },
      { name: "Azure DevOps",       icon: "https://img.icons8.com/color/96/azure-1.png" },
    ],
  },
  {
    label: "Warehousing & Transformation",
    prefix: "02",
    accentDark: "#60a5fa",
    accentLight: "#93c5fd",
    skills: [
      { name: "Snowflake",        icon: "https://img.icons8.com/color/96/snowflake.png" },
      { name: "dbt",              icon: "https://img.icons8.com/color/96/database.png" },
      { name: "Delta Lake",       icon: "https://img.icons8.com/color/96/database.png" },
      { name: "Data Modeling",    icon: "https://img.icons8.com/color/96/flow-chart.png" },
      { name: "Data Warehousing", icon: "https://img.icons8.com/color/96/data-configuration.png" },
      { name: "ETL / ELT",        icon: "https://img.icons8.com/color/96/data-configuration.png" },
    ],
  },
  {
    label: "Processing & Streaming",
    prefix: "03",
    accentDark: "#fbbf24",
    accentLight: "#fb923c",
    skills: [
      { name: "Apache Spark",   icon: "https://img.icons8.com/color/96/apache-spark.png" },
      { name: "PySpark",        icon: "https://img.icons8.com/color/96/python.png" },
      { name: "Apache Kafka",   icon: "https://img.icons8.com/color/96/data-in-both-directions.png" },
      { name: "Apache Airflow", icon: "https://img.icons8.com/color/96/workflow.png" },
      { name: "Python",         icon: "https://img.icons8.com/color/96/python.png" },
      { name: "SQL",            icon: "https://img.icons8.com/color/96/sql.png" },
      { name: "Docker",         icon: "https://img.icons8.com/color/96/docker.png" },
    ],
  },
];

const AzureSkills: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  // ── Tokens — navy+gold light / black+green dark ───────────────
  // Primary bg tier (same as Home, Projects)
  const bg          = isDark ? "#05090e"  : "#0d1b2a";
  const cardBg      = isDark ? "rgba(255,255,255,0.03)"  : "rgba(255,255,255,0.04)";
  const cardBorder  = isDark ? "rgba(255,255,255,0.07)"  : "rgba(99,179,255,0.1)";
  const textPrimary = isDark ? "#e8f4f0"  : "#e0f2ff";
  const textMuted   = isDark ? "rgba(232,244,240,0.5)"   : "rgba(224,242,255,0.48)";
  const gridColor   = isDark ? "rgba(0,255,180,0.03)"    : "rgba(99,179,255,0.04)";
  const accent      = isDark ? "#00ffb4"  : "#fbbf24";
  const endLabel    = isDark ? "rgba(0,255,180,0.2)"     : "rgba(251,191,36,0.2)";

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.06 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <Box
      id="azure-skills"
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
        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: accent, letterSpacing: "0.12em" }}>
          04 /
        </Typography>
        <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: textMuted, letterSpacing: "0.08em" }}>
          azure_skills.config
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
          Azure <span style={{ color: accent }}>Data Engineering</span>
        </Typography>
        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: textMuted, letterSpacing: "0.06em" }}>
          {"// microsoft_stack.filter(s => s.tier === \"azure\")"}
        </Typography>
      </Box>

      {/* categories */}
      <Box sx={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 7 }}>
        {categories.map((cat, ci) => {
          const catAccent = isDark ? cat.accentDark : cat.accentLight;
          return (
            <Box key={cat.label} sx={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: `all 0.7s ease ${0.15 + ci * 0.12}s`,
            }}>
              {/* category header */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
                <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", color: textMuted }}>
                  {cat.prefix}
                </Typography>
                <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: catAccent, flexShrink: 0 }} />
                <Typography sx={{
                  fontFamily: "'Space Mono', monospace", fontWeight: 700,
                  fontSize: "0.68rem", color: catAccent, letterSpacing: "0.1em", textTransform: "uppercase",
                }}>
                  {cat.label}
                </Typography>
                <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
                <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", color: textMuted }}>
                  {cat.skills.length}_tools
                </Typography>
              </Box>

              {/* skill cards */}
              <Box sx={{
                display: "grid",
                gridTemplateColumns: { xs: "repeat(3,1fr)", sm: "repeat(4,1fr)", md: "repeat(5,1fr)", lg: "repeat(7,1fr)" },
                gap: 1.5,
              }}>
                {cat.skills.map((skill) => {
                  const key = `${ci}-${skill.name}`;
                  const isHov = hovered === key;
                  return (
                    <Box
                      key={skill.name}
                      onMouseEnter={() => setHovered(key)}
                      onMouseLeave={() => setHovered(null)}
                      sx={{
                        border: `1px solid ${isHov ? catAccent : cardBorder}`,
                        borderRadius: "6px",
                        background: isHov ? "rgba(255,255,255,0.08)" : cardBg,
                        p: { xs: 1.5, md: 2 },
                        display: "flex", flexDirection: "column", alignItems: "center", gap: 1,
                        cursor: "default",
                        transition: "all 0.2s ease",
                        transform: isHov ? "translateY(-4px)" : "translateY(0)",
                        boxShadow: isHov
                          ? `0 10px 28px rgba(0,0,0,0.45), 0 0 0 1px ${catAccent}33`
                          : "none",
                      }}
                    >
                      <Box component="img" src={skill.icon} alt={skill.name} sx={{
                        width: { xs: 32, md: 38 }, height: { xs: 32, md: 38 },
                        objectFit: "contain", display: "block",
                        filter: !isHov ? "brightness(0.82) saturate(0.75)" : "none",
                        transition: "filter 0.2s ease",
                      }} />
                      <Typography sx={{
                        fontFamily: "'Outfit', sans-serif", fontWeight: 600,
                        fontSize: { xs: "0.6rem", sm: "0.65rem", md: "0.7rem" },
                        color: isHov ? catAccent : textMuted,
                        textAlign: "center", lineHeight: 1.25, transition: "color 0.2s ease",
                      }}>
                        {skill.name}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* bottom line */}
      <Box sx={{
        mt: 10, display: "flex", alignItems: "center", gap: 2,
        opacity: visible ? 1 : 0, transition: "all 0.7s ease 0.9s",
      }}>
        <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: endLabel, letterSpacing: "0.08em" }}>
          end_of_section
        </Typography>
      </Box>
    </Box>
  );
};

export default AzureSkills;