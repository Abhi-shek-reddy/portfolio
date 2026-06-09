import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";

const DV = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const I8 = "https://img.icons8.com/color/96";

const categories = [
  {
    label: "Languages & Scripting",
    prefix: "01",
    accentDark: "#f472b6",
    accentLight: "#ec4899",
    skills: [
      { name: "Python",  icon: `${DV}/python/python-original.svg` },
      { name: "SQL",     icon: `${I8}/sql.png` },
      { name: "Scala",   icon: `${DV}/scala/scala-original.svg` },
      { name: "Bash",    icon: `${DV}/linux/linux-original.svg` },
      { name: "YAML",    icon: `${I8}/code.png` },
    ],
  },
  {
    label: "Azure Data Platform",
    prefix: "02",
    accentDark: "#00ffb4",
    accentLight: "#fbbf24",
    skills: [
      { name: "Azure Data Factory",  icon: `${DV}/azure/azure-original.svg` },
      { name: "Azure Databricks",    icon: `${DV}/azure/azure-original.svg` },
      { name: "Azure Synapse",       icon: `${DV}/azure/azure-original.svg` },
      { name: "ADLS Gen2",           icon: `${DV}/azure/azure-original.svg` },
      { name: "Azure Event Hubs",    icon: `${DV}/azure/azure-original.svg` },
      { name: "Azure SQL",           icon: `${DV}/azure/azure-original.svg` },
      { name: "Cosmos DB",           icon: `${DV}/azure/azure-original.svg` },
      { name: "Azure Purview",       icon: `${DV}/azure/azure-original.svg` },
      { name: "Azure DevOps",        icon: `${DV}/azure/azure-original.svg` },
      { name: "Azure Monitor",       icon: `${DV}/azure/azure-original.svg` },
      { name: "Microsoft Fabric",    icon: `${DV}/azure/azure-original.svg` },
      { name: "Power BI",            icon: `${I8}/power-bi.png` },
    ],
  },
  {
    label: "AWS",
    prefix: "03",
    accentDark: "#fb923c",
    accentLight: "#f97316",
    skills: [
      { name: "AWS S3",         icon: `${I8}/amazon-web-services.png` },
      { name: "AWS Glue",       icon: `${I8}/amazon-web-services.png` },
      { name: "AWS Lambda",     icon: `${I8}/amazon-web-services.png` },
      { name: "AWS EMR",        icon: `${I8}/amazon-web-services.png` },
      { name: "AWS Redshift",   icon: `${I8}/amazon-web-services.png` },
      { name: "Step Functions", icon: `${I8}/amazon-web-services.png` },
      { name: "CloudWatch",     icon: `${I8}/amazon-web-services.png` },
      { name: "AWS IAM",        icon: `${I8}/amazon-web-services.png` },
      { name: "Kinesis",        icon: `${I8}/amazon-web-services.png` },
    ],
  },
  {
    label: "GCP",
    prefix: "04",
    accentDark: "#60a5fa",
    accentLight: "#3b82f6",
    skills: [
      { name: "BigQuery",       icon: `${DV}/googlecloud/googlecloud-original.svg` },
      { name: "Cloud Storage",  icon: `${DV}/googlecloud/googlecloud-original.svg` },
      { name: "Pub/Sub",        icon: `${DV}/googlecloud/googlecloud-original.svg` },
      { name: "Cloud Composer", icon: `${DV}/googlecloud/googlecloud-original.svg` },
      { name: "Dataflow",       icon: `${DV}/googlecloud/googlecloud-original.svg` },
      { name: "Vertex AI",      icon: `${DV}/googlecloud/googlecloud-original.svg` },
    ],
  },
  {
    label: "Warehousing & Transformation",
    prefix: "05",
    accentDark: "#a78bfa",
    accentLight: "#7c3aed",
    skills: [
      { name: "Snowflake",         icon: `${I8}/snowflake.png` },
      { name: "dbt",               icon: `${I8}/database.png` },
      { name: "Delta Lake",        icon: `${I8}/database.png` },
      { name: "Unity Catalog",     icon: `${I8}/data-configuration.png` },
      { name: "Data Modeling",     icon: `${I8}/flow-chart.png` },
      { name: "Star Schema",       icon: `${I8}/data-configuration.png` },
      { name: "Medallion Arch",    icon: `${I8}/data-configuration.png` },
      { name: "ETL / ELT",         icon: `${I8}/data-configuration.png` },
      { name: "Delta Live Tables", icon: `${I8}/database.png` },
    ],
  },
  {
    label: "Processing & Streaming",
    prefix: "06",
    accentDark: "#fbbf24",
    accentLight: "#d97706",
    skills: [
      { name: "Apache Spark",    icon: `${I8}/apache-spark.png` },
      { name: "PySpark",         icon: `${DV}/python/python-original.svg` },
      { name: "Apache Kafka",    icon: `${I8}/data-in-both-directions.png` },
      { name: "Apache Airflow",  icon: `${I8}/workflow.png` },
      { name: "Spark Streaming", icon: `${I8}/apache-spark.png` },
      { name: "Kafka Streams",   icon: `${I8}/data-in-both-directions.png` },
    ],
  },
  {
    label: "DevOps & Infrastructure",
    prefix: "07",
    accentDark: "#34d399",
    accentLight: "#059669",
    skills: [
      { name: "Docker",             icon: `${DV}/docker/docker-original.svg` },
      { name: "Kubernetes",         icon: `${DV}/kubernetes/kubernetes-plain.svg` },
      { name: "Terraform",          icon: `${DV}/terraform/terraform-original.svg` },
      { name: "GitHub Actions",     icon: `${DV}/github/github-original.svg` },
      { name: "Git",                icon: `${DV}/git/git-original.svg` },
      { name: "CI/CD",              icon: `${I8}/workflow.png` },
      { name: "Great Expectations", icon: `${I8}/test-tube.png` },
    ],
  },
  {
    label: "Databases",
    prefix: "08",
    accentDark: "#67e8f9",
    accentLight: "#0891b2",
    skills: [
      { name: "PostgreSQL", icon: `${DV}/postgresql/postgresql-original.svg` },
      { name: "MySQL",      icon: `${DV}/mysql/mysql-original.svg` },
      { name: "SQL Server", icon: `${I8}/microsoft-sql-server.png` },
      { name: "MongoDB",    icon: `${DV}/mongodb/mongodb-original.svg` },
      { name: "DynamoDB",   icon: `${I8}/amazon-web-services.png` },
      { name: "Redis",      icon: `${DV}/redis/redis-original.svg` },
    ],
  },
];

