// import { useState } from "react";
// import { Box, Typography, Chip, useTheme } from "@mui/material";

// const experiences = [
//   {
//     role: "Data Engineer",
//     company: "Digiuniv Technologies",
//     location: "Hyderabad, India",
//     duration: "Jul 2023 – Jul 2024",
//     type: "Full-time",
//     cloud: "Azure · AWS · GCP",
//     description: [
//       "Architected and deployed production-grade pipelines on Azure Data Factory with 40+ linked services connecting ADLS Gen2, Azure SQL, and Cosmos DB — replacing fragile cron-based scripts with event-driven, parameterised ADF pipelines.",
//       "Built Azure Databricks notebooks and PySpark jobs for large-scale transformation workloads on ADLS Gen2 data lakes, leveraging Delta Lake for ACID-compliant incremental loads and time-travel auditing.",
//       "Developed dbt projects in Snowflake — staging, intermediate, and mart layers with schema tests, source freshness checks, and incremental materialisation strategies that cut full-refresh runtimes by ~60%.",
//       "Engineered real-time streaming pipelines using Apache Kafka and PySpark Structured Streaming, consuming from Azure Event Hubs Kafka endpoint and sinking processed events to Azure Synapse Analytics.",
//       "Owned Airflow DAG development on GCP Cloud Composer for cross-cloud orchestration spanning BigQuery, Dataflow, and AWS Glue jobs — with SLA alerting and retry logic.",
//       "Containerised all pipeline services with Docker and integrated deployments into Azure DevOps CI/CD pipelines with environment-specific variable groups.",
//     ],
//     skills: [
//       "Azure Data Factory","Azure Databricks","Azure Synapse","ADLS Gen2",
//       "Azure Event Hubs","Azure DevOps","Delta Lake",
//       "Snowflake","dbt","PySpark","Apache Kafka","Apache Airflow",
//       "BigQuery","Dataflow","Cloud Composer",
//       "AWS S3","AWS Glue","Amazon Redshift",
//       "Docker","Python","SQL","Data Modeling",
//     ],
//     accentIdx: 0,
//   },
//   {
//     role: "Data Engineering Intern",
//     company: "Digiuniv Technologies",
//     location: "Hyderabad, India",
//     duration: "Jul 2022 – Jun 2023",
//     type: "Internship",
//     cloud: "AWS · GCP · Snowflake",
//     description: [
//       "Assisted senior engineers in building ETL pipelines on AWS (S3, Glue, Lambda, Step Functions) and GCP (Cloud Storage, BigQuery, Pub/Sub) — gaining hands-on exposure to how data moves at production scale.",
//       "Wrote and maintained Airflow DAGs to schedule and monitor multi-step workflows across AWS Glue and BigQuery load jobs, implementing dependency management and failure alerting via Slack webhooks.",
//       "Contributed to dbt model development in Snowflake — wrote SQL transformations, added generic and singular tests, and learned incremental materialisation patterns under senior guidance.",
//       "Developed PySpark scripts for large-dataset processing on AWS EMR clusters, including deduplication, null-handling, and schema enforcement jobs.",
//       "Explored Kafka consumer/producer patterns for event streaming use cases and used Docker to maintain reproducible local development environments.",
//       "Built Python utilities for data quality validation, row-count reconciliation between source and target, and automated pipeline alerting.",
//     ],
//     skills: [
//       "Python","SQL","PySpark","Apache Airflow","Apache Kafka",
//       "Snowflake","dbt",
//       "AWS S3","AWS Glue","AWS Lambda","AWS EMR","Step Functions",
//       "BigQuery","Cloud Storage","Pub/Sub",
//       "Docker","Data Pipelines","Data Quality","Git",
//     ],
//     accentIdx: 1,
//   },
//   {
//     role: "Full Stack Developer Intern",
//     company: "Blockysite",
//     location: "Hyderabad, India",
//     duration: "Jan 2022 – Jun 2022",
//     type: "Internship",
//     cloud: "Web · APIs · React",
//     description: [
//       "Built responsive landing pages and a full-featured admin dashboard with dynamic data tables, server-side filtering and pagination, Chart.js visualisations, and role-based access control.",
//       "Developed RESTful backend APIs using Python, Django, and Flask — implementing CRUD operations, business logic layers, and JWT-based authentication with refresh-token rotation.",
//       "Integrated frontend (React + TypeScript) with backend APIs using Axios, managing global auth state with React Context and caching API responses to reduce redundant network calls.",
//       "Designed and managed PostgreSQL schemas, wrote migration scripts, and optimised slow queries with proper indexing and query analysis.",
//     ],
//     skills: [
//       "React","TypeScript","JavaScript","HTML5","CSS3","Tailwind CSS",
//       "Python","Django","Flask","REST APIs",
//       "PostgreSQL","JWT Authentication","Axios",
//       "Bootstrap","Git","GitHub",
//     ],
//     accentIdx: 2,
//   },
// ];

