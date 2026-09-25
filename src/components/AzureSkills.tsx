import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, ButtonBase, useTheme } from "@mui/material";

const DV = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const I8 = "https://img.icons8.com/color/96";

/* =====================================================================
   SKILL INVENTORY — every tool, with one line on how you use it.
   ===================================================================== */
type Skill = { name: string; icon: string; use: string };
type Category = { label: string; accentDark: string; accentLight: string; skills: Skill[] };

const categories: Category[] = [
  { label: "Languages", accentDark: "#f472b6", accentLight: "#f9a8d4", skills: [
    { name: "Python", icon: `${DV}/python/python-original.svg`, use: "Glue code for every pipeline: ingestion scripts, quality checks and LLM tooling." },
    { name: "SQL", icon: `${I8}/sql.png`, use: "Modeling, transformations and analytics in Snowflake, Synapse and BigQuery." },
    { name: "Scala", icon: `${DV}/scala/scala-original.svg`, use: "Spark jobs where JVM performance matters." },
    { name: "Bash", icon: `${DV}/linux/linux-original.svg`, use: "Automating deployments and cluster jobs." },
    { name: "YAML", icon: `${I8}/code.png`, use: "Pipeline configs, CI workflows and dbt projects." },
  ]},
  { label: "Azure", accentDark: "#00ffb4", accentLight: "#fbbf24", skills: [
    { name: "Azure Data Factory", icon: `${DV}/azure/azure-original.svg`, use: "Metadata-driven orchestration across 40+ linked services." },
    { name: "Azure Databricks", icon: `${DV}/azure/azure-original.svg`, use: "PySpark on Delta Lake medallion layers." },
    { name: "Azure Synapse", icon: `${DV}/azure/azure-original.svg`, use: "Serving curated data to Power BI with serverless SQL." },
    { name: "ADLS Gen2", icon: `${DV}/azure/azure-original.svg`, use: "The lake itself: bronze, silver and gold zones." },
    { name: "Azure Event Hubs", icon: `${DV}/azure/azure-original.svg`, use: "Ingesting high-volume event streams." },
    { name: "Azure SQL", icon: `${DV}/azure/azure-original.svg`, use: "Operational sources and small marts." },
    { name: "Cosmos DB", icon: `${DV}/azure/azure-original.svg`, use: "Low-latency app data and vector search." },
    { name: "Azure Purview", icon: `${DV}/azure/azure-original.svg`, use: "Cataloging and lineage across the platform." },
    { name: "Azure DevOps", icon: `${DV}/azure/azure-original.svg`, use: "CI/CD for pipelines and infrastructure." },
    { name: "Azure Monitor", icon: `${DV}/azure/azure-original.svg`, use: "Alerts and pipeline health dashboards." },
    { name: "Microsoft Fabric", icon: `${DV}/azure/azure-original.svg`, use: "Unified lakehouse and reporting." },
    { name: "Power BI", icon: `${I8}/power-bi.png`, use: "Dashboards on top of the gold layer." },
  ]},
  { label: "AI & automation", accentDark: "#c084fc", accentLight: "#d8b4fe", skills: [
    { name: "Azure OpenAI", icon: `${I8}/chatgpt.png`, use: "LLM features like summaries and résumé analysis." },
    { name: "LLMs & Prompting", icon: `${I8}/artificial-intelligence.png`, use: "Designing prompts and evaluations for AI tools." },
    { name: "Copilot", icon: `${I8}/microsoft-copilot.png`, use: "Speeding up flows, code and documentation." },
    { name: "Power Apps", icon: `${I8}/microsoft-power-apps.png`, use: "Low-code apps for business users." },
    { name: "Power Automate", icon: `${I8}/microsoft-power-automate.png`, use: "Automating approvals, alerts and data movement." },
    { name: "Vertex AI", icon: `${DV}/googlecloud/googlecloud-original.svg`, use: "Training and serving ML models on GCP." },
  ]},
  { label: "AWS", accentDark: "#fb923c", accentLight: "#fdba74", skills: [
    { name: "AWS S3", icon: `${I8}/amazon-web-services.png`, use: "Landing zone and data lake storage." },
    { name: "AWS Glue", icon: `${I8}/amazon-web-services.png`, use: "Serverless ETL and data catalog." },
    { name: "AWS Lambda", icon: `${I8}/amazon-web-services.png`, use: "Event-driven triggers and light transforms." },
    { name: "AWS EMR", icon: `${I8}/amazon-web-services.png`, use: "Large-scale PySpark batch jobs." },
    { name: "AWS Redshift", icon: `${I8}/amazon-web-services.png`, use: "Warehouse for analytics workloads." },
    { name: "Step Functions", icon: `${I8}/amazon-web-services.png`, use: "Orchestrating multi-step AWS workflows." },
    { name: "CloudWatch", icon: `${I8}/amazon-web-services.png`, use: "Logs, metrics and failure alerts." },
    { name: "AWS IAM", icon: `${I8}/amazon-web-services.png`, use: "Least-privilege access for pipelines." },
    { name: "Kinesis", icon: `${I8}/amazon-web-services.png`, use: "Streaming ingestion on AWS." },
  ]},
  { label: "GCP", accentDark: "#60a5fa", accentLight: "#93c5fd", skills: [
    { name: "BigQuery", icon: `${DV}/googlecloud/googlecloud-original.svg`, use: "Serverless warehouse for analytics." },
    { name: "Cloud Storage", icon: `${DV}/googlecloud/googlecloud-original.svg`, use: "Landing zone on GCP." },
    { name: "Pub/Sub", icon: `${DV}/googlecloud/googlecloud-original.svg`, use: "Event messaging between services." },
    { name: "Cloud Composer", icon: `${DV}/googlecloud/googlecloud-original.svg`, use: "Managed Airflow with dynamic DAGs." },
    { name: "Dataflow", icon: `${DV}/googlecloud/googlecloud-original.svg`, use: "Beam pipelines for batch and streaming." },
  ]},
  { label: "Warehousing & modeling", accentDark: "#a78bfa", accentLight: "#c4b5fd", skills: [
    { name: "Snowflake", icon: `${I8}/snowflake.png`, use: "Warehouse layer with dbt models and SCD2 snapshots." },
    { name: "dbt", icon: `${I8}/database.png`, use: "Tested, versioned SQL transformations." },
    { name: "Delta Lake", icon: `${I8}/database.png`, use: "ACID tables with time travel." },
    { name: "Unity Catalog", icon: `${I8}/data-configuration.png`, use: "Governance for Databricks." },
    { name: "Data Modeling", icon: `${I8}/flow-chart.png`, use: "Designing facts, dimensions and marts." },
    { name: "Star Schema", icon: `${I8}/data-configuration.png`, use: "Fast, simple models for BI." },
    { name: "Medallion Arch", icon: `${I8}/data-configuration.png`, use: "Bronze → silver → gold refinement." },
    { name: "ETL / ELT", icon: `${I8}/data-configuration.png`, use: "Choosing the right pattern per source." },
    { name: "Delta Live Tables", icon: `${I8}/database.png`, use: "Declarative pipelines with built-in expectations." },
  ]},
  { label: "Processing & streaming", accentDark: "#fbbf24", accentLight: "#fde68a", skills: [
    { name: "Apache Spark", icon: `${I8}/apache-spark.png`, use: "Distributed processing at scale." },
    { name: "PySpark", icon: `${DV}/python/python-original.svg`, use: "Most of my transformation code." },
    { name: "Apache Kafka", icon: `${I8}/data-in-both-directions.png`, use: "Buffering 5M+ events/day with exactly-once delivery." },
    { name: "Apache Airflow", icon: `${I8}/workflow.png`, use: "Scheduling and dependency management." },
    { name: "Spark Streaming", icon: `${I8}/apache-spark.png`, use: "Real-time transforms on event streams." },
    { name: "Kafka Streams", icon: `${I8}/data-in-both-directions.png`, use: "Lightweight stream processing." },
  ]},
  { label: "DevOps & quality", accentDark: "#34d399", accentLight: "#6ee7b7", skills: [
    { name: "Docker", icon: `${DV}/docker/docker-original.svg`, use: "Containerizing every pipeline service." },
    { name: "Kubernetes", icon: `${DV}/kubernetes/kubernetes-plain.svg`, use: "Running containers at scale." },
    { name: "Terraform", icon: `${DV}/terraform/terraform-original.svg`, use: "Infrastructure as code." },
    { name: "GitHub Actions", icon: `${DV}/github/github-original.svg`, use: "CI checks and deployments." },
    { name: "Git", icon: `${DV}/git/git-original.svg`, use: "Version control for everything." },
    { name: "CI/CD", icon: `${I8}/workflow.png`, use: "Automated test and deploy gates." },
    { name: "Great Expectations", icon: `${I8}/test-tube.png`, use: "Data quality gates before data ships." },
  ]},
  { label: "Databases", accentDark: "#67e8f9", accentLight: "#a5f3fc", skills: [
    { name: "PostgreSQL", icon: `${DV}/postgresql/postgresql-original.svg`, use: "Relational sources and pgvector." },
    { name: "MySQL", icon: `${DV}/mysql/mysql-original.svg`, use: "Application sources for ingestion." },
    { name: "SQL Server", icon: `${I8}/microsoft-sql-server.png`, use: "Enterprise sources and CDC." },
    { name: "MongoDB", icon: `${DV}/mongodb/mongodb-original.svg`, use: "Document data ingestion." },
    { name: "DynamoDB", icon: `${I8}/amazon-web-services.png`, use: "Key-value app data on AWS." },
    { name: "Redis", icon: `${DV}/redis/redis-original.svg`, use: "Caching and fast lookups." },
  ]},
];