const Skills: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

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
      { threshold: 0.04 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const totalSkills = categories.reduce((sum, c) => sum + c.skills.length, 0);

  return (
    <Box
      id="skills"
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
          skills.config
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
          Tech <span style={{ color: accent }}>Stack</span>
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3, mt: 1.5, flexWrap: "wrap" }}>
          <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: textMuted, letterSpacing: "0.06em" }}>
            {"// skills.filter(s => s.production === true)"}
          </Typography>
          <Box sx={{
            display: "inline-flex", alignItems: "center", gap: 0.8,
            px: 1.5, py: 0.4,
            border: `1px solid ${cardBorder}`, borderRadius: "3px",
            background: "rgba(255,255,255,0.03)",
          }}>
            <Box sx={{ width: 5, height: 5, borderRadius: "50%", background: accent }} />
            <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: textMuted, letterSpacing: "0.06em" }}>
              {totalSkills}_skills · {categories.length}_categories
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* categories */}
      <Box sx={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 7 }}>
        {categories.map((cat, ci) => {
          const catAccent = isDark ? cat.accentDark : cat.accentLight;
          return (
            <Box key={cat.label} sx={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: `all 0.7s ease ${0.15 + ci * 0.1}s`,
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
                gridTemplateColumns: {
                  xs: "repeat(3,1fr)",
                  sm: "repeat(4,1fr)",
                  md: "repeat(6,1fr)",
                  lg: "repeat(8,1fr)",
                },
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
                      <Box
                        component="img"
                        src={skill.icon}
                        alt={skill.name}
                        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                          e.currentTarget.src = `${I8}/code.png`;
                        }}
                        sx={{
                          width: { xs: 28, md: 34 }, height: { xs: 28, md: 34 },
                          objectFit: "contain", display: "block",
                          filter: !isHov ? "brightness(0.78) saturate(0.65)" : "none",
                          transition: "filter 0.2s ease",
                        }}
                      />
                      <Typography sx={{
                        fontFamily: "'Outfit', sans-serif", fontWeight: 600,
                        fontSize: { xs: "0.58rem", sm: "0.62rem", md: "0.68rem" },
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
        opacity: visible ? 1 : 0, transition: "all 0.7s ease 1.2s",
      }}>
        <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: endLabel, letterSpacing: "0.08em" }}>
          end_of_section
        </Typography>
      </Box>
    </Box>
  );
};

export default Skills;