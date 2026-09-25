import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Chip, ButtonBase, useTheme } from "@mui/material";

/* =====================================================================
   EXPERIENCE DATA — newest first.
   Lines marked "EDIT" are drafts written from your LinkedIn + message.
   Replace them with your real project names, tools and results.
   ===================================================================== */
type Project = { name: string; text: string; tools: string[] };
type Role = {
  role: string; company: string; location: string; mode?: string;
  duration: string; length: string; type: string; current?: boolean;
  summary: string;                       // one-line tl;dr (typed out as the "AI summary")
  accentDark: string; accentLight: string;
  highlights: string[];
  projects?: Project[];
  stack: Record<string, string[]>;       // grouped skills
};

const experiences: Role[] = [
  {
    role: "Data Engineer Fellow",
    company: "Tech Impact",
    location: "Wilmington, Delaware",
    mode: "Hybrid",
    duration: "Aug 2026 – Present",
    length: "2 mos",
    type: "Full-time",
    current: true,
    summary: "Building Azure and AWS data pipelines for nonprofits, plus AI-assisted automation with Power Platform, Copilot and LLMs.",
    accentDark: "#00ffb4",
    accentLight: "#fbbf24",
    highlights: [
      // EDIT: swap in real results as you have them
      "Delivering data engineering work across multiple client projects on Azure and AWS, from ingestion through analytics-ready models.",
      "Building ingestion and transformation pipelines with Azure Data Factory, Databricks and AWS Glue feeding reporting in Power BI.",
      "Automating business workflows with Power Apps and Power Automate, using Copilot to speed up flow building and documentation.",
      "Prototyping LLM-powered tools, including a résumé analysis assistant that extracts, scores and summarizes candidate profiles.",
    ],
    projects: [
      { name: "Azure data platform", text: "EDIT: what the pipeline does and who uses it.", tools: ["ADF", "Databricks", "ADLS Gen2", "Power BI"] },
      { name: "AWS pipeline", text: "EDIT: sources, processing, destination.", tools: ["S3", "Glue", "Lambda", "Athena"] },
      { name: "Power Platform automation", text: "EDIT: which process you automated and time saved.", tools: ["Power Apps", "Power Automate", "Copilot"] },
      { name: "Résumé LLM assistant", text: "EDIT: how it works and what it outputs.", tools: ["Azure OpenAI", "Python", "Prompt engineering"] },
    ],
    stack: {
      Cloud: ["Azure Data Factory", "Azure Databricks", "ADLS Gen2", "AWS S3", "AWS Glue", "AWS Lambda"],
      "AI & automation": ["Copilot", "LLMs", "Azure OpenAI", "Power Apps", "Power Automate"],
      Data: ["PySpark", "SQL", "Python", "Power BI"],
    },
  },
  {
    role: "Full Stack Engineer (Volunteer)",
    company: "Solution Community",
    location: "Remote",
    duration: "Jul 2026 – Aug 2026",
    length: "2 mos",
    type: "Part-time",
    summary: "Shipped the direct messaging feature for a nonprofit platform in an agile Build Party team.",
    accentDark: "#a78bfa",
    accentLight: "#c4b5fd",
    highlights: [
      "Contributed to a nonprofit platform built with Next.js, TypeScript and Firebase.",
      "Worked on the direct messaging feature within an agile Build Party team, from data model to UI.",
      "Collaborated through code reviews, sprint planning and GitHub pull-request workflows.",
    ],
    stack: {
      Frontend: ["Next.js", "TypeScript", "React"],
      Backend: ["Firebase", "Firestore"],
      Workflow: ["Git", "GitHub", "Agile"],
    },
  },
  {
    role: "Data Engineer",
    company: "Digiuniv Technologies",
    location: "Hyderabad, India",
    duration: "Jun 2023 – Jul 2024",
    length: "1 yr 2 mos",
    type: "Full-time",
    summary: "Owned metadata-driven ADF, Databricks and dbt pipelines plus a 5M+ events/day streaming system.",
    accentDark: "#fbbf24",
    accentLight: "#fb923c",
    highlights: [
      "Architected a metadata-driven Azure Data Factory framework replacing hardcoded pipelines with JSON-config-driven workflows across 40+ linked services, cutting new source onboarding from days to hours.",
      "Tuned PySpark workloads in Azure Databricks with broadcast joins, predicate pushdown and AQE on a Delta Lake Medallion Architecture (Bronze → Silver → Gold), reducing pipeline latency by 50%.",
      "Owned the dbt layer in Snowflake with staging/intermediate/mart conventions, schema tests, SCD Type 2 snapshots and CI/CD-gated deployment via GitHub Actions, reducing data quality incidents by 40%.",
      "Built the organisation's first Kafka + PySpark Structured Streaming pipeline processing 5M+ events/day with exactly-once semantics from Azure Event Hubs into Azure Synapse Analytics.",
      "Migrated Airflow to dynamic DAG generation on GCP Cloud Composer spanning BigQuery, Dataflow and AWS Glue, cutting MTTR from 2 hours to 30 minutes.",
      "Containerised pipeline services with Docker, integrated Azure DevOps CI/CD and provisioned infrastructure with Terraform.",
      "Made Great Expectations validation suites mandatory build gates, catching anomalies before downstream reporting.",
      "Mentored 3 junior engineers through code reviews, architecture walkthroughs and pair programming.",
    ],
    stack: {
      Azure: ["Azure Data Factory", "Azure Databricks", "Azure Synapse", "ADLS Gen2", "Azure Event Hubs", "Azure DevOps"],
      "AWS & GCP": ["AWS S3", "AWS Glue", "Amazon Redshift", "AWS EMR", "BigQuery", "Dataflow", "Cloud Composer"],
      Data: ["Delta Lake", "Delta Live Tables", "Snowflake", "dbt", "PySpark", "Apache Kafka", "Apache Airflow", "Great Expectations"],
      Platform: ["Docker", "Terraform", "CI/CD", "Git", "Python", "SQL"],
    },
  },
  {
    role: "Associate Data Engineer",
    company: "Blocysite",
    location: "Hyderabad, India",
    duration: "Mar 2022 – Jun 2023",
    length: "1 yr 4 mos",
    type: "Full-time",
    summary: "Took full ownership of Azure lakehouse pipelines, serving Power BI through Synapse and dbt on Snowflake.",
    accentDark: "#60a5fa",
    accentLight: "#93c5fd",
    highlights: [
      "Took full ownership of end-to-end pipelines, building dynamic ADF workflows with JSON-driven configuration that scaled across sources without code changes.",
      "Implemented Medallion Architecture with Delta Lake on ADLS Gen2 using PySpark in Azure Databricks: type casting, null handling, derived columns and multi-source joins.",
      "Served business-ready data through Azure Synapse Serverless SQL (OPENROWSET, views, external tables, Managed Identity) directly to Power BI.",
      "Led dbt development in Snowflake with schema tests and incremental strategies, cutting full-refresh runtimes by ~60%.",
      "Built Kafka + PySpark Structured Streaming pipelines for high-volume events with exactly-once delivery.",
      "Owned Airflow DAG development with SLA monitoring, dynamic generation and failure alerting.",
    ],
    stack: {
      Azure: ["Azure Data Factory", "Azure Databricks", "Azure Synapse Analytics", "ADLS Gen2"],
      Data: ["Delta Lake", "Snowflake", "dbt", "PySpark", "Apache Kafka", "Apache Airflow", "Star Schema"],
      Platform: ["Power BI", "Docker", "CI/CD", "Git", "Python", "SQL"],
    },
  },
  {
    role: "Data Engineering Intern",
    company: "Blocysite",
    location: "Hyderabad, India",
    duration: "Jun 2021 – Mar 2022",
    length: "10 mos",
    type: "Internship",
    summary: "Built ETL on AWS and GCP, wrote Airflow DAGs and PySpark jobs under senior engineers.",
    accentDark: "#f9a8d4",
    accentLight: "#f9a8d4",
    highlights: [
      "Built ETL pipelines on AWS (S3, Glue, Lambda, Step Functions) and GCP (Cloud Storage, BigQuery, Pub/Sub) alongside senior engineers.",
      "Wrote and maintained Airflow DAGs across AWS Glue and BigQuery load jobs with dependency management and Slack failure alerts.",
      "Contributed dbt models in Snowflake: SQL transformations, schema tests and incremental materialisation.",
      "Developed PySpark scripts on AWS EMR for deduplication, null handling and schema enforcement.",
      "Built Python utilities for data quality validation and source-to-target row-count reconciliation.",
    ],
    stack: {
      "AWS & GCP": ["AWS S3", "AWS Glue", "AWS Lambda", "AWS EMR", "Step Functions", "BigQuery", "Cloud Storage", "Pub/Sub"],
      Data: ["PySpark", "Apache Airflow", "Apache Kafka", "Snowflake", "dbt", "Data Quality"],
      Platform: ["Python", "SQL", "Docker", "Git"],
    },
  },
];