// // Per-card accents — vivid on both dark substrates
// const ACCENTS_DARK  = ["#00ffb4", "#60a5fa", "#f9a8d4"];
// const ACCENTS_LIGHT = ["#fbbf24", "#93c5fd", "#f9a8d4"];

// export default function Experience() {
//   const theme = useTheme();
//   const isDark = theme.palette.mode === "dark";
// const [visible] = useState(true);

//   // ── Tokens — navy+gold light / black+green dark ───────────────
//   const bg          = isDark ? "#080f14"  : "#091420";   // alternate tier
//   const cardBg      = isDark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.04)";
//   const cardBorder  = isDark ? "rgba(255,255,255,0.07)"  : "rgba(99,179,255,0.1)";
//   const textPrimary = isDark ? "#e8f4f0"  : "#e0f2ff";
//   const textMuted   = isDark ? "rgba(232,244,240,0.5)"   : "rgba(224,242,255,0.48)";
//   const gridColor   = isDark ? "rgba(255,255,255,0.025)" : "rgba(99,179,255,0.03)";
//   const endLabel    = isDark ? "rgba(255,255,255,0.15)"  : "rgba(251,191,36,0.2)";
//   const badgeBg     = isDark ? "rgba(255,255,255,0.04)"  : "rgba(255,255,255,0.06)";
//   const chipBg      = isDark ? "rgba(255,255,255,0.05)"  : "rgba(255,255,255,0.05)";
//   const chipHoverBg = isDark ? "rgba(255,255,255,0.1)"   : "rgba(255,255,255,0.1)";

//   const accent0 = isDark ? ACCENTS_DARK[0] : ACCENTS_LIGHT[0];

//   // Card header tint per accent index
//   const headerTints: Record<number, string> = isDark
//     ? { 0: "rgba(0,255,180,0.04)",  1: "rgba(96,165,250,0.04)",  2: "rgba(249,168,212,0.04)" }
//     : { 0: "rgba(251,191,36,0.05)", 1: "rgba(147,197,253,0.05)", 2: "rgba(249,168,212,0.05)" };



//   return (
//     <Box
//       id="experience"
      
//       sx={{
//         position: "relative",
//         backgroundColor: bg,
//         py: { xs: 8, md: 12 },
//         px: { xs: 3, sm: 5, md: 10, lg: 16 },
//         overflow: "visible",
//       }}
//     >
//       {/* grid */}
//       <Box sx={{
//         position: "absolute", inset: 0, pointerEvents: "none",
//         backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
//         backgroundSize: "44px 44px",
//       }} />

//       {/* section label */}
//       <Box sx={{
//         display: "flex", alignItems: "center", gap: 2, mb: 6,
//         opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)",
//         transition: "all 0.6s ease",
//       }}>
//         <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: accent0, letterSpacing: "0.12em" }}>
//           03 /
//         </Typography>
//         <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
//         <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: textMuted, letterSpacing: "0.08em" }}>
//           experience.json
//         </Typography>
//       </Box>

