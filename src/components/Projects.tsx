
import React, { useState } from "react";
import { Box, Typography, Chip, useTheme } from "@mui/material";
import GitHubIcon    from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const PROJECTS = [
  {
    num:"01", name:"Azure End-to-End Data Lakehouse",
    category:"Data Engineering · Azure",
    image:"/images/azure_lakehouse_project_image.svg",
    summary:"Architected a production-grade lakehouse on Azure using ADF for orchestration, Databricks + PySpark for large-scale transformation, Delta Lake for ACID-compliant storage, and Synapse Analytics for BI-ready serving. Implemented parameterised ADF pipelines, schema enforcement, and automated data quality checks across bronze, silver, and gold layers.",
    skills:["Azure Data Factory","Azure Databricks","Delta Lake","Azure Synapse","ADLS Gen2","PySpark","Python","SQL"],
    accentD:"#00ffb4", accentL:"#fbbf24", github:"#", live:"",
  },
  {
    num:"02", name:"Modern Data Warehouse — dbt + Snowflake",
    category:"Data Engineering · Cloud",
    image:"/images/dbt_snowflake_dwh_project_image.svg",
    summary:"Designed a multi-layer data warehouse in Snowflake using dbt for staging, intermediate, and mart transformations. Built incremental models, snapshot tracking for SCD Type 2, source freshness checks, and schema tests. Integrated AWS S3 and Glue for scalable raw data ingestion into Snowflake external stages.",
    skills:["Snowflake","dbt","AWS S3","AWS Glue","SQL","Data Modeling","ETL/ELT","Snapshots"],
    accentD:"#60a5fa", accentL:"#93c5fd", github:"#", live:"",
  },
  {
    num:"03", name:"Real-Time Streaming Pipeline — Kafka + PySpark",
    category:"Data Engineering · Streaming",
    image:"/images/kafka_pyspark_streaming_project_image.svg",
    summary:"Built a real-time event streaming pipeline using Apache Kafka as the message broker and PySpark Structured Streaming for stateful processing. Consumed from Azure Event Hubs Kafka endpoint, transformed and aggregated events, and sinked to both Snowflake and ADLS Gen2 via Delta Lake. Orchestrated with Apache Airflow.",
    skills:["Apache Kafka","PySpark","Azure Event Hubs","Apache Airflow","Delta Lake","Snowflake","Docker","Python"],
    accentD:"#fbbf24", accentL:"#fb923c", github:"#", live:"",
  },
  {
    num:"04", name:"GCP Data Pipeline — BigQuery + Dataflow",
    category:"Data Engineering · GCP",
    image:"/images/gcp_bigquery_dataflow_project_image.svg",
    summary:"Engineered a batch and streaming data pipeline on GCP using Cloud Storage as the landing zone, Dataflow for distributed data processing, and BigQuery as the analytical warehouse. Orchestrated multi-step workflows with Cloud Composer (Airflow) and implemented Pub/Sub-triggered pipeline execution for near-real-time ingestion.",
    skills:["BigQuery","Dataflow","Cloud Composer","Pub/Sub","GCS","Apache Beam","Python","SQL"],
    accentD:"#a78bfa", accentL:"#a78bfa", github:"#", live:"",
  },
  {
    num:"05", name:"AWS Multi-Cloud ETL Platform",
    category:"Data Engineering · AWS",
    image:"/images/aws_etl_project_image.svg",
    summary:"Built a scalable multi-cloud ETL platform on AWS using S3 as the data lake, Glue for distributed Spark-based transformations, EMR for large-scale PySpark workloads, and Redshift as the analytical warehouse. Orchestrated end-to-end workflows with Step Functions and Lambda event triggers. Provisioned all infrastructure via Terraform IaC with GitHub Actions CI/CD.",
    skills:["AWS S3","AWS Glue","AWS EMR","Amazon Redshift","AWS Lambda","Step Functions","PySpark","Terraform","Docker","Python","SQL"],
    accentD:"#f9a8d4", accentL:"#f9a8d4", github:"#", live:"",
  },
  {
    num:"06", name:"DataOps — Quality, Governance & Observability",
    category:"Data Engineering · DataOps",
    image:"/images/dataops_project_image.svg",
    summary:"Designed and deployed a DataOps framework enforcing data quality, lineage, and observability across a multi-cloud data platform. Implemented Great Expectations validation suites as mandatory pipeline build gates, dbt schema tests with slim-CI in GitHub Actions, and automated Slack and PagerDuty alerting for SLA breaches. Reduced data quality incidents by 40% and MTTR from 2 hours to 30 minutes.",
    skills:["Great Expectations","dbt","Apache Airflow","Azure Monitor","CloudWatch","Docker","Terraform","GitHub Actions","Python","SQL"],
    accentD:"#34d399", accentL:"#34d399", github:"#", live:"",
  },
];