/* ===================================================================== */

export default function Experience() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [sel, setSel] = useState(0);
  const [tab, setTab] = useState<"impact" | "projects" | "stack">("impact");
  const [typed, setTyped] = useState("");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // ── Tokens — same family as Home/About (black+green dark / navy+gold light)
  const bg          = isDark ? "#05090e" : "#0d1b2a";
  const panelBg     = isDark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.04)";
  const cardBorder  = isDark ? "rgba(255,255,255,0.08)" : "rgba(99,179,255,0.12)";
  const textPrimary = isDark ? "#e8f4f0" : "#e0f2ff";
  const textMuted   = isDark ? "rgba(232,244,240,0.55)" : "rgba(224,242,255,0.52)";
  const textFaint   = isDark ? "rgba(232,244,240,0.25)" : "rgba(224,242,255,0.22)";
  const gridColor   = isDark ? "rgba(255,255,255,0.025)" : "rgba(99,179,255,0.03)";
  const accent0     = isDark ? "#00ffb4" : "#fbbf24";
  const onAccent    = isDark ? "#05090e" : "#0d1b2a";
  const mono = "'Space Mono', monospace";
  const sans = "'Outfit', sans-serif";

  const exp = experiences[sel];
  const accent = isDark ? exp.accentDark : exp.accentLight;
  const hasProjects = !!exp.projects?.length;

  // reveal on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // "AI summary" types itself out whenever a role is selected
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !visible) { setTyped(exp.summary); return; }
    setTyped("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 2;
      setTyped(exp.summary.slice(0, i));
      if (i >= exp.summary.length) window.clearInterval(id);
    }, 18);
    return () => window.clearInterval(id);
  }, [sel, visible]); // eslint-disable-line react-hooks/exhaustive-deps

  const choose = (i: number) => {
    setSel(i);
    if (tab === "projects" && !experiences[i].projects?.length) setTab("impact");
  };

  const reveal = (d: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(18px)",
    transition: `opacity .65s ease ${d}s, transform .65s ease ${d}s`,
  });

  const StatusBadge: React.FC<{ current?: boolean; color: string }> = ({ current, color }) => (
    <Box sx={{
      display: "inline-flex", alignItems: "center", gap: 0.7, px: 1, py: 0.25,
      borderRadius: "999px", border: `1px solid ${current ? color : cardBorder}`,
      fontFamily: mono, fontSize: "0.58rem", color: current ? color : textMuted,
    }}>
      <Box sx={{
        width: 6, height: 6, borderRadius: "50%", background: current ? color : textFaint,
        animation: current ? "xpPulse 1.6s ease-out infinite" : "none",
        "--c": color,
      } as any} />
      {current ? "running" : "completed"}
    </Box>
  );

  return (
    <Box
      id="experience"
      ref={sectionRef}
      sx={{
        position: "relative", backgroundColor: bg,
        py: { xs: 8, md: 12 }, px: { xs: 2.5, sm: 4, md: 10, lg: 16 }, overflow: "hidden",
        "@keyframes xpPulse": {
          "0%": { boxShadow: "0 0 0 0 var(--c)" },
          "100%": { boxShadow: "0 0 0 7px transparent" },
        },
        "@keyframes xpIn": { from: { opacity: 0, transform: "translateY(6px)" }, to: { opacity: 1, transform: "none" } },
        "@keyframes xpCaret": { "0%,49%": { opacity: 1 }, "50%,100%": { opacity: 0 } },
        "@keyframes xpFlow": { from: { top: "-10%" }, to: { top: "110%" } },
        "@media (prefers-reduced-motion: reduce)": { "& *": { animation: "none !important", transition: "none !important" } },
      }}
    >
      {/* grid */}
      <Box sx={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(${gridColor} 1px,transparent 1px),linear-gradient(90deg,${gridColor} 1px,transparent 1px)`,
        backgroundSize: "44px 44px",
      }} />

      {/* section label */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 6, position: "relative", ...reveal(0) }}>
        <Typography sx={{ fontFamily: mono, fontSize: "0.65rem", color: accent0, letterSpacing: "0.12em" }}>03 /</Typography>
        <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
        <Typography sx={{ fontFamily: mono, fontSize: "0.65rem", color: textFaint, letterSpacing: "0.08em" }}>career_dag.py</Typography>
      </Box>

      {/* heading */}
      <Box sx={{ mb: { xs: 5, md: 7 }, position: "relative", ...reveal(0.1) }}>
        <Typography sx={{
          fontFamily: sans, fontWeight: 900, fontSize: { xs: "2.2rem", sm: "3rem", md: "3.6rem" },
          lineHeight: 0.95, letterSpacing: "-0.03em", color: textPrimary, mb: 1,
        }}>
          Work <Box component="span" sx={{ color: accent0 }}>Experience</Box>
        </Typography>
        <Typography sx={{ fontFamily: mono, fontSize: "0.72rem", color: textMuted, letterSpacing: "0.04em" }}>
          // every role is a task in the pipeline. select one to inspect the run.
        </Typography>
      </Box>

      <Box sx={{
        display: "grid", gridTemplateColumns: { xs: "1fr", md: "300px 1fr", lg: "340px 1fr" },
        gap: { xs: 3, md: 5 }, alignItems: "start", position: "relative",
      }}>
        {/* ══ LEFT — career DAG ══ */}
        <Box
          role="tablist" aria-label="Roles" aria-orientation="vertical"
          sx={{
            position: { md: "sticky" }, top: { md: 96 },
            display: "flex", flexDirection: { xs: "row", md: "column" },
            overflowX: { xs: "auto", md: "visible" }, gap: { xs: 1, md: 0 },
            pb: { xs: 1, md: 0 }, ...reveal(0.2),
          }}
        >
          {experiences.map((e, i) => {
            const c = isDark ? e.accentDark : e.accentLight;
            const on = i === sel;
            const last = i === experiences.length - 1;
            return (
              <ButtonBase
                key={e.role + e.company}
                role="tab" aria-selected={on} aria-controls="xp-panel"
                onClick={() => choose(i)}
                sx={{
                  display: "grid", gridTemplateColumns: { xs: "1fr", md: "28px 1fr" },
                  textAlign: "left", alignItems: "start", borderRadius: "8px",
                  flex: { xs: "0 0 auto", md: "initial" },
                  px: { xs: 1.6, md: 1 }, py: { xs: 1.2, md: 0 },
                  border: { xs: `1px solid ${on ? c : cardBorder}`, md: "none" },
                  background: { xs: on ? panelBg : "transparent", md: "transparent" },
                  "&.Mui-focusVisible": { outline: `2px solid ${c}`, outlineOffset: 2 },
                  "&:hover .xp-title": { color: textPrimary },
                }}
              >
                {/* node + edge (desktop only) */}
                <Box sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column", alignItems: "center", alignSelf: "stretch", pt: "22px" }}>
                  <Box sx={{
                    width: on ? 14 : 10, height: on ? 14 : 10, borderRadius: e.current ? "50%" : "3px",
                    border: `2px solid ${c}`, background: on ? c : bg, flexShrink: 0,
                    transition: "all .25s ease", zIndex: 1,
                    animation: e.current ? "xpPulse 1.6s ease-out infinite" : "none", "--c": c,
                  } as any} />
                  {!last && (
                    <Box sx={{ flex: 1, width: "2px", mt: 0.5, position: "relative", overflow: "hidden",
                      background: `linear-gradient(${c}, ${isDark ? experiences[i + 1].accentDark : experiences[i + 1].accentLight})`, opacity: 0.35 }}>
                      {on && <Box sx={{ position: "absolute", left: 0, width: "2px", height: "30%", background: c, animation: "xpFlow 1.4s linear infinite" }} />}
                    </Box>
                  )}
                </Box>

                <Box sx={{
                  py: { md: 1.6 }, px: { md: 1.6 }, my: { md: 0.5 }, borderRadius: "8px",
                  background: { md: on ? panelBg : "transparent" },
                  border: { md: `1px solid ${on ? cardBorder : "transparent"}` },
                  transition: "background .2s ease, border-color .2s ease",
                }}>
                  <Typography sx={{ fontFamily: mono, fontSize: "0.6rem", color: on ? c : textFaint, mb: 0.4, whiteSpace: "nowrap" }}>
                    {e.duration}
                  </Typography>
                  <Typography className="xp-title" sx={{
                    fontFamily: sans, fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.25,
                    color: on ? textPrimary : textMuted, transition: "color .2s", whiteSpace: { xs: "nowrap", md: "normal" },
                  }}>
                    {e.role}
                  </Typography>
                  <Typography sx={{ fontFamily: sans, fontSize: "0.8rem", color: on ? c : textFaint, whiteSpace: "nowrap" }}>
                    {e.company}
                  </Typography>
                </Box>
              </ButtonBase>
            );
          })}
        </Box>

        {/* ══ RIGHT — run detail panel ══ */}
        <Box
          id="xp-panel" role="tabpanel"
          sx={{
            border: `1px solid ${cardBorder}`, borderRadius: "10px", overflow: "hidden",
            background: panelBg, ...reveal(0.3),
          }}
        >
          <Box sx={{ height: "3px", background: `linear-gradient(90deg, ${accent}, transparent)` }} />

          {/* header */}
          <Box key={`h${sel}`} sx={{ px: { xs: 2.5, md: 3.5 }, pt: 3, pb: 2.5, animation: "xpIn .35s ease both" }}>
            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1.2, mb: 1.4 }}>
              <StatusBadge current={exp.current} color={accent} />
              <Typography sx={{ fontFamily: mono, fontSize: "0.6rem", color: textMuted }}>
                {exp.type}
              </Typography>
              <Typography sx={{ fontFamily: mono, fontSize: "0.6rem", color: textFaint }}>/</Typography>
              <Typography sx={{ fontFamily: mono, fontSize: "0.6rem", color: textMuted }}>
                {exp.location}{exp.mode ? `, ${exp.mode}` : ""}
              </Typography>
            </Box>
            <Typography sx={{
              fontFamily: sans, fontWeight: 800, fontSize: { xs: "1.4rem", md: "1.8rem" },
              lineHeight: 1.1, letterSpacing: "-0.02em", color: textPrimary,
            }}>
              {exp.role}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, alignItems: "baseline", mt: 0.6 }}>
              <Typography sx={{ fontFamily: sans, fontWeight: 600, fontSize: "1rem", color: accent }}>{exp.company}</Typography>
              <Typography sx={{ fontFamily: mono, fontSize: "0.65rem", color: textMuted }}>
                {exp.duration} ({exp.length})
              </Typography>
            </Box>

            {/* AI summary */}
            <Box sx={{
              mt: 2.5, p: 1.8, borderRadius: "8px",
              border: `1px dashed ${cardBorder}`, background: "rgba(0,0,0,0.18)",
            }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, mb: 0.6 }}>
                <Box component="svg" viewBox="0 0 24 24" sx={{ width: 13, height: 13, fill: accent }}>
                  <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" />
                </Box>
                <Typography sx={{ fontFamily: mono, fontSize: "0.6rem", color: accent }}>summary.generate()</Typography>
              </Box>
              <Typography sx={{ fontFamily: sans, fontSize: "0.95rem", lineHeight: 1.6, color: textPrimary, minHeight: "3.2em" }}>
                {typed}
                {typed.length < exp.summary.length && (
                  <Box component="span" sx={{
                    display: "inline-block", width: "7px", height: "1em", ml: 0.4, verticalAlign: "text-bottom",
                    background: accent, animation: "xpCaret 1s step-end infinite",
                  }} />
                )}
              </Typography>
            </Box>
          </Box>

          {/* tabs */}
          <Box role="tablist" aria-label="Role details" sx={{
            display: "flex", gap: 0.5, px: { xs: 2.5, md: 3.5 }, borderBottom: `1px solid ${cardBorder}`,
          }}>
            {(["impact", "projects", "stack"] as const)
              .filter(t => t !== "projects" || hasProjects)
              .map(t => {
                const on = tab === t;
                const count = t === "impact" ? exp.highlights.length
                  : t === "projects" ? exp.projects!.length
                  : Object.values(exp.stack).flat().length;
                return (
                  <ButtonBase key={t} role="tab" aria-selected={on} onClick={() => setTab(t)}
                    sx={{
                      fontFamily: mono, fontSize: "0.7rem", px: 1.4, py: 1.3, gap: 0.8,
                      color: on ? textPrimary : textMuted,
                      borderBottom: `2px solid ${on ? accent : "transparent"}`, mb: "-1px",
                      transition: "color .2s, border-color .2s",
                      "&:hover": { color: textPrimary },
                      "&.Mui-focusVisible": { outline: `2px solid ${accent}` },
                    }}>
                    {t}
                    <Box component="span" sx={{
                      fontSize: "0.58rem", px: 0.7, borderRadius: "999px",
                      background: on ? accent : "rgba(255,255,255,0.06)", color: on ? onAccent : textMuted,
                    }}>
                      {count}
                    </Box>
                  </ButtonBase>
                );
              })}
          </Box>

          {/* tab content */}
          <Box key={`${sel}-${tab}`} sx={{ px: { xs: 2.5, md: 3.5 }, py: 3, animation: "xpIn .35s ease both" }}>
            {tab === "impact" && (
              <Box component="ol" sx={{ listStyle: "none", m: 0, p: 0 }}>
                {exp.highlights.map((h, j) => (
                  <Box component="li" key={j} sx={{
                    display: "grid", gridTemplateColumns: "34px 1fr", gap: 1, py: 1.1,
                    borderBottom: j < exp.highlights.length - 1 ? `1px solid ${cardBorder}` : "none",
                  }}>
                    <Typography sx={{ fontFamily: mono, fontSize: "0.62rem", color: accent, pt: "5px", opacity: 0.8 }}>
                      ✓ {String(j + 1).padStart(2, "0")}
                    </Typography>
                    <Typography sx={{ fontFamily: sans, fontSize: { xs: "0.88rem", md: "0.93rem" }, lineHeight: 1.7, color: textMuted }}>
                      {h}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}

            {tab === "projects" && hasProjects && (
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 1.5 }}>
                {exp.projects!.map(p => (
                  <Box key={p.name} sx={{
                    p: 2, borderRadius: "8px", border: `1px solid ${cardBorder}`, background: "rgba(0,0,0,0.15)",
                    transition: "border-color .2s", "&:hover": { borderColor: accent },
                  }}>
                    <Typography sx={{ fontFamily: sans, fontWeight: 700, fontSize: "0.98rem", color: textPrimary, mb: 0.5 }}>
                      {p.name}
                    </Typography>
                    <Typography sx={{ fontFamily: sans, fontSize: "0.85rem", lineHeight: 1.6, color: textMuted, mb: 1.4 }}>
                      {p.text}
                    </Typography>
                    <Typography sx={{ fontFamily: mono, fontSize: "0.62rem", color: accent }}>
                      {p.tools.join("  +  ")}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}

            {tab === "stack" && (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.2 }}>
                {Object.entries(exp.stack).map(([group, items]) => (
                  <Box key={group} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "130px 1fr" }, gap: 1 }}>
                    <Typography sx={{ fontFamily: mono, fontSize: "0.65rem", color: textMuted, pt: "4px" }}>{group}</Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.7 }}>
                      {items.map(s => (
                        <Chip key={s} label={s} size="small" sx={{
                          fontFamily: sans, fontWeight: 600, fontSize: "0.7rem", height: 24, borderRadius: "3px",
                          background: "rgba(255,255,255,0.05)", color: textMuted, border: `1px solid ${cardBorder}`,
                          "& .MuiChip-label": { px: 1 },
                          "&:hover": { color: accent, borderColor: accent },
                          transition: "color .18s, border-color .18s", cursor: "default",
                        }} />
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      {/* bottom rule */}
      <Box sx={{ mt: 8, display: "flex", alignItems: "center", gap: 2, position: "relative", ...reveal(0.5) }}>
        <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
        <Typography sx={{ fontFamily: mono, fontSize: "0.6rem", color: textFaint, letterSpacing: "0.08em" }}>end_of_section</Typography>
      </Box>
    </Box>
  );
}