//       {/* heading */}
//       <Box sx={{
//         mb: 10,
//         opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
//         transition: "all 0.7s ease 0.1s",
//       }}>
//         <Typography sx={{
//           fontFamily: "'Outfit', sans-serif", fontWeight: 900,
//           fontSize: { xs: "2.4rem", sm: "3rem", md: "3.6rem" },
//           lineHeight: 0.95, letterSpacing: "-0.03em", color: textPrimary, mb: 1,
//         }}>
//           Work <span style={{ color: accent0 }}>Experience</span>
//         </Typography>
//         <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: textMuted, letterSpacing: "0.06em" }}>
//           {"// roles.filter(r => r.impact === \"high\")"}
//         </Typography>
//       </Box>

//       {/* timeline */}
//       <Box sx={{ position: "relative", zIndex: 1 }}>
//         <Box sx={{
//           position: "absolute",
//           left: { xs: 10, md: 18 }, top: 0, bottom: 0, width: "1px",
//           background: `linear-gradient(to bottom, ${cardBorder}, ${cardBorder} 80%, transparent)`,
//           zIndex: 0,
//         }} />

//         {experiences.map((exp, i) => {
//           const cardAccent = isDark ? ACCENTS_DARK[exp.accentIdx] : ACCENTS_LIGHT[exp.accentIdx];
//           return (
//             <Box key={i} sx={{
//               display: "flex",
//               gap: { xs: 3, md: 5 },
//               mb: i < experiences.length - 1 ? { xs: 6, md: 8 } : 0,
//               opacity: visible ? 1 : 0,
//               transform: visible ? "translateX(0)" : "translateX(-20px)",
//               transition: `all 0.7s ease ${0.2 + i * 0.15}s`,
//               position: "relative",
//             }}>
//               {/* dot */}
//               <Box sx={{
//                 flexShrink: 0, width: { xs: 20, md: 36 },
//                 display: "flex", flexDirection: "column", alignItems: "center",
//                 pt: "2px", zIndex: 1,
//               }}>
//                 <Box sx={{
//                   width: { xs: 12, md: 14 }, height: { xs: 12, md: 14 },
//                   borderRadius: "50%", background: cardAccent,
//                   border: `3px solid ${bg}`,
//                   boxShadow: `0 0 0 1px ${cardAccent}`,
//                   flexShrink: 0,
//                 }} />
//               </Box>

//               {/* card */}
//               <Box sx={{
//                 flex: 1, border: `1px solid ${cardBorder}`,
//                 borderRadius: "8px", background: cardBg, overflow: "hidden",
//                 transition: "border-color 0.25s ease",
//                 "&:hover": { borderColor: cardAccent },
//               }}>
//                 {/* top bar */}
//                 <Box sx={{
//                   px: { xs: 2.5, md: 3 }, py: 2,
//                   borderBottom: `1px solid ${cardBorder}`,
//                   background: headerTints[exp.accentIdx] ?? "rgba(255,255,255,0.03)",
//                   display: "flex", flexWrap: "wrap",
//                   justifyContent: "space-between", alignItems: "flex-start", gap: 1.5,
//                 }}>
//                   <Box>
//                     <Typography sx={{
//                       fontFamily: "'Outfit', sans-serif", fontWeight: 800,
//                       fontSize: { xs: "1rem", md: "1.15rem" },
//                       color: textPrimary, lineHeight: 1.2, mb: 0.4,
//                     }}>
//                       {exp.role}
//                     </Typography>
//                     <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: cardAccent, fontWeight: 600 }}>
//                       {exp.company}
//                     </Typography>
//                   </Box>
//                   <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "flex-start", sm: "flex-end" }, gap: 0.5 }}>
//                     <Box sx={{
//                       display: "inline-flex", alignItems: "center", gap: 0.7,
//                       px: 1.2, py: 0.3,
//                       border: `1px solid ${cardBorder}`, borderRadius: "3px",
//                       background: badgeBg,
//                     }}>
//                       <Box sx={{ width: 5, height: 5, borderRadius: "50%", background: cardAccent }} />
//                       <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: textMuted, letterSpacing: "0.06em" }}>
//                         {exp.type}
//                       </Typography>
//                     </Box>
//                     <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: textMuted, letterSpacing: "0.04em" }}>
//                       {exp.duration}
//                     </Typography>
//                     <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: textMuted }}>
//                       📍 {exp.location}
//                     </Typography>
//                   </Box>
//                 </Box>

