import React, { useEffect, useMemo, useState } from "react";
import { Box, Typography, Chip, ButtonBase, Dialog, IconButton, useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CloseIcon from "@mui/icons-material/Close";

/* =====================================================================
   PROJECT DATA
   flow   = the stages drawn in the live architecture diagram (keep labels ≤ 10 chars, 4–5 stages)
   impact = optional measurable results (only put real numbers here)
   ===================================================================== */
type Project = {
  slug: string; name: string; category: string; tags: string[];
  image?: string; summary: string; flow: string[]; impact?: string[];
  skills: string[]; accentD: string; accentL: string; github: string; live: string;
};

const PROJECTS: Project[] = [
  {
    // EDIT: draft based on your Tech Impact work — replace with the real details or delete
    slug: "ai-resume-assistant", name: "AI Résumé Assistant",
    category: "AI + Automation", tags: ["ai", "azure"],
    summary: "Built an LLM-powered assistant that turns uploaded résumés into structured, searchable profiles. Power Automate picks up new files, Azure OpenAI extracts skills and writes a summary, results are stored in Cosmos DB, and a Power Apps front end lets reviewers search and compare candidates.",
    flow: ["Uploads", "Automate", "OpenAI", "Cosmos DB", "Power Apps"],
    skills: ["Azure OpenAI", "Power Automate", "Power Apps", "Copilot", "Cosmos DB", "Python", "Prompt Engineering"],
    accentD: "#c084fc", accentL: "#d8b4fe", github: "#", live: "",
  },
  {
    slug: "azure-lakehouse", name: "Azure End-to-End Data Lakehouse",
    category: "Data Engineering / Azure", tags: ["azure"],
    image: "/images/azure_lakehouse_project_image.svg",
    summary: "Architected a production-grade lakehouse on Azure using ADF for orchestration, Databricks + PySpark for large-scale transformation, Delta Lake for ACID-compliant storage, and Synapse Analytics for BI-ready serving. Implemented parameterised ADF pipelines, schema enforcement, and automated data quality checks across bronze, silver, and gold layers.",
    flow: ["Sources", "ADF", "Databricks", "Delta Gold", "Synapse"],
    skills: ["Azure Data Factory", "Azure Databricks", "Delta Lake", "Azure Synapse", "ADLS Gen2", "PySpark", "Python", "SQL"],
    accentD: "#00ffb4", accentL: "#fbbf24", github: "#", live: "",
  },
  {
    slug: "dbt-snowflake", name: "Modern Data Warehouse: dbt + Snowflake",
    category: "Data Engineering / Cloud", tags: ["aws"],
    image: "/images/dbt_snowflake_dwh_project_image.svg",
    summary: "Designed a multi-layer data warehouse in Snowflake using dbt for staging, intermediate, and mart transformations. Built incremental models, snapshot tracking for SCD Type 2, source freshness checks, and schema tests. Integrated AWS S3 and Glue for scalable raw data ingestion into Snowflake external stages.",
    flow: ["S3", "Glue", "Snowflake", "dbt", "Marts"],
    skills: ["Snowflake", "dbt", "AWS S3", "AWS Glue", "SQL", "Data Modeling", "ETL/ELT", "Snapshots"],
    accentD: "#60a5fa", accentL: "#93c5fd", github: "#", live: "",
  },
  {
    slug: "kafka-streaming", name: "Real-Time Streaming: Kafka + PySpark",
    category: "Data Engineering / Streaming", tags: ["streaming", "azure"],
    image: "/images/kafka_pyspark_streaming_project_image.svg",
    summary: "Built a real-time event streaming pipeline using Apache Kafka as the message broker and PySpark Structured Streaming for stateful processing. Consumed from the Azure Event Hubs Kafka endpoint, transformed and aggregated events, and wrote to both Snowflake and ADLS Gen2 via Delta Lake. Orchestrated with Apache Airflow.",
    flow: ["Event Hubs", "Kafka", "PySpark", "Delta", "Snowflake"],
    skills: ["Apache Kafka", "PySpark", "Azure Event Hubs", "Apache Airflow", "Delta Lake", "Snowflake", "Docker", "Python"],
    accentD: "#fbbf24", accentL: "#fb923c", github: "#", live: "",
  },
  {
    slug: "gcp-pipeline", name: "GCP Data Pipeline: BigQuery + Dataflow",
    category: "Data Engineering / GCP", tags: ["gcp", "streaming"],
    image: "/images/gcp_bigquery_dataflow_project_image.svg",
    summary: "Engineered a batch and streaming data pipeline on GCP using Cloud Storage as the landing zone, Dataflow for distributed processing, and BigQuery as the analytical warehouse. Orchestrated multi-step workflows with Cloud Composer (Airflow) and used Pub/Sub-triggered execution for near-real-time ingestion.",
    flow: ["GCS", "Pub/Sub", "Dataflow", "BigQuery"],
    skills: ["BigQuery", "Dataflow", "Cloud Composer", "Pub/Sub", "GCS", "Apache Beam", "Python", "SQL"],
    accentD: "#a78bfa", accentL: "#c4b5fd", github: "#", live: "",
  },
  {
    slug: "aws-etl", name: "AWS Multi-Cloud ETL Platform",
    category: "Data Engineering / AWS", tags: ["aws"],
    image: "/images/aws_etl_project_image.svg",
    summary: "Built a scalable ETL platform on AWS using S3 as the data lake, Glue for Spark-based transformations, EMR for large-scale PySpark workloads, and Redshift as the analytical warehouse. Orchestrated workflows with Step Functions and Lambda event triggers. Provisioned all infrastructure with Terraform and GitHub Actions CI/CD.",
    flow: ["S3", "Lambda", "Glue", "EMR", "Redshift"],
    skills: ["AWS S3", "AWS Glue", "AWS EMR", "Amazon Redshift", "AWS Lambda", "Step Functions", "PySpark", "Terraform", "Docker", "Python", "SQL"],
    accentD: "#f9a8d4", accentL: "#f9a8d4", github: "#", live: "",
  },
  {
    slug: "dataops", name: "DataOps: Quality, Governance & Observability",
    category: "Data Engineering / DataOps", tags: ["dataops"],
    image: "/images/dataops_project_image.svg",
    summary: "Designed and deployed a DataOps framework enforcing data quality, lineage, and observability across a multi-cloud data platform. Implemented Great Expectations validation suites as mandatory pipeline build gates, dbt schema tests with slim CI in GitHub Actions, and automated Slack and PagerDuty alerting for SLA breaches.",
    flow: ["dbt tests", "GX gate", "CI", "Deploy", "Alerts"],
    impact: ["40% fewer data quality incidents", "MTTR cut from 2 hours to 30 minutes"],
    skills: ["Great Expectations", "dbt", "Apache Airflow", "Azure Monitor", "CloudWatch", "Docker", "Terraform", "GitHub Actions", "Python", "SQL"],
    accentD: "#34d399", accentL: "#6ee7b7", github: "#", live: "",
  },
];

const FILTERS = ["all", "azure", "aws", "gcp", "streaming", "ai", "dataops"];

/* ---------- live architecture diagram (pure SVG) ---------- */
const FlowDiagram: React.FC<{
  nodes: string[]; color: string; text: string; faint: string; big?: boolean; animate: boolean; hot?: boolean;
}> = ({ nodes, color, text, faint, big, animate, hot }) => {
  const W = big ? 760 : 340, H = big ? 150 : 104;
  const pad = big ? 70 : 36, nw = big ? 104 : 58, nh = big ? 40 : 28;
  const y = H / 2;
  const xs = nodes.map((_, i) => pad + (i * (W - pad * 2)) / Math.max(nodes.length - 1, 1));
  const dur = nodes.length * (hot ? 0.55 : 0.9);
  const path = `M ${xs[0]} ${y} L ${xs[xs.length - 1]} ${y}`;
  return (
    <Box component="svg" viewBox={`0 0 ${W} ${H}`} sx={{ width: "100%", height: "auto", display: "block" }} aria-hidden>
      <line x1={xs[0]} y1={y} x2={xs[xs.length - 1]} y2={y} stroke={color} strokeOpacity={0.35} strokeWidth={big ? 2 : 1.5} strokeDasharray="4 5" />
      {animate && [0, 1, 2].map(k => (
        <circle key={`${k}-${hot}`} r={big ? 4 : 3} fill={color}>
          <animateMotion dur={`${dur}s`} begin={`${(k * dur) / 3}s`} repeatCount="indefinite" path={path} />
        </circle>
      ))}
      {nodes.map((n, i) => {
        const first = i === 0, last = i === nodes.length - 1;
        return (
          <g key={n + i}>
            <rect x={xs[i] - nw / 2} y={y - nh / 2} width={nw} height={nh} rx={big ? 8 : 6}
              fill={last ? color : "rgba(0,0,0,0.55)"} fillOpacity={last ? 0.2 : 1}
              stroke={color} strokeOpacity={first ? 0.5 : 0.85} strokeWidth={1.2} strokeDasharray={first ? "3 3" : undefined} />
            <text x={xs[i]} y={y + (big ? 4.5 : 3)} textAnchor="middle"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: big ? 12 : 8, fill: text }}>
              {n}
            </text>
            {big && (
              <text x={xs[i]} y={y + nh / 2 + 18} textAnchor="middle"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, fill: faint }}>
                {first ? "source" : last ? "output" : `stage ${i}`}
              </text>
            )}
          </g>
        );
      })}
    </Box>
  );
};