const Projects: React.FC = () => {
  const theme = useTheme();
  const D = theme.palette.mode === "dark";
  const [hov, setHov] = useState<number | null>(null);

  const bg      = D ? "#05090e" : "#0d1b2a";
  const cardBg  = D ? "rgba(255,255,255,0.03)"  : "rgba(255,255,255,0.04)";
  const border  = D ? "rgba(255,255,255,0.07)"  : "rgba(99,179,255,0.1)";
  const head    = D ? "#e8f4f0"                 : "#e0f2ff";
  const muted   = D ? "rgba(232,244,240,0.5)"   : "rgba(224,242,255,0.48)";
  const grid    = D ? "rgba(0,255,180,0.03)"    : "rgba(99,179,255,0.04)";
  const a0      = D ? "#00ffb4"                 : "#fbbf24";
  const end     = D ? "rgba(0,255,180,0.2)"     : "rgba(251,191,36,0.2)";
  const overlay = D ? "rgba(5,9,14,0.85)"       : "rgba(13,27,42,0.7)";
  const badge   = D ? "rgba(5,9,14,0.82)"       : "rgba(13,27,42,0.75)";
  const chipBg  = D ? "rgba(255,255,255,0.05)"  : "rgba(255,255,255,0.05)";

  return (
    <Box id="projects" sx={{
      position: "relative", backgroundColor: bg, overflow: "hidden",
      py: { xs: 8, md: 12 }, px: { xs: 3, sm: 5, md: 10, lg: 16 },
    }}>
      {/* grid */}
      <Box sx={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(${grid} 1px,transparent 1px),linear-gradient(90deg,${grid} 1px,transparent 1px)`,
        backgroundSize: "44px 44px",
      }} />

      {/* label */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 6, position: "relative" }}>
        <Typography sx={{ fontFamily: "'Space Mono',monospace", fontSize: "0.65rem", color: a0, letterSpacing: "0.12em" }}>
          06 /
        </Typography>
        <Box sx={{ flex: 1, height: "1px", background: border }} />
        <Typography sx={{ fontFamily: "'Space Mono',monospace", fontSize: "0.65rem", color: muted, letterSpacing: "0.08em" }}>
          projects.index
        </Typography>
      </Box>

      {/* heading */}
      <Box sx={{ mb: 10, position: "relative" }}>
        <Typography sx={{
          fontFamily: "'Outfit',sans-serif", fontWeight: 900,
          fontSize: { xs: "2.4rem", sm: "3rem", md: "3.6rem" },
          lineHeight: 0.95, letterSpacing: "-0.03em", color: head, mb: 1,
        }}>
          Selected{" "}
          <Box component="span" sx={{ color: a0 }}>Projects</Box>
        </Typography>
        <Typography sx={{ fontFamily: "'Space Mono',monospace", fontSize: "0.72rem", color: muted, letterSpacing: "0.06em" }}>
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
        {PROJECTS.map((p, i) => {
          const ac = D ? p.accentD : p.accentL;
          const isH = hov === i;
          return (
            <Box
              key={i}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              sx={{
                border: `1px solid ${isH ? ac : border}`,
                borderRadius: "8px", background: cardBg,
                overflow: "hidden", display: "flex", flexDirection: "column",
                transition: "border-color 0.22s, box-shadow 0.22s",
                boxShadow: isH ? `0 16px 48px rgba(0,0,0,0.55), 0 0 0 1px ${ac}22` : "none",
              }}
            >
              {/* image */}
              <Box sx={{
                position: "relative", height: 180, overflow: "hidden",
                borderBottom: `1px solid ${border}`, flexShrink: 0,
              }}>
                <Box
                  component="img" src={p.image} alt={p.name}
                  sx={{
                    width: "100%", height: "100%", objectFit: "cover", display: "block",
                    transition: "transform 0.5s",
                    transform: isH ? "scale(1.05)" : "scale(1)",
                    filter: "brightness(0.72)",
                  }}
                />
                <Box sx={{
                  position: "absolute", inset: 0,
                  background: `linear-gradient(to top, ${overlay} 0%, transparent 60%)`,
                }} />
                {/* number badge */}
                <Box sx={{
                  position: "absolute", top: 12, left: 12,
                  px: 1, py: 0.3, border: `1px solid ${ac}55`,
                  borderRadius: "3px", background: badge, backdropFilter: "blur(8px)",
                }}>
                  <Typography sx={{ fontFamily: "'Space Mono',monospace", fontSize: "0.58rem", color: ac, letterSpacing: "0.08em" }}>
                    {p.num}
                  </Typography>
                </Box>
                {/* category badge */}
                <Box sx={{
                  position: "absolute", top: 12, right: 12,
                  px: 1, py: 0.3, border: `1px solid ${border}`,
                  borderRadius: "3px", background: badge, backdropFilter: "blur(8px)",
                }}>
                  <Typography sx={{ fontFamily: "'Space Mono',monospace", fontSize: "0.55rem", color: muted, letterSpacing: "0.05em" }}>
                    {p.category}
                  </Typography>
                </Box>
              </Box>

              {/* body */}
              <Box sx={{ p: { xs: 2, md: 2.5 }, flex: 1, display: "flex", flexDirection: "column", gap: 1.5 }}>
                {/* title + links */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 1 }}>
                  <Typography sx={{
                    fontFamily: "'Outfit',sans-serif", fontWeight: 800,
                    fontSize: { xs: "1rem", md: "1.05rem" },
                    color: isH ? ac : head, lineHeight: 1.25, transition: "color 0.2s",
                  }}>
                    {p.name}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 0.8, flexShrink: 0 }}>
                    {p.github && (
                      <Box component="a" href={p.github} target="_blank" aria-label="GitHub"
                        sx={{ width: 28, height: 28, border: `1px solid ${border}`, borderRadius: "5px", display: "flex", alignItems: "center", justifyContent: "center", color: muted, textDecoration: "none", transition: "all 0.18s", "&:hover": { borderColor: ac, color: ac } }}>
                        <GitHubIcon sx={{ fontSize: 14 }} />
                      </Box>
                    )}
                    {p.live && (
                      <Box component="a" href={p.live} target="_blank" aria-label="Live"
                        sx={{ width: 28, height: 28, border: `1px solid ${border}`, borderRadius: "5px", display: "flex", alignItems: "center", justifyContent: "center", color: muted, textDecoration: "none", transition: "all 0.18s", "&:hover": { borderColor: ac, color: ac } }}>
                        <OpenInNewIcon sx={{ fontSize: 14 }} />
                      </Box>
                    )}
                  </Box>
                </Box>

                {/* summary */}
                <Typography sx={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: { xs: "0.82rem", md: "0.85rem" },
                  lineHeight: 1.72, color: muted, flex: 1,
                }}>
                  {p.summary}
                </Typography>

                <Box sx={{ height: "1px", background: border }} />

                {/* chips */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.7 }}>
                  {p.skills.map((s) => (
                    <Chip key={s} label={s} size="small" sx={{
                      fontFamily: "'Outfit',sans-serif", fontWeight: 600,
                      fontSize: "0.65rem", height: 22, borderRadius: "3px",
                      background: chipBg, color: muted, border: `1px solid ${border}`,
                      "& .MuiChip-label": { px: 0.8 },
                      "&:hover": { color: ac, borderColor: ac },
                      transition: "all 0.18s", cursor: "default",
                    }} />
                  ))}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* bottom */}
      <Box sx={{ mt: 10, display: "flex", alignItems: "center", gap: 2, position: "relative" }}>
        <Box sx={{ flex: 1, height: "1px", background: border }} />
        <Typography sx={{ fontFamily: "'Space Mono',monospace", fontSize: "0.6rem", color: end, letterSpacing: "0.08em" }}>
          end_of_section
        </Typography>
      </Box>
    </Box>
  );
};

export default Projects;