//                 {/* cloud */}
//                 <Box sx={{ px: { xs: 2.5, md: 3 }, pt: 2, pb: 0.5, display: "flex", alignItems: "center", gap: 1 }}>
//                   <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", color: textMuted, letterSpacing: "0.06em" }}>
//                     stack //
//                   </Typography>
//                   <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: cardAccent, fontWeight: 700, letterSpacing: "0.05em" }}>
//                     {exp.cloud}
//                   </Typography>
//                 </Box>

//                 {/* bullets */}
//                 <Box sx={{ px: { xs: 2.5, md: 3 }, pt: 1.5, pb: 2.5, display: "flex", flexDirection: "column", gap: 1.2 }}>
//                   {exp.description.map((point, pi) => (
//                     <Box key={pi} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
//                       <Box sx={{ width: 5, height: 5, borderRadius: "50%", background: cardAccent, opacity: 0.7, flexShrink: 0, mt: "7px" }} />
//                       <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontSize: { xs: "0.85rem", md: "0.9rem" }, lineHeight: 1.72, color: textMuted }}>
//                         {point}
//                       </Typography>
//                     </Box>
//                   ))}
//                 </Box>

//                 {/* chips */}
//                 <Box sx={{ px: { xs: 2.5, md: 3 }, pb: 2.5, borderTop: `1px solid ${cardBorder}`, pt: 2, display: "flex", flexWrap: "wrap", gap: 0.8 }}>
//                   {exp.skills.map((skill, si) => (
//                     <Chip key={si} label={skill} size="small" sx={{
//                       fontFamily: "'Outfit', sans-serif", fontWeight: 600,
//                       fontSize: "0.68rem", height: 24, borderRadius: "3px",
//                       background: chipBg, color: textMuted,
//                       border: `1px solid ${cardBorder}`,
//                       "& .MuiChip-label": { px: 1 },
//                       "&:hover": { background: chipHoverBg, color: cardAccent, borderColor: cardAccent },
//                       transition: "all 0.18s ease", cursor: "default",
//                     }} />
//                   ))}
//                 </Box>
//               </Box>
//             </Box>
//           );
//         })}
//       </Box>

//       {/* bottom line */}
//       <Box sx={{
//         mt: 10, display: "flex", alignItems: "center", gap: 2,
//         opacity: visible ? 1 : 0, transition: "all 0.7s ease 0.8s",
//       }}>
//         <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
//         <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: endLabel, letterSpacing: "0.08em" }}>
//           end_of_section
//         </Typography>
//       </Box>
//     </Box>
//   );
// }
import { Box, Typography, Chip, useTheme } from "@mui/material";