/* =====================================================================
   MISSIONS — each stage lists the tools that fit, and your own pick.
   ===================================================================== */
type Stage = { name: string; accepts: string[]; pick: string; hint: string; ok: string };
type Mission = { title: string; brief: string; stages: Stage[] };

const missions: Mission[] = [
  { title: "Real-time clickstream", brief: "Stream millions of click events a day into a live dashboard.", stages: [
    { name: "Ingest", accepts: ["Apache Kafka", "Azure Event Hubs", "Kinesis", "Pub/Sub"], pick: "Apache Kafka", hint: "needs a streaming ingest tool", ok: "events buffered, exactly-once" },
    { name: "Process", accepts: ["Spark Streaming", "PySpark", "Kafka Streams", "Dataflow", "Azure Databricks"], pick: "Spark Streaming", hint: "needs a stream processor", ok: "events deduplicated and enriched" },
    { name: "Store", accepts: ["Delta Lake", "Snowflake", "BigQuery", "Azure Synapse", "AWS Redshift"], pick: "Delta Lake", hint: "needs a table format or warehouse", ok: "written to gold tables" },
    { name: "Serve", accepts: ["Power BI", "Microsoft Fabric"], pick: "Power BI", hint: "needs a BI tool", ok: "dashboard refreshed" },
  ]},
  { title: "Nightly lakehouse batch", brief: "Land raw files, refine them, and serve clean tables by morning.", stages: [
    { name: "Orchestrate", accepts: ["Azure Data Factory", "Apache Airflow", "Cloud Composer", "Step Functions"], pick: "Azure Data Factory", hint: "needs an orchestrator", ok: "run triggered from config" },
    { name: "Land", accepts: ["ADLS Gen2", "AWS S3", "Cloud Storage"], pick: "ADLS Gen2", hint: "needs lake storage", ok: "raw files in bronze" },
    { name: "Transform", accepts: ["Azure Databricks", "PySpark", "dbt", "AWS Glue", "AWS EMR", "Delta Live Tables", "Apache Spark"], pick: "Azure Databricks", hint: "needs a transformation engine", ok: "silver → gold refined" },
    { name: "Serve", accepts: ["Azure Synapse", "Snowflake", "BigQuery", "AWS Redshift", "Microsoft Fabric"], pick: "Snowflake", hint: "needs a warehouse", ok: "marts ready for analysts" },
  ]},
  { title: "AI résumé assistant", brief: "Turn uploaded résumés into searchable, summarized profiles.", stages: [
    { name: "Trigger", accepts: ["Power Automate", "AWS Lambda", "Azure Data Factory"], pick: "Power Automate", hint: "needs something to react to uploads", ok: "new file detected" },
    { name: "Understand", accepts: ["Azure OpenAI", "LLMs & Prompting", "Vertex AI"], pick: "Azure OpenAI", hint: "needs a language model", ok: "skills extracted, summary written" },
    { name: "Store", accepts: ["Cosmos DB", "PostgreSQL", "MongoDB", "Redis"], pick: "Cosmos DB", hint: "needs a database", ok: "profile and embeddings saved" },
    { name: "Use", accepts: ["Power Apps", "Power BI", "Python"], pick: "Power Apps", hint: "needs an app people can open", ok: "recruiters can search it" },
  ]},
  { title: "Ship it safely", brief: "Test, package, deploy and watch a pipeline release.", stages: [
    { name: "Test", accepts: ["Great Expectations", "dbt"], pick: "Great Expectations", hint: "needs a data quality tool", ok: "all expectations passed" },
    { name: "Package", accepts: ["Docker"], pick: "Docker", hint: "needs a container tool", ok: "image built" },
    { name: "Deploy", accepts: ["GitHub Actions", "Azure DevOps", "Terraform", "CI/CD"], pick: "GitHub Actions", hint: "needs CI/CD or IaC", ok: "released to prod" },
    { name: "Monitor", accepts: ["Azure Monitor", "CloudWatch"], pick: "Azure Monitor", hint: "needs monitoring", ok: "alerts wired up" },
  ]},
];

const levelTitles = ["Intern", "Junior DE", "Data Engineer", "Senior DE", "Staff DE", "Principal DE"];
const allSkills = categories.flatMap(c => c.skills.map(s => ({ ...s, cat: c })));
const findSkill = (n: string) => allSkills.find(s => s.name === n);

type LogLine = { text: string; kind: "info" | "ok" | "err" | "win" };

/* ===================================================================== */

const Skills: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const sectionRef = useRef<HTMLDivElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  const [visible, setVisible] = useState(false);
  const [mi, setMi] = useState(0);
  const [slots, setSlots] = useState<(string | null)[]>(() => missions[0].stages.map(() => null));
  const [active, setActive] = useState<number | null>(0);
  const [running, setRunning] = useState(false);
  const [runStep, setRunStep] = useState(-1);
  const [done, setDone] = useState(false);
  const [xp, setXp] = useState(0);
  const [shake, setShake] = useState<number | null>(null);
  const [burst, setBurst] = useState(0);
  const [inspect, setInspect] = useState<string>("Apache Kafka");
  const [log, setLog] = useState<LogLine[]>([
    { text: `mission loaded: ${missions[0].title}`, kind: "info" },
    { text: `pick a tool for ${missions[0].stages[0].name}`, kind: "info" },
  ]);

  // ── Tokens (same family as the rest of the site)
  const bg          = isDark ? "#080f14" : "#091420";
  const panel       = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.045)";
  const deep        = isDark ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.25)";
  const border      = isDark ? "rgba(255,255,255,0.08)" : "rgba(99,179,255,0.13)";
  const textPrimary = isDark ? "#e8f4f0" : "#e0f2ff";
  const textMuted   = isDark ? "rgba(232,244,240,0.55)" : "rgba(224,242,255,0.52)";
  const textFaint   = isDark ? "rgba(232,244,240,0.25)" : "rgba(224,242,255,0.22)";
  const gridColor   = isDark ? "rgba(0,255,180,0.03)" : "rgba(99,179,255,0.04)";
  const accent      = isDark ? "#00ffb4" : "#fbbf24";
  const onAccent    = isDark ? "#05090e" : "#0d1b2a";
  const danger      = "#ff6b6b";
  const mono = "'Space Mono', monospace";
  const sans = "'Outfit', sans-serif";

  const mission = missions[mi];
  const filled = slots.every(Boolean);
  const level = Math.min(Math.floor(xp / 200), levelTitles.length - 1);
  const levelPct = ((xp % 200) / 200) * 100;
  const catColor = (c: Category) => (isDark ? c.accentDark : c.accentLight);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => { obs.disconnect(); timers.current.forEach(clearTimeout); };
  }, []);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [log]);

  const push = (...lines: LogLine[]) => setLog(l => [...l.slice(-40), ...lines]);
  const later = (fn: () => void, ms: number) => { timers.current.push(window.setTimeout(fn, ms)); };

  const loadMission = (i: number) => {
    timers.current.forEach(clearTimeout); timers.current = [];
    setMi(i); setSlots(missions[i].stages.map(() => null)); setActive(0);
    setRunning(false); setRunStep(-1); setDone(false);
    setLog([
      { text: `mission loaded: ${missions[i].title}`, kind: "info" },
      { text: `pick a tool for ${missions[i].stages[0].name}`, kind: "info" },
    ]);
  };

  const nextEmpty = (arr: (string | null)[], from: number) => {
    for (let k = 1; k <= arr.length; k++) { const j = (from + k) % arr.length; if (!arr[j]) return j; }
    return null;
  };

  const pickTool = (name: string) => {
    setInspect(name);
    if (active === null || running || done) return;
    const stage = mission.stages[active];
    if (!stage.accepts.includes(name)) {
      setShake(active); later(() => setShake(null), 450);
      push({ text: `${name} doesn't fit ${stage.name}: ${stage.hint}`, kind: "err" });
      return;
    }
    const next = [...slots]; next[active] = name; setSlots(next);
    push({ text: `${name} → ${stage.name}`, kind: "ok" });
    const n = nextEmpty(next, active);
    setActive(n);
    if (n !== null) push({ text: `pick a tool for ${mission.stages[n].name}`, kind: "info" });
    else push({ text: "all stages filled. hit run.", kind: "info" });
  };

  const clickSlot = (i: number) => {
    if (running || done) return;
    if (slots[i]) { const next = [...slots]; next[i] = null; setSlots(next); }
    setActive(i);
  };

  const autoBuild = () => {
    if (running) return;
    if (done) loadMission(mi);
    const picks = mission.stages.map(s => s.pick);
    setSlots(picks); setActive(null); setInspect(picks[0]);
    push({ text: "autofilled with the stack I'd use", kind: "info" }, { text: "all stages filled. hit run.", kind: "info" });
  };

  const run = () => {
    if (!filled || running || done) return;
    setRunning(true); setActive(null);
    push({ text: `▶ running ${mission.title.toLowerCase()}…`, kind: "info" });
    const step = 650;
    mission.stages.forEach((s, i) => {
      later(() => {
        setRunStep(i);
        push({ text: `[${s.name.toLowerCase()}] ${slots[i]}: ${s.ok}`, kind: "ok" });
      }, step * (i + 1));
    });
    later(() => {
      const matches = mission.stages.filter((s, i) => s.pick === slots[i]).length;
      const gained = 120 + matches * 20;
      setXp(x => x + gained);
      setRunning(false); setDone(true); setRunStep(mission.stages.length); setBurst(b => b + 1);
      push(
        { text: `✓ pipeline succeeded  +${gained} XP`, kind: "win" },
        { text: matches === mission.stages.length ? "that's exactly how I'd build it." : `${matches}/${mission.stages.length} tools match my go-to stack.`, kind: "info" },
      );
    }, step * (mission.stages.length + 1));
  };

  const inspected = findSkill(inspect);
  const fitsActive = (name: string) => active !== null && !running && !done && mission.stages[active].accepts.includes(name);
  const hinting = active !== null && !running && !done;

  const reveal = (d: number) => ({
    opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(18px)",
    transition: `opacity .65s ease ${d}s, transform .65s ease ${d}s`,
  });

  const lineColor = (k: LogLine["kind"]) => k === "ok" ? accent : k === "err" ? danger : k === "win" ? textPrimary : textMuted;

  const Btn: React.FC<{ onClick: () => void; disabled?: boolean; primary?: boolean; children: React.ReactNode }> =
    ({ onClick, disabled, primary, children }) => (
      <ButtonBase onClick={onClick} disabled={disabled} sx={{
        fontFamily: mono, fontSize: "0.72rem", fontWeight: 700, px: 2, py: 1, borderRadius: "6px",
        border: `1px solid ${primary ? accent : border}`,
        background: primary ? accent : "transparent", color: primary ? onAccent : textPrimary,
        opacity: disabled ? 0.35 : 1, transition: "transform .15s, box-shadow .2s",
        boxShadow: primary && !disabled ? `0 0 22px ${accent}55` : "none",
        "&:hover": { transform: disabled ? "none" : "translateY(-1px)" },
        "&.Mui-focusVisible": { outline: `2px solid ${accent}`, outlineOffset: 2 },
      }}>
        {children}
      </ButtonBase>
    );

  return (
    <Box id="skills" ref={sectionRef} sx={{
      position: "relative", backgroundColor: bg,
      py: { xs: 8, md: 12 }, px: { xs: 2.5, sm: 5, md: 8, lg: 14 }, overflow: "hidden",
      "@keyframes skPulse": { "0%,100%": { boxShadow: `0 0 0 0 ${accent}66` }, "50%": { boxShadow: `0 0 0 6px ${accent}00` } },
      "@keyframes skShake": { "0%,100%": { transform: "translateX(0)" }, "25%": { transform: "translateX(-6px)" }, "75%": { transform: "translateX(6px)" } },
      "@keyframes skFlow": { from: { left: "-10%" }, to: { left: "100%" } },
      "@keyframes skPop": { from: { transform: "scale(.6)", opacity: 0 }, to: { transform: "scale(1)", opacity: 1 } },
      "@keyframes skBurst": {
        "0%": { transform: "translate(0,0) rotate(0)", opacity: 1 },
        "100%": { transform: "translate(var(--dx), var(--dy)) rotate(220deg)", opacity: 0 },
      },
      "@keyframes skBlink": { "0%,49%": { opacity: 1 }, "50%,100%": { opacity: 0 } },
      "@media (prefers-reduced-motion: reduce)": { "& *": { animation: "none !important", transition: "none !important" } },
    }}>
      {/* grid */}
      <Box sx={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
        backgroundSize: "44px 44px",
      }} />

      {/* section label */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 6, position: "relative", ...reveal(0) }}>
        <Typography sx={{ fontFamily: mono, fontSize: "0.65rem", color: accent, letterSpacing: "0.12em" }}>04 /</Typography>
        <Box sx={{ flex: 1, height: "1px", background: border }} />
        <Typography sx={{ fontFamily: mono, fontSize: "0.65rem", color: textFaint }}>pipeline_builder.exe</Typography>
      </Box>

      {/* heading */}
      <Box sx={{ mb: 6, position: "relative", ...reveal(0.1) }}>
        <Typography sx={{
          fontFamily: sans, fontWeight: 900, fontSize: { xs: "2.4rem", sm: "3rem", md: "3.6rem" },
          lineHeight: 0.95, letterSpacing: "-0.03em", color: textPrimary, mb: 1.2,
        }}>
          Tech <span style={{ color: accent }}>Stack</span>
        </Typography>
        <Typography sx={{ fontFamily: sans, fontSize: "1.02rem", color: textMuted, maxWidth: 560 }}>
          Don't just read my skills, build with them. Pick a tool for each stage, run the pipeline, and see how I'd use it.
        </Typography>
      </Box>

      {/* ══ GAME CONSOLE ══ */}
      <Box sx={{
        position: "relative", border: `1px solid ${border}`, borderRadius: "12px",
        background: panel, overflow: "hidden", mb: 6, ...reveal(0.2),
      }}>
        {/* top bar: mission + XP */}
        <Box sx={{
          display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center", justifyContent: "space-between",
          px: { xs: 2, md: 3 }, py: 2, borderBottom: `1px solid ${border}`, background: deep,
        }}>
          <Box sx={{ display: "flex", gap: 0.8 }}>
            {missions.map((m, i) => (
              <ButtonBase key={m.title} onClick={() => loadMission(i)} aria-pressed={i === mi} title={m.title}
                sx={{
                  fontFamily: mono, fontSize: "0.65rem", px: 1.3, py: 0.6, borderRadius: "5px",
                  border: `1px solid ${i === mi ? accent : border}`,
                  color: i === mi ? accent : textMuted, background: i === mi ? `${accent}14` : "transparent",
                  "&.Mui-focusVisible": { outline: `2px solid ${accent}` },
                }}>
                mission {i + 1}
              </ButtonBase>
            ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, minWidth: 220 }}>
            <Typography sx={{ fontFamily: mono, fontSize: "0.65rem", color: accent, whiteSpace: "nowrap" }}>
              lvl {level + 1} {levelTitles[level]}
            </Typography>
            <Box sx={{ flex: 1, height: 6, borderRadius: 3, background: "rgba(255,255,255,0.08)", overflow: "hidden", minWidth: 80 }}>
              <Box sx={{ height: "100%", width: `${level === levelTitles.length - 1 ? 100 : levelPct}%`, background: accent, transition: "width .6s ease" }} />
            </Box>
            <Typography sx={{ fontFamily: mono, fontSize: "0.65rem", color: textMuted }}>{xp} XP</Typography>
          </Box>
        </Box>

        {/* mission brief */}
        <Box sx={{ px: { xs: 2, md: 3 }, pt: 3 }}>
          <Typography key={`t${mi}`} sx={{ fontFamily: sans, fontWeight: 800, fontSize: { xs: "1.3rem", md: "1.6rem" }, color: textPrimary, animation: "skPop .35s ease both" }}>
            {mission.title}
          </Typography>
          <Typography sx={{ fontFamily: sans, fontSize: "0.95rem", color: textMuted, mt: 0.3 }}>{mission.brief}</Typography>
        </Box>

        {/* pipeline track */}
        <Box sx={{
          display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { md: "stretch" },
          px: { xs: 2, md: 3 }, py: 3, position: "relative",
        }}>
          {mission.stages.map((s, i) => {
            const tool = slots[i] ? findSkill(slots[i]!) : undefined;
            const c = tool ? catColor(tool.cat) : accent;
            const isActive = active === i;
            const lit = runStep >= i;
            return (
              <React.Fragment key={`${mi}-${s.name}`}>
                <ButtonBase
                  onClick={() => clickSlot(i)}
                  aria-label={`${s.name} stage${tool ? `: ${tool.name}` : ", empty"}`}
                  sx={{
                    flex: 1, minHeight: { xs: 72, md: 130 }, borderRadius: "10px", p: 1.8,
                    display: "flex", flexDirection: { xs: "row", md: "column" }, alignItems: "center",
                    justifyContent: { xs: "flex-start", md: "center" }, gap: 1.5,
                    border: `1.5px ${tool ? "solid" : "dashed"} ${isActive ? accent : lit ? c : tool ? `${c}88` : border}`,
                    background: lit ? `${c}1f` : tool ? `${c}0d` : "rgba(0,0,0,0.15)",
                    boxShadow: lit ? `0 0 26px ${c}44` : "none",
                    animation: shake === i ? "skShake .4s ease" : isActive ? "skPulse 1.5s ease-in-out infinite" : "none",
                    transition: "background .3s, box-shadow .3s, border-color .3s",
                    "&.Mui-focusVisible": { outline: `2px solid ${accent}`, outlineOffset: 2 },
                  }}
                >
                  <Box sx={{ textAlign: { xs: "left", md: "center" }, order: { xs: 2, md: 0 } }}>
                    <Typography sx={{ fontFamily: mono, fontSize: "0.6rem", color: isActive ? accent : textMuted }}>
                      {String(i + 1).padStart(2, "0")} {s.name.toLowerCase()}
                    </Typography>
                    <Typography sx={{ fontFamily: sans, fontWeight: 700, fontSize: "0.9rem", color: tool ? textPrimary : textFaint, mt: 0.3 }}>
                      {tool ? tool.name : isActive ? "choose a tool below" : "empty"}
                    </Typography>
                  </Box>
                  <Box sx={{
                    width: 44, height: 44, borderRadius: "10px", flexShrink: 0, display: "grid", placeItems: "center",
                    background: tool ? "rgba(255,255,255,0.06)" : "transparent",
                    border: tool ? "none" : `1px dashed ${border}`, order: { xs: 1, md: 0 },
                  }}>
                    {tool
                      ? <Box key={tool.name} component="img" src={tool.icon} alt="" onError={(e: React.SyntheticEvent<HTMLImageElement>) => { e.currentTarget.src = `${I8}/code.png`; }}
                          sx={{ width: 28, height: 28, objectFit: "contain", animation: "skPop .3s ease both" }} />
                      : <Typography sx={{ fontFamily: mono, color: textFaint }}>?</Typography>}
                  </Box>
                </ButtonBase>

                {i < mission.stages.length - 1 && (
                  <Box sx={{
                    position: "relative", flex: { md: "0 0 34px" }, height: { xs: 22, md: "auto" },
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Box sx={{
                      width: { xs: "2px", md: "100%" }, height: { xs: "100%", md: "2px" },
                      background: runStep > i ? accent : border, transition: "background .3s", position: "relative", overflow: "hidden",
                    }}>
                      {running && runStep === i && (
                        <Box sx={{ position: "absolute", top: 0, width: { xs: "2px", md: "40%" }, height: { xs: "40%", md: "2px" }, background: textPrimary, animation: "skFlow .65s linear infinite" }} />
                      )}
                    </Box>
                  </Box>
                )}
              </React.Fragment>
            );
          })}

          {/* success burst */}
          {done && (
            <Box key={burst} aria-hidden sx={{ position: "absolute", left: "50%", top: "50%", pointerEvents: "none" }}>
              {Array.from({ length: 18 }).map((_, k) => {
                const ang = (k / 18) * Math.PI * 2;
                const dist = 90 + (k % 3) * 45;
                return (
                  <Box key={k} sx={{
                    position: "absolute", width: 7, height: 7, borderRadius: k % 2 ? "50%" : "1px",
                    background: k % 3 === 0 ? textPrimary : accent,
                    "--dx": `${Math.cos(ang) * dist * 2.2}px`, "--dy": `${Math.sin(ang) * dist}px`,
                    animation: `skBurst .9s cubic-bezier(.2,.7,.3,1) ${(k % 4) * 0.03}s both`,
                  } as any} />
                );
              })}
            </Box>
          )}
        </Box>

        {/* controls */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.2, px: { xs: 2, md: 3 }, pb: 3 }}>
          {done
            ? <Btn primary onClick={() => loadMission((mi + 1) % missions.length)}>next mission</Btn>
            : <Btn primary onClick={run} disabled={!filled || running}>{running ? "running…" : "▶ run pipeline"}</Btn>}
          <Btn onClick={autoBuild} disabled={running}>show my build</Btn>
          <Btn onClick={() => loadMission(mi)} disabled={running}>reset</Btn>
        </Box>

        {/* log + inspector */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.3fr 1fr" }, borderTop: `1px solid ${border}` }}>
          <Box ref={logRef} aria-live="polite" sx={{
            height: 170, overflowY: "auto", p: 2, background: deep,
            borderRight: { md: `1px solid ${border}` }, borderBottom: { xs: `1px solid ${border}`, md: "none" },
            "&::-webkit-scrollbar": { width: 4 }, "&::-webkit-scrollbar-thumb": { background: border },
          }}>
            {log.map((l, k) => (
              <Typography key={k} sx={{ fontFamily: mono, fontSize: "0.68rem", lineHeight: 1.9, color: lineColor(l.kind), fontWeight: l.kind === "win" ? 700 : 400 }}>
                <span style={{ color: textFaint }}>{">"} </span>{l.text}
              </Typography>
            ))}
            <Box component="span" sx={{ display: "inline-block", width: 7, height: 12, background: accent, animation: "skBlink 1s step-end infinite" }} />
          </Box>

          <Box sx={{ p: 2.5, minHeight: 170 }}>
            <Typography sx={{ fontFamily: mono, fontSize: "0.6rem", color: textFaint, mb: 1.2 }}>inspector</Typography>
            {inspected && (
              <Box key={inspected.name} sx={{ display: "flex", gap: 1.8, animation: "skPop .3s ease both" }}>
                <Box sx={{ width: 52, height: 52, borderRadius: "12px", background: "rgba(255,255,255,0.06)", display: "grid", placeItems: "center", flexShrink: 0, border: `1px solid ${catColor(inspected.cat)}55` }}>
                  <Box component="img" src={inspected.icon} alt="" onError={(e: React.SyntheticEvent<HTMLImageElement>) => { e.currentTarget.src = `${I8}/code.png`; }}
                    sx={{ width: 32, height: 32, objectFit: "contain" }} />
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: sans, fontWeight: 800, fontSize: "1.05rem", color: textPrimary }}>{inspected.name}</Typography>
                  <Typography sx={{ fontFamily: mono, fontSize: "0.6rem", color: catColor(inspected.cat), mb: 0.8 }}>{inspected.cat.label}</Typography>
                  <Typography sx={{ fontFamily: sans, fontSize: "0.88rem", lineHeight: 1.6, color: textMuted }}>{inspected.use}</Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      {/* ══ INVENTORY ══ */}
      <Box sx={{ position: "relative", ...reveal(0.3) }}>
        <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 1, mb: 3 }}>
          <Typography sx={{ fontFamily: sans, fontWeight: 800, fontSize: "1.3rem", color: textPrimary }}>
            Inventory <Box component="span" sx={{ fontFamily: mono, fontSize: "0.7rem", color: textMuted, fontWeight: 400 }}>{allSkills.length} tools</Box>
          </Typography>
          <Typography sx={{ fontFamily: mono, fontSize: "0.65rem", color: hinting ? accent : textFaint }}>
            {hinting ? `glowing tools fit ${mission.stages[active!].name.toLowerCase()}` : "click any tool to inspect it"}
          </Typography>
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, columnGap: 5, rowGap: 3.5 }}>
          {categories.map(cat => {
            const c = catColor(cat);
            return (
              <Box key={cat.label}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.2 }}>
                  <Box sx={{ width: 7, height: 7, borderRadius: "2px", background: c }} />
                  <Typography sx={{ fontFamily: mono, fontSize: "0.68rem", fontWeight: 700, color: c }}>{cat.label}</Typography>
                  <Box sx={{ flex: 1, height: "1px", background: border }} />
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                  {cat.skills.map(s => {
                    const fits = fitsActive(s.name);
                    const used = slots.includes(s.name);
                    const sel = inspect === s.name;
                    return (
                      <ButtonBase key={s.name} onClick={() => pickTool(s.name)} onMouseEnter={() => setInspect(s.name)}
                        aria-label={`${s.name}${fits ? ", fits this stage" : ""}`}
                        sx={{
                          display: "inline-flex", alignItems: "center", gap: 0.9, pl: 0.8, pr: 1.3, py: 0.6,
                          borderRadius: "7px", fontFamily: sans, fontWeight: 600, fontSize: "0.78rem",
                          border: `1px solid ${fits || sel ? c : border}`,
                          background: fits ? `${c}1c` : used ? `${c}12` : "rgba(255,255,255,0.03)",
                          color: fits || sel || used ? textPrimary : textMuted,
                          opacity: hinting && !fits && !used ? 0.45 : 1,
                          boxShadow: fits ? `0 0 14px ${c}44` : "none",
                          transition: "opacity .25s, background .2s, border-color .2s, transform .15s, box-shadow .25s",
                          "&:hover": { opacity: 1, transform: "translateY(-2px)", borderColor: c, color: textPrimary },
                          "&.Mui-focusVisible": { outline: `2px solid ${c}`, outlineOffset: 2, opacity: 1 },
                        }}>
                        <Box component="img" src={s.icon} alt="" loading="lazy"
                          onError={(e: React.SyntheticEvent<HTMLImageElement>) => { e.currentTarget.src = `${I8}/code.png`; }}
                          sx={{ width: 18, height: 18, objectFit: "contain" }} />
                        {s.name}
                        {used && <Box component="span" sx={{ fontFamily: mono, fontSize: "0.6rem", color: c }}>✓</Box>}
                      </ButtonBase>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* bottom rule */}
      <Box sx={{ mt: 10, display: "flex", alignItems: "center", gap: 2, position: "relative", ...reveal(0.4) }}>
        <Box sx={{ flex: 1, height: "1px", background: border }} />
        <Typography sx={{ fontFamily: mono, fontSize: "0.6rem", color: textFaint, letterSpacing: "0.08em" }}>end_of_section</Typography>
      </Box>
    </Box>
  );
};

export default Skills;