/* ===================================================================== */

const Projects: React.FC = () => {
  const theme = useTheme();
  const D = theme.palette.mode === "dark";
  const [filter, setFilter] = useState("all");
  const [hov, setHov] = useState<number | null>(null);
  const [open, setOpen] = useState<Project | null>(null);
  const [view, setView] = useState<"live" | "image">("live");
  const [reduce, setReduce] = useState(false);

  useEffect(() => { setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);

  const bg     = D ? "#05090e" : "#0d1b2a";
  const cardBg = D ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.04)";
  const deep   = D ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.22)";
  const border = D ? "rgba(255,255,255,0.08)" : "rgba(99,179,255,0.13)";
  const head   = D ? "#e8f4f0" : "#e0f2ff";
  const muted  = D ? "rgba(232,244,240,0.55)" : "rgba(224,242,255,0.52)";
  const faint  = D ? "rgba(232,244,240,0.25)" : "rgba(224,242,255,0.22)";
  const grid   = D ? "rgba(0,255,180,0.03)" : "rgba(99,179,255,0.04)";
  const a0     = D ? "#00ffb4" : "#fbbf24";
  const onA    = D ? "#05090e" : "#0d1b2a";
  const mono = "'Space Mono', monospace";
  const sans = "'Outfit', sans-serif";

  const shown = useMemo(
    () => PROJECTS.filter(p => filter === "all" || p.tags.includes(filter)),
    [filter]
  );
  const count = (f: string) => (f === "all" ? PROJECTS.length : PROJECTS.filter(p => p.tags.includes(f)).length);

  const openCase = (p: Project) => { setView("live"); setOpen(p); };
  const sentences = (s: string) => s.split(/(?<=\.)\s+/).filter(Boolean);

  const IconLink: React.FC<{ href: string; label: string; ac: string; children: React.ReactNode }> = ({ href, label, ac, children }) => (
    <Box component="a" href={href} target="_blank" rel="noopener" aria-label={label}
      sx={{
        width: 32, height: 32, border: `1px solid ${border}`, borderRadius: "6px",
        display: "grid", placeItems: "center", color: muted, transition: "color .18s, border-color .18s",
        "&:hover": { borderColor: ac, color: ac }, "&:focus-visible": { outline: `2px solid ${ac}`, outlineOffset: 2 },
      }}>
      {children}
    </Box>
  );

  const ac = open ? (D ? open.accentD : open.accentL) : a0;

  return (
    <Box id="projects" sx={{
      position: "relative", backgroundColor: bg, overflow: "hidden",
      py: { xs: 8, md: 12 }, px: { xs: 2.5, sm: 5, md: 8, lg: 14 },
      "@keyframes pjIn": { from: { opacity: 0, transform: "translateY(14px) scale(.98)" }, to: { opacity: 1, transform: "none" } },
      "@media (prefers-reduced-motion: reduce)": { "& *": { animation: "none !important", transition: "none !important" } },
    }}>
      {/* grid */}
      <Box sx={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(${grid} 1px,transparent 1px),linear-gradient(90deg,${grid} 1px,transparent 1px)`,
        backgroundSize: "44px 44px",
      }} />

      {/* label */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 6, position: "relative" }}>
        <Typography sx={{ fontFamily: mono, fontSize: "0.65rem", color: a0, letterSpacing: "0.12em" }}>06 /</Typography>
        <Box sx={{ flex: 1, height: "1px", background: border }} />
        <Typography sx={{ fontFamily: mono, fontSize: "0.65rem", color: faint }}>projects/</Typography>
      </Box>

      {/* heading + filters */}
      <Box sx={{ mb: 5, position: "relative" }}>
        <Typography sx={{
          fontFamily: sans, fontWeight: 900, fontSize: { xs: "2.4rem", sm: "3rem", md: "3.6rem" },
          lineHeight: 0.95, letterSpacing: "-0.03em", color: head, mb: 1.2,
        }}>
          Selected <Box component="span" sx={{ color: a0 }}>Projects</Box>
        </Typography>
        <Typography sx={{ fontFamily: sans, fontSize: "1.02rem", color: muted, maxWidth: 560, mb: 3.5 }}>
          Every card is a live architecture diagram. Open one to read how it was built.
        </Typography>

        {/* terminal-style filter */}
        <Box sx={{
          display: "flex", flexWrap: "wrap", alignItems: "center", gap: 0.8,
          p: 1, pl: 1.8, border: `1px solid ${border}`, borderRadius: "8px", background: deep, width: "fit-content", maxWidth: "100%",
        }}>
          <Typography sx={{ fontFamily: mono, fontSize: "0.72rem", color: faint, mr: 0.5 }}>
            <span style={{ color: a0 }}>$</span> ls projects
          </Typography>
          {FILTERS.map(f => {
            const on = filter === f;
            return (
              <ButtonBase key={f} onClick={() => setFilter(f)} aria-pressed={on}
                sx={{
                  fontFamily: mono, fontSize: "0.7rem", px: 1.2, py: 0.5, borderRadius: "5px",
                  color: on ? onA : muted, background: on ? a0 : "transparent",
                  border: `1px solid ${on ? a0 : "transparent"}`, transition: "background .2s, color .2s",
                  "&:hover": { color: on ? onA : head, borderColor: on ? a0 : border },
                  "&.Mui-focusVisible": { outline: `2px solid ${a0}`, outlineOffset: 2 },
                }}>
                --{f} <Box component="span" sx={{ opacity: 0.6, ml: 0.5 }}>{count(f)}</Box>
              </ButtonBase>
            );
          })}
        </Box>
      </Box>

      {/* grid of project cards */}
      <Box key={filter} sx={{
        position: "relative", zIndex: 1, display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }, gap: 2.5,
      }}>
        {shown.map((p, i) => {
          const c = D ? p.accentD : p.accentL;
          const isH = hov === i;
          const extra = p.skills.length - 5;
          return (
            <Box key={p.slug}
              onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
              sx={{
                border: `1px solid ${isH ? c : border}`, borderRadius: "10px", background: cardBg,
                overflow: "hidden", display: "flex", flexDirection: "column",
                transition: "border-color .22s, box-shadow .22s, transform .22s",
                transform: isH ? "translateY(-3px)" : "none",
                boxShadow: isH ? `0 18px 50px rgba(0,0,0,0.5), 0 0 0 1px ${c}22` : "none",
                animation: `pjIn .45s ease ${i * 0.06}s both`,
              }}>
              <ButtonBase onClick={() => openCase(p)} aria-label={`Open case study: ${p.name}`}
                sx={{
                  display: "block", textAlign: "left", width: "100%",
                  "&.Mui-focusVisible": { outline: `2px solid ${c}`, outlineOffset: -2 },
                }}>
                {/* live diagram */}
                <Box sx={{
                  position: "relative", px: 1.5, pt: 5, pb: 2.5, background: deep, borderBottom: `1px solid ${border}`,
                  backgroundImage: `radial-gradient(${border} 1px, transparent 1px)`, backgroundSize: "14px 14px",
                }}>
                  <Typography sx={{ position: "absolute", top: 12, left: 14, fontFamily: mono, fontSize: "0.6rem", color: c }}>
                    {String(PROJECTS.indexOf(p) + 1).padStart(2, "0")}
                  </Typography>
                  <Typography sx={{ position: "absolute", top: 12, right: 14, fontFamily: mono, fontSize: "0.58rem", color: muted }}>
                    {p.category}
                  </Typography>
                  <FlowDiagram nodes={p.flow} color={c} text={head} faint={faint} animate={!reduce} hot={isH} />
                </Box>

                {/* body */}
                <Box sx={{ p: 2.5, pb: 1.5 }}>
                  <Typography sx={{
                    fontFamily: sans, fontWeight: 800, fontSize: "1.08rem", lineHeight: 1.25,
                    color: isH ? c : head, transition: "color .2s", mb: 1,
                  }}>
                    {p.name}
                  </Typography>
                  <Typography sx={{
                    fontFamily: sans, fontSize: "0.86rem", lineHeight: 1.65, color: muted,
                    display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden",
                  }}>
                    {p.summary}
                  </Typography>
                </Box>
              </ButtonBase>

              <Box sx={{ px: 2.5, pb: 2, display: "flex", flexWrap: "wrap", gap: 0.6 }}>
                {p.skills.slice(0, 5).map(s => (
                  <Chip key={s} label={s} size="small" sx={{
                    fontFamily: sans, fontWeight: 600, fontSize: "0.66rem", height: 22, borderRadius: "3px",
                    background: "rgba(255,255,255,0.05)", color: muted, border: `1px solid ${border}`,
                    "& .MuiChip-label": { px: 0.8 },
                  }} />
                ))}
                {extra > 0 && (
                  <Typography sx={{ fontFamily: mono, fontSize: "0.62rem", color: faint, alignSelf: "center", ml: 0.4 }}>+{extra}</Typography>
                )}
              </Box>

              {/* footer */}
              <Box sx={{
                mt: "auto", px: 2.5, py: 1.5, borderTop: `1px solid ${border}`,
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}>
                <ButtonBase onClick={() => openCase(p)} sx={{
                  fontFamily: mono, fontSize: "0.68rem", color: c, px: 0.5, py: 0.5, borderRadius: "4px",
                  "&:hover": { textDecoration: "underline" }, "&.Mui-focusVisible": { outline: `2px solid ${c}` },
                }}>
                  read case study
                </ButtonBase>
                <Box sx={{ display: "flex", gap: 0.8 }}>
                  {p.github && <IconLink href={p.github} label="GitHub" ac={c}><GitHubIcon sx={{ fontSize: 15 }} /></IconLink>}
                  {p.live && <IconLink href={p.live} label="Live demo" ac={c}><OpenInNewIcon sx={{ fontSize: 15 }} /></IconLink>}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* bottom */}
      <Box sx={{ mt: 10, display: "flex", alignItems: "center", gap: 2, position: "relative" }}>
        <Box sx={{ flex: 1, height: "1px", background: border }} />
        <Typography sx={{ fontFamily: mono, fontSize: "0.6rem", color: faint, letterSpacing: "0.08em" }}>end_of_section</Typography>
      </Box>

      {/* ══ CASE STUDY DIALOG ══ */}
      <Dialog open={!!open} onClose={() => setOpen(null)} fullWidth maxWidth="md"
        PaperProps={{ sx: {
          background: bg, border: `1px solid ${border}`, borderRadius: "12px",
          boxShadow: "0 40px 100px rgba(0,0,0,0.8)", maxHeight: "92vh", backgroundImage: "none",
        }}}>
        {open && (
          <>
            {/* window bar */}
            <Box sx={{
              display: "flex", alignItems: "center", gap: 1.5, px: 2.5, py: 1.3,
              borderBottom: `1px solid ${border}`, background: deep, position: "sticky", top: 0, zIndex: 2,
            }}>
              <Box sx={{ display: "flex", gap: 0.6 }}>
                {["#ff5f57", "#febc2e", "#28c840"].map(k => <Box key={k} sx={{ width: 10, height: 10, borderRadius: "50%", background: k }} />)}
              </Box>
              <Typography sx={{ fontFamily: mono, fontSize: "0.68rem", color: muted, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                projects/{open.slug}/README.md
              </Typography>
              <IconButton onClick={() => setOpen(null)} size="small" aria-label="Close" sx={{ color: muted }}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>

            <Box sx={{ overflowY: "auto", px: { xs: 2.5, md: 4 }, py: 3.5 }}>
              <Typography sx={{ fontFamily: mono, fontSize: "0.65rem", color: ac, mb: 1 }}>{open.category}</Typography>
              <Typography sx={{ fontFamily: sans, fontWeight: 900, fontSize: { xs: "1.6rem", md: "2.2rem" }, lineHeight: 1.05, letterSpacing: "-0.02em", color: head, mb: 3 }}>
                {open.name}
              </Typography>

              {/* architecture view toggle */}
              {open.image && (
                <Box sx={{ display: "inline-flex", gap: 0.4, p: 0.4, mb: 1.5, border: `1px solid ${border}`, borderRadius: "6px" }}>
                  {(["live", "image"] as const).map(v => (
                    <ButtonBase key={v} onClick={() => setView(v)} aria-pressed={view === v} sx={{
                      fontFamily: mono, fontSize: "0.66rem", px: 1.4, py: 0.5, borderRadius: "4px",
                      background: view === v ? ac : "transparent", color: view === v ? onA : muted,
                    }}>
                      {v === "live" ? "live flow" : "diagram"}
                    </ButtonBase>
                  ))}
                </Box>
              )}
              <Box sx={{
                border: `1px solid ${border}`, borderRadius: "10px", background: deep, mb: 4, overflow: "hidden",
                backgroundImage: view === "live" ? `radial-gradient(${border} 1px, transparent 1px)` : "none", backgroundSize: "16px 16px",
                p: view === "live" ? { xs: 1, md: 2.5 } : 0,
              }}>
                {view === "live" || !open.image
                  ? <FlowDiagram big nodes={open.flow} color={ac} text={head} faint={faint} animate={!reduce} />
                  : <Box component="img" src={open.image} alt={`${open.name} architecture`} sx={{ width: "100%", display: "block" }} />}
              </Box>

              {/* readme content */}
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.6fr 1fr" }, gap: 4 }}>
                <Box>
                  <Typography sx={{ fontFamily: mono, fontSize: "0.75rem", color: head, fontWeight: 700, mb: 1 }}>
                    <span style={{ color: ac }}>## </span>Overview
                  </Typography>
                  <Typography sx={{ fontFamily: sans, fontSize: "0.98rem", lineHeight: 1.75, color: head, mb: 3 }}>
                    {sentences(open.summary)[0]}
                  </Typography>

                  <Typography sx={{ fontFamily: mono, fontSize: "0.75rem", color: head, fontWeight: 700, mb: 1.2 }}>
                    <span style={{ color: ac }}>## </span>What I built
                  </Typography>
                  {sentences(open.summary).slice(1).map((s, k) => (
                    <Box key={k} sx={{ display: "grid", gridTemplateColumns: "22px 1fr", py: 0.8 }}>
                      <Typography sx={{ fontFamily: mono, fontSize: "0.7rem", color: ac, pt: "3px" }}>✓</Typography>
                      <Typography sx={{ fontFamily: sans, fontSize: "0.92rem", lineHeight: 1.7, color: muted }}>{s}</Typography>
                    </Box>
                  ))}
                </Box>

                <Box>
                  {open.impact && (
                    <Box sx={{ mb: 3 }}>
                      <Typography sx={{ fontFamily: mono, fontSize: "0.75rem", color: head, fontWeight: 700, mb: 1.2 }}>
                        <span style={{ color: ac }}>## </span>Impact
                      </Typography>
                      {open.impact.map(m => (
                        <Box key={m} sx={{ p: 1.5, mb: 1, borderRadius: "8px", border: `1px solid ${ac}55`, background: `${ac}10` }}>
                          <Typography sx={{ fontFamily: sans, fontWeight: 700, fontSize: "0.92rem", color: head }}>{m}</Typography>
                        </Box>
                      ))}
                    </Box>
                  )}

                  <Typography sx={{ fontFamily: mono, fontSize: "0.75rem", color: head, fontWeight: 700, mb: 1.2 }}>
                    <span style={{ color: ac }}>## </span>Stack
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.7, mb: 3 }}>
                    {open.skills.map(s => (
                      <Chip key={s} label={s} size="small" sx={{
                        fontFamily: sans, fontWeight: 600, fontSize: "0.7rem", height: 24, borderRadius: "3px",
                        background: "rgba(255,255,255,0.05)", color: muted, border: `1px solid ${border}`,
                        "& .MuiChip-label": { px: 1 }, "&:hover": { color: ac, borderColor: ac },
                      }} />
                    ))}
                  </Box>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {open.github && (
                      <ButtonBase component="a" href={open.github} target="_blank" rel="noopener" sx={{
                        fontFamily: mono, fontSize: "0.72rem", fontWeight: 700, gap: 1, px: 2, py: 1, borderRadius: "6px",
                        background: ac, color: onA, "&.Mui-focusVisible": { outline: `2px solid ${ac}`, outlineOffset: 2 },
                      }}>
                        <GitHubIcon sx={{ fontSize: 16 }} /> view code
                      </ButtonBase>
                    )}
                    {open.live && (
                      <ButtonBase component="a" href={open.live} target="_blank" rel="noopener" sx={{
                        fontFamily: mono, fontSize: "0.72rem", fontWeight: 700, gap: 1, px: 2, py: 1, borderRadius: "6px",
                        border: `1px solid ${border}`, color: head,
                      }}>
                        <OpenInNewIcon sx={{ fontSize: 16 }} /> live demo
                      </ButtonBase>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects;