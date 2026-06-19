import { Box, Typography, Chip, useTheme } from "@mui/material";

const experiences = [
  {
    role: "Data Engineer",
    company: "Digiuniv Technologies",
    location: "Hyderabad, India",
    duration: "Jun 2023 – Jul 2024",
    type: "Full-time",
    cloud: "Azure · AWS · GCP",
    accentDark: "#00ffb4",
    accentLight: "#fbbf24",
    tintDark: "rgba(0,255,180,0.04)",
    tintLight: "rgba(251,191,36,0.05)",
    description: [
      "Architected a metadata-driven Azure Data Factory framework replacing hardcoded pipelines with JSON-config-driven ADF workflows across 40+ linked services — cutting new source onboarding from days to hours.",
      "Elevated PySpark workloads in Azure Databricks with broadcast joins, predicate pushdown, and AQE on top of Delta Lake Medallion Architecture (Bronze → Silver → Gold) — reducing pipeline latency by 50%.",
      "Owned the dbt transformation layer in Snowflake with staging/intermediate/mart conventions, schema test coverage, SCD Type 2 snapshots, and CI/CD-gated deployment via GitHub Actions — reducing data quality incidents by 40%.",
      "Built the organisation's first Kafka + PySpark Structured Streaming pipeline processing 5M+ events/day with exactly-once semantics consuming from Azure Event Hubs and sinking to Azure Synapse Analytics.",
      "Migrated Airflow to dynamic DAG generation on GCP Cloud Composer spanning BigQuery, Dataflow, and AWS Glue — cutting MTTR from 2 hours to 30 minutes.",
      "Containerised all pipeline services with Docker, integrated Azure DevOps CI/CD, and provisioned infrastructure via Terraform IaC.",
      "Established Great Expectations validation suites as mandatory pipeline build gates, catching anomalies before they reached downstream reporting.",
      "Mentored 3 junior engineers through code reviews, architecture walkthroughs, and pair-programming sessions.",
    ],
    skills: [
      "Azure Data Factory","Azure Databricks","Azure Synapse","ADLS Gen2","Azure Event Hubs",
      "Azure DevOps","Delta Lake","Delta Live Tables","Snowflake","dbt","PySpark",
      "Apache Kafka","Apache Airflow","BigQuery","Dataflow","Cloud Composer",
      "AWS S3","AWS Glue","Amazon Redshift","AWS EMR","Docker","Terraform",
      "Python","SQL","Data Modeling","Great Expectations","CI/CD","Git",
    ],
  },
  {
    role: "Associate Data Engineer",
    company: "Blocysite",
    location: "Hyderabad, India",
    duration: "Mar 2022 – Jun 2023",
    type: "Full-time",
    cloud: "Azure · Snowflake · Databricks",
    accentDark: "#60a5fa",
    accentLight: "#93c5fd",
    tintDark: "rgba(96,165,250,0.04)",
    tintLight: "rgba(147,197,253,0.05)",
    description: [
      "Stepped into full ownership of end-to-end data pipelines — built dynamic ADF workflows with JSON-driven configuration scaling across multiple data sources without code changes.",
      "Implemented Medallion Architecture (Bronze, Silver, Gold) with Delta Lake on ADLS Gen2 using PySpark in Azure Databricks — type casting, null handling, derived columns, and multi-source joins.",
      "Served business-ready data through Azure Synapse Serverless SQL Pool via OPENROWSET, SQL Views, and External Tables with Managed Identity authentication connected directly to Power BI.",
      "Led dbt development in Snowflake — staging, intermediate, and mart layers with schema tests and incremental strategies cutting full-refresh runtimes by ~60%.",
      "Built real-time streaming pipelines with Apache Kafka and PySpark Structured Streaming for high-volume event data with exactly-once delivery.",
      "Owned Airflow DAG development with SLA monitoring, dynamic pipeline generation, and failure alerting.",
      "Containerised pipeline services with Docker and CI/CD integration; implemented automated data quality frameworks.",
    ],
    skills: [
      "Azure Data Factory","Azure Databricks","Azure Synapse Analytics","ADLS Gen2",
      "Delta Lake","Snowflake","dbt","PySpark","Apache Kafka","Apache Airflow",
      "Power BI","Python","SQL","Data Modeling","Star Schema","Docker","CI/CD","Git",
    ],
  },
  {
    role: "Data Engineering Intern",
    company: "Blocysite",
    location: "Hyderabad, India",
    duration: "Jun 2021 – Mar 2022",
    type: "Internship",
    cloud: "AWS · GCP · Snowflake",
    accentDark: "#f9a8d4",
    accentLight: "#f9a8d4",
    tintDark: "rgba(249,168,212,0.04)",
    tintLight: "rgba(249,168,212,0.05)",
    description: [
      "Assisted senior engineers building ETL pipelines on AWS (S3, Glue, Lambda, Step Functions) and GCP (Cloud Storage, BigQuery, Pub/Sub) — hands-on exposure to production-scale data movement.",
      "Wrote and maintained Airflow DAGs for multi-step workflows across AWS Glue and BigQuery load jobs with dependency management and Slack failure alerting.",
      "Contributed to dbt model development in Snowflake — SQL transformations, schema tests, and incremental materialisation patterns under senior guidance.",
      "Developed PySpark scripts on AWS EMR for deduplication, null-handling, and schema enforcement on large datasets.",
      "Built Python utilities for data quality validation and row-count reconciliation between source and target.",
    ],
    skills: [
      "Python","SQL","PySpark","Apache Airflow","Apache Kafka","Snowflake","dbt",
      "AWS S3","AWS Glue","AWS Lambda","AWS EMR","Step Functions",
      "BigQuery","Cloud Storage","Pub/Sub","Docker","Data Quality","Git",
    ],
  },
];