const experiences = [
  {
    role: "Data Engineer",
    company: "Digiuniv Technologies",
    location: "Hyderabad, India",
    duration: "Oct 2021 – Jul 2024",
    type: "Full-time",
    cloud: "Azure · AWS · GCP",
    accent: "#2563eb",
    tag: "DE",
    description: [
      "Architected a metadata-driven Azure Data Factory framework — replaced hardcoded pipelines with JSON-config-driven, parameterised ADF workflows using Lookup, ForEach, and Copy Activities across 40+ linked services connecting ADLS Gen2, Azure SQL, and Cosmos DB, cutting new data-source onboarding from days to hours.",
      "Elevated PySpark workloads in Azure Databricks from functional to performant — introduced broadcast joins, predicate pushdown, and Adaptive Query Execution (AQE) on top of Delta Lake Medallion Architecture (Bronze → Silver → Gold), reducing pipeline latency by 50%.",
      "Owned the dbt transformation layer in Snowflake — established staging/intermediate/mart conventions, mandatory schema test coverage, snapshot-based SCD Type 2 history, and CI/CD-gated deployment via GitHub Actions, reducing data quality incidents by 40%.",
      "Built the organisation's first production Kafka + PySpark Structured Streaming pipeline — processing 5M+ events/day with exactly-once semantics, watermarking for late-arriving events, consuming from Azure Event Hubs and sinking to Azure Synapse Analytics.",
      "Owned Airflow DAG architecture — migrated to dynamic DAG generation on GCP Cloud Composer spanning BigQuery, Dataflow, and AWS Glue jobs, cutting MTTR from 2 hours to 30 minutes.",
      "Containerised all pipeline services with Docker, integrated Azure DevOps CI/CD pipelines, and provisioned all infrastructure via Terraform IaC.",
      "Implemented Great Expectations validation suites as mandatory pipeline build gates, catching anomalies before they reached downstream reporting.",
      "Mentored 3 junior engineers through code reviews, architecture walkthroughs, and pair-programming sessions.",
    ],
    skills: [
      "Azure Data Factory","Azure Databricks","Azure Synapse","ADLS Gen2",
      "Azure Event Hubs","Delta Lake","Delta Live Tables","Snowflake","dbt",
      "PySpark","Apache Kafka","Apache Airflow","BigQuery","Dataflow",
      "AWS S3","AWS Glue","Amazon Redshift","Docker","Terraform",
      "Python","SQL","Great Expectations","CI/CD","Git",
    ],
  },
  {
    role: "Associate Data Engineer",
    company: "Digiuniv Technologies",
    location: "Hyderabad, India",
    duration: "Jun 2020 – Oct 2021",
    type: "Full-time",
    cloud: "Azure · Snowflake · Databricks",
    accent: "#7c3aed",
    tag: "ADE",
    description: [
      "Stepped into full ownership of end-to-end data pipelines — built dynamic Azure Data Factory pipelines using Lookup, ForEach, and Copy Activities with JSON-driven configuration and parameterised datasets, scaling pipelines across multiple data sources without code changes.",
      "Transformed data at scale using PySpark in Azure Databricks — implemented the Medallion Architecture (Bronze, Silver, Gold) with Delta Lake on Azure Data Lake Gen2, applying type casting, null handling, derived columns, and multi-source joins.",
      "Served business-ready data through Azure Synapse Analytics Serverless SQL Pool — designed OPENROWSET queries, SQL Views, and External Tables with Managed Identity authentication, connected directly to Power BI.",
      "Led dbt development in Snowflake — designed staging, intermediate, and mart layers with schema tests, source freshness checks, and incremental materialisation strategies that cut full-refresh runtimes by ~60%.",
      "Built real-time streaming pipelines using Apache Kafka and PySpark Structured Streaming — processing high-volume event data with low latency and exactly-once delivery guarantees.",
      "Owned Airflow DAG development for orchestrating multi-step workflows with SLA monitoring, dynamic pipeline generation, and failure alerting.",
      "Containerised pipeline services using Docker with CI/CD integration; implemented automated data quality frameworks.",
    ],
    skills: [
      "Azure Data Factory","Azure Databricks","Azure Synapse Analytics","ADLS Gen2",
      "Delta Lake","Snowflake","dbt","PySpark","Apache Kafka","Apache Airflow",
      "Power BI","Python","SQL","Data Modeling","Star Schema","Docker","Git",
    ],
  },
  {
    role: "Data Engineering Intern",
    company: "Digiuniv Technologies",
    location: "Hyderabad, India",
    duration: "Apr 2020 – Jun 2020",
    type: "Internship",
    cloud: "AWS · GCP · Snowflake",
    accent: "#059669",
    tag: "INT",
    description: [
      "Assisted senior engineers in building ETL pipelines on AWS (S3, Glue, Lambda, Step Functions) and GCP (Cloud Storage, BigQuery, Pub/Sub) — gaining hands-on exposure to production-scale data movement.",
      "Wrote and maintained Airflow DAGs to schedule and monitor multi-step workflows across AWS Glue and BigQuery load jobs, implementing dependency management and failure alerting via Slack webhooks.",
      "Contributed to dbt model development in Snowflake — wrote SQL transformations, added generic and singular tests, and learned incremental materialisation patterns under senior guidance.",
      "Developed PySpark scripts for large-dataset processing on AWS EMR clusters including deduplication, null-handling, and schema enforcement jobs.",
      "Built Python utilities for data quality validation, row-count reconciliation between source and target, and automated pipeline alerting.",
    ],
    skills: [
      "Python","SQL","PySpark","Apache Airflow","Snowflake","dbt",
      "AWS S3","AWS Glue","AWS Lambda","AWS EMR","BigQuery","Docker","Git",
    ],
  },
];

export default function Experience() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // Light theme tokens
  const pageBg    = isDark ? "#0f172a" : "#ffffff";
  const sectionBg = isDark ? "#0f172a" : "#ffffff";
  const cardBg    = isDark ? "#1e293b" : "#f8fafc";
  const cardBorder= isDark ? "#334155" : "#e2e8f0";
  const headColor = isDark ? "#f1f5f9" : "#0f172a";
  const bodyColor = isDark ? "#94a3b8" : "#475569";
  const mutedColor= isDark ? "#64748b" : "#94a3b8";
  const chipBg    = isDark ? "#1e293b" : "#f1f5f9";
  const chipText  = isDark ? "#94a3b8" : "#475569";
  const chipBorder= isDark ? "#334155" : "#e2e8f0";
  const lineBg    = isDark ? "#334155" : "#e2e8f0";

  return (
    <>
      <style>{`
        @keyframes xFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .exp-card { animation: xFadeUp 0.5s ease both; }
        .exp-card:nth-child(1) { animation-delay: 0.05s; }
        .exp-card:nth-child(2) { animation-delay: 0.15s; }
        .exp-card:nth-child(3) { animation-delay: 0.25s; }
      `}</style>

      <Box
        id="experience"
        sx={{
          backgroundColor: sectionBg,
          py: { xs: 7, md: 11 },
          px: { xs: 2, sm: 4, md: 8, lg: 14 },
        }}
      >
        {/* ── Section header ── */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography sx={{
            fontSize: "0.72rem", fontWeight: 600,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "#2563eb", mb: 1.5,
            fontFamily: "monospace",
          }}>
            03 · Work Experience
          </Typography>
          <Typography sx={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 800,
            fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" },
            lineHeight: 1.05, letterSpacing: "-0.02em",
            color: headColor,
          }}>
            Career{" "}
            <Box component="span" sx={{ color: "#2563eb" }}>Timeline</Box>
          </Typography>
          <Typography sx={{
            mt: 1.5,
            fontSize: "0.95rem", color: bodyColor, lineHeight: 1.6,
            maxWidth: 520,
          }}>
            4+ years building production-grade data platforms — from first ETL script to owning enterprise architecture.
          </Typography>
        </Box>

        {/* ── Cards ── */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 3, md: 4 } }}>
          {experiences.map((exp, i) => (
            <Box
              key={i}
              className="exp-card"
              sx={{
                border: `1px solid ${cardBorder}`,
                borderRadius: "12px",
                background: cardBg,
                overflow: "hidden",
                transition: "box-shadow 0.2s ease, border-color 0.2s ease",
                "&:hover": {
                  borderColor: exp.accent + "66",
                  boxShadow: `0 4px 24px ${exp.accent}18`,
                },
              }}
            >
              {/* top accent stripe */}
              <Box sx={{ height: "3px", background: exp.accent }} />

              {/* header */}
              <Box sx={{
                px: { xs: 2.5, md: 3 }, py: { xs: 2, md: 2.5 },
                borderBottom: `1px solid ${cardBorder}`,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" },
                gap: { xs: 1.5, sm: 0 },
              }}>
                {/* left: role + company */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  {/* avatar tag */}
                  <Box sx={{
                    width: 44, height: 44,
                    borderRadius: "10px",
                    background: exp.accent + "18",
                    border: `1.5px solid ${exp.accent}44`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Typography sx={{
                      fontSize: "0.6rem", fontWeight: 700,
                      fontFamily: "monospace", color: exp.accent,
                      letterSpacing: "0.04em",
                    }}>
                      {exp.tag}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{
                      fontFamily: "'Outfit', sans-serif", fontWeight: 700,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      color: headColor, lineHeight: 1.2,
                    }}>
                      {exp.role}
                    </Typography>
                    <Typography sx={{
                      fontSize: "0.85rem", fontWeight: 600,
                      color: exp.accent, mt: 0.2,
                    }}>
                      {exp.company}
                    </Typography>
                  </Box>
                </Box>

                {/* right: meta */}
                <Box sx={{
                  display: "flex",
                  flexDirection: { xs: "row", sm: "column" },
                  alignItems: { xs: "center", sm: "flex-end" },
                  gap: { xs: 1.5, sm: 0.4 },
                  flexWrap: "wrap",
                }}>
                  {/* type badge */}
                  <Box sx={{
                    px: 1.2, py: 0.3,
                    borderRadius: "6px",
                    background: exp.accent + "15",
                    border: `1px solid ${exp.accent}33`,
                    display: "inline-flex", alignItems: "center", gap: 0.6,
                  }}>
                    <Box sx={{ width: 5, height: 5, borderRadius: "50%", background: exp.accent }} />
                    <Typography sx={{ fontSize: "0.62rem", fontWeight: 600, color: exp.accent, fontFamily: "monospace" }}>
                      {exp.type}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "0.75rem", color: bodyColor, fontFamily: "monospace" }}>
                    {exp.duration}
                  </Typography>
                  <Typography sx={{ fontSize: "0.72rem", color: mutedColor }}>
                    📍 {exp.location}
                  </Typography>
                </Box>
              </Box>

              {/* stack tag */}
              <Box sx={{
                px: { xs: 2.5, md: 3 }, pt: 2, pb: 0.5,
                display: "flex", alignItems: "center", gap: 1,
              }}>
                <Typography sx={{ fontSize: "0.68rem", color: mutedColor, fontFamily: "monospace" }}>
                  stack
                </Typography>
                <Box sx={{ width: 20, height: "1px", background: cardBorder }} />
                <Typography sx={{ fontSize: "0.72rem", fontWeight: 600, color: exp.accent, fontFamily: "monospace" }}>
                  {exp.cloud}
                </Typography>
              </Box>

              {/* bullets */}
              <Box sx={{ px: { xs: 2.5, md: 3 }, pt: 1.5, pb: 2.5, display: "flex", flexDirection: "column", gap: 1 }}>
                {exp.description.map((point, pi) => (
                  <Box key={pi} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                    <Box sx={{
                      width: 5, height: 5, borderRadius: "50%",
                      background: exp.accent, opacity: 0.6,
                      flexShrink: 0, mt: "8px",
                    }} />
                    <Typography sx={{
                      fontSize: { xs: "0.84rem", md: "0.88rem" },
                      color: bodyColor, lineHeight: 1.7,
                      wordBreak: "break-word",
                    }}>
                      {point}
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
                {exp.skills.map((skill, si) => (
                  <Box
                    key={si}
                    sx={{
                      px: 1.1, py: 0.35,
                      borderRadius: "6px",
                      background: chipBg,
                      border: `1px solid ${chipBorder}`,
                      fontSize: { xs: "0.62rem", md: "0.67rem" },
                      fontWeight: 500, color: chipText,
                      lineHeight: 1.4,
                      transition: "all 0.15s ease",
                      cursor: "default",
                      "&:hover": {
                        background: exp.accent + "12",
                        borderColor: exp.accent + "55",
                        color: exp.accent,
                      },
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ── Timeline summary bar ── */}
        <Box sx={{
          mt: { xs: 6, md: 8 },
          p: { xs: 2, md: 2.5 },
          borderRadius: "10px",
          background: isDark ? "#1e293b" : "#f8fafc",
          border: `1px solid ${cardBorder}`,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          gap: { xs: 2, sm: 0 },
          justifyContent: "space-between",
        }}>
          {[
            { label: "Total Experience", value: "4+ years" },
            { label: "Roles", value: "3 positions" },
            { label: "Company", value: "Digiuniv Technologies" },
            { label: "Stack", value: "Azure · AWS · GCP" },
          ].map((item, i) => (
            <Box key={i} sx={{ display: "flex", flexDirection: "column", gap: 0.3 }}>
              <Typography sx={{ fontSize: "0.65rem", color: mutedColor, fontFamily: "monospace", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                {item.label}
              </Typography>
              <Typography sx={{ fontSize: "0.88rem", fontWeight: 600, color: headColor }}>
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}