export default function Experience() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // ── only the BG changes — everything else is original theme ──
  const bg          = isDark ? "#000000"                       : "#ffffff";
  const cardBg      = isDark ? "rgba(255,255,255,0.04)"        : "rgba(0,0,0,0.02)";
  const cardBorder  = isDark ? "rgba(255,255,255,0.08)"        : "rgba(0,0,0,0.08)";
  const textPrimary = isDark ? "#e8f4f0"                       : "#0f172a";
  const textMuted   = isDark ? "rgba(232,244,240,0.55)"        : "rgba(15,23,42,0.55)";
  const gridColor   = isDark ? "rgba(255,255,255,0.03)"        : "rgba(0,0,0,0.03)";
  const endLabel    = isDark ? "rgba(255,255,255,0.15)"        : "rgba(0,0,0,0.15)";
  const badgeBg     = isDark ? "rgba(255,255,255,0.05)"        : "rgba(0,0,0,0.04)";
  const chipBg      = isDark ? "rgba(255,255,255,0.05)"        : "rgba(0,0,0,0.04)";
  const chipHover   = isDark ? "rgba(255,255,255,0.1)"         : "rgba(0,0,0,0.08)";
  const accent0     = isDark ? "#00ffb4"                       : "#2563eb";

  return (
    <>
      <style>{`
        @keyframes _fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        @keyframes _slideIn {
          from { opacity:0; transform:translateX(-14px); }
          to   { opacity:1; transform:translateX(0);     }
        }
      `}</style>

      <Box
        id="experience"
        sx={{
          position: "relative",
          backgroundColor: bg,
          py: { xs: 8, md: 12 },
          px: { xs: 2.5, sm: 4, md: 10, lg: 16 },
          overflow: "hidden",
        }}
      >
        {/* ── grid overlay ── */}
        <Box sx={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(${gridColor} 1px,transparent 1px),
                            linear-gradient(90deg,${gridColor} 1px,transparent 1px)`,
          backgroundSize: "44px 44px",
        }} />

        {/* ── section label ── */}
        <Box sx={{
          display: "flex", alignItems: "center", gap: 2, mb: 6,
          animation: "_fadeUp 0.6s ease both",
        }}>
          <Typography sx={{
            fontFamily: "'Space Mono',monospace",
            fontSize: "0.65rem", color: accent0, letterSpacing: "0.12em",
          }}>
            03 /
          </Typography>
          <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
          <Typography sx={{
            fontFamily: "'Space Mono',monospace",
            fontSize: "0.65rem", color: textMuted, letterSpacing: "0.08em",
          }}>
            experience.json
          </Typography>
        </Box>

        {/* ── heading ── */}
        <Box sx={{ mb: { xs: 6, md: 10 }, animation: "_fadeUp 0.7s 0.1s ease both" }}>
          <Typography sx={{
            fontFamily: "'Outfit',sans-serif", fontWeight: 900,
            fontSize: { xs: "2.2rem", sm: "3rem", md: "3.6rem" },
            lineHeight: 0.95, letterSpacing: "-0.03em",
            color: textPrimary, mb: 1,
          }}>
            Work{" "}
            <Box component="span" sx={{ color: accent0 }}>Experience</Box>
          </Typography>
          <Typography sx={{
            fontFamily: "'Space Mono',monospace",
            fontSize: "0.72rem", color: textMuted, letterSpacing: "0.06em",
          }}>
            {"// roles.filter(r => r.impact === \"high\")"}
          </Typography>
        </Box>

        {/* ── cards ── */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 4, md: 5 } }}>
          {experiences.map((exp, i) => {
            const accent = isDark ? exp.accentDark : exp.accentLight;
            const tint   = isDark ? exp.tintDark   : exp.tintLight;
            return (
              <Box
                key={i}
                sx={{
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "8px",
                  background: cardBg,
                  overflow: "hidden",
                  transition: "border-color 0.25s",
                  "&:hover": { borderColor: accent },
                  animation: `_slideIn 0.7s ${0.2 + i * 0.15}s ease both`,
                }}
              >
                {/* top stripe */}
                <Box sx={{ height: "3px", background: accent, opacity: 0.85 }} />

                {/* header */}
                <Box sx={{
                  px: { xs: 2.5, md: 3 }, py: { xs: 2, md: 2.5 },
                  borderBottom: `1px solid ${cardBorder}`,
                  background: tint,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: { xs: 1.5, sm: 1 },
                }}>
                  <Box>
                    <Typography sx={{
                      fontFamily: "'Outfit',sans-serif", fontWeight: 800,
                      fontSize: { xs: "1rem", md: "1.15rem" },
                      color: textPrimary, lineHeight: 1.2, mb: 0.3,
                    }}>
                      {exp.role}
                    </Typography>
                    <Typography sx={{
                      fontFamily: "'Outfit',sans-serif",
                      fontSize: { xs: "0.8rem", md: "0.85rem" },
                      color: accent, fontWeight: 600,
                    }}>
                      {exp.company}
                    </Typography>
                  </Box>

                  <Box sx={{
                    display: "flex",
                    flexDirection: { xs: "row", sm: "column" },
                    alignItems: { xs: "center", sm: "flex-end" },
                    flexWrap: "wrap",
                    gap: { xs: 1.5, sm: 0.5 },
                    flexShrink: 0,
                  }}>
                    <Box sx={{
                      display: "inline-flex", alignItems: "center", gap: 0.7,
                      px: 1.2, py: 0.3,
                      border: `1px solid ${cardBorder}`, borderRadius: "3px",
                      background: badgeBg,
                    }}>
                      <Box sx={{ width: 5, height: 5, borderRadius: "50%", background: accent }} />
                      <Typography sx={{
                        fontFamily: "'Space Mono',monospace",
                        fontSize: "0.58rem", color: textMuted, letterSpacing: "0.06em",
                      }}>
                        {exp.type}
                      </Typography>
                    </Box>
                    <Typography sx={{
                      fontFamily: "'Space Mono',monospace",
                      fontSize: "0.6rem", color: textMuted,
                    }}>
                      {exp.duration}
                    </Typography>
                    <Typography sx={{
                      fontFamily: "'Space Mono',monospace",
                      fontSize: "0.58rem", color: textMuted,
                    }}>
                      📍 {exp.location}
                    </Typography>
                  </Box>
                </Box>

                {/* stack */}
                <Box sx={{
                  px: { xs: 2.5, md: 3 }, pt: 1.5, pb: 0.5,
                  display: "flex", alignItems: "center", gap: 1,
                }}>
                  <Typography sx={{
                    fontFamily: "'Space Mono',monospace",
                    fontSize: "0.58rem", color: textMuted,
                  }}>
                    stack //
                  </Typography>
                  <Typography sx={{
                    fontFamily: "'Space Mono',monospace",
                    fontSize: "0.62rem", color: accent, fontWeight: 700,
                  }}>
                    {exp.cloud}
                  </Typography>
                </Box>

                {/* bullets */}
                <Box sx={{ px: { xs: 2.5, md: 3 }, pt: 1.5, pb: 2.5 }}>
                  {exp.description.map((pt, j) => (
                    <Box key={j} sx={{
                      display: "flex", gap: 1.5, alignItems: "flex-start",
                      mb: j < exp.description.length - 1 ? 1 : 0,
                    }}>
                      <Box sx={{
                        width: 4, height: 4, borderRadius: "50%", mt: "9px",
                        background: accent, opacity: 0.65, flexShrink: 0,
                      }} />
                      <Typography sx={{
                        fontFamily: "'Outfit',sans-serif",
                        fontSize: { xs: "0.83rem", md: "0.89rem" },
                        lineHeight: 1.72, color: textMuted, wordBreak: "break-word",
                      }}>
                        {pt}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* chips */}
                <Box sx={{
                  px: { xs: 2.5, md: 3 }, pb: 2.5, pt: 2,
                  borderTop: `1px solid ${cardBorder}`,
                  display: "flex", flexWrap: "wrap", gap: 0.8,
                }}>
                  {exp.skills.map((s) => (
                    <Chip key={s} label={s} size="small" sx={{
                      fontFamily: "'Outfit',sans-serif", fontWeight: 600,
                      fontSize: { xs: "0.6rem", md: "0.67rem" },
                      height: 22, borderRadius: "3px",
                      background: chipBg, color: textMuted,
                      border: `1px solid ${cardBorder}`,
                      "& .MuiChip-label": { px: 0.8 },
                      "&:hover": { background: chipHover, color: accent, borderColor: accent },
                      transition: "all 0.18s", cursor: "default",
                    }} />
                  ))}
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* ── bottom rule ── */}
        <Box sx={{
          mt: 8, display: "flex", alignItems: "center", gap: 2,
          animation: "_fadeUp 0.6s 0.7s ease both",
        }}>
          <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
          <Typography sx={{
            fontFamily: "'Space Mono',monospace",
            fontSize: "0.6rem", color: endLabel, letterSpacing: "0.08em",
          }}>
            end_of_section
          </Typography>
        </Box>
      </Box>
    </>
  );
}