import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, useTheme, Chip, ButtonBase } from "@mui/material";

const About: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [cloud, setCloud] = useState(0);

  // ── Tokens — navy+gold light / black+green dark ───────────────
  const accent = isDark ? "#00ffb4" : "#fbbf24";
  const bg = isDark ? "#080f14" : "#091420";
  const cardBg = isDark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.04)";
  const cardBorder = isDark ? "rgba(255,255,255,0.07)" : "rgba(99,179,255,0.1)";
  const editorBg = isDark ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.22)";
  const textPrimary = isDark ? "#e8f4f0" : "#e0f2ff";
  const textMuted = isDark ? "rgba(232,244,240,0.52)" : "rgba(224,242,255,0.48)";
  const gridColor = isDark ? "rgba(255,255,255,0.025)" : "rgba(99,179,255,0.03)";
  const gutter = isDark ? "rgba(232,244,240,0.18)" : "rgba(224,242,255,0.18)";
  const endLabel = isDark ? "rgba(0,255,180,0.2)" : "rgba(251,191,36,0.2)";
  const fileLabel = isDark ? "rgba(232,244,240,0.2)" : "rgba(224,242,255,0.18)";
  const mono = "'Space Mono', monospace";
  const sans = "'Outfit', sans-serif";

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // ── Content ───────────────────────────────────────────────────
  const clouds = [
    { label: "Azure", color: isDark ? "#00ffb4" : "#fbbf24",
      chips: ["Azure Data Factory", "Azure Databricks", "Azure Synapse", "ADLS Gen2", "Azure Event Hubs", "Azure SQL", "Azure DevOps"] },
    { label: "AWS", color: isDark ? "#60a5fa" : "#fb923c",
      chips: ["S3", "Glue", "Redshift", "EMR", "Athena", "Lambda"] },
    { label: "GCP", color: isDark ? "#f9a8d4" : "#86efac",
      chips: ["BigQuery", "Dataflow", "Pub/Sub", "Cloud Composer", "GCS"] },
  ];
  const processStage = { label: "Data Engineering", color: isDark ? "#fbbf24" : "#a78bfa",
    chips: ["PySpark", "Kafka", "Snowflake", "dbt", "Delta Lake", "Airflow", "SQL", "Python"] };
  const shipStage = { label: "Tools & DevOps", color: isDark ? "#a78bfa" : "#f9a8d4",
    chips: ["Git", "GitHub", "Docker", "Linux", "CI/CD", "Jira"] };

  const paragraphs = [
    { highlight: "Aspiring Data Engineer",
      text: "with hands-on experience designing and building scalable data pipelines using Azure Data Factory, Databricks, PySpark, Delta Lake, and Azure Synapse Analytics. I focus on transforming raw data into reliable, analytics-ready datasets that support business decision-making." },
    { highlight: "Cloud Data Engineering Practitioner",
      text: "with practical exposure to Azure, AWS, and GCP ecosystems. I have worked with services including Azure Data Factory, ADLS Gen2, Databricks, Snowflake, AWS S3, Glue, and BigQuery to build modern data platforms and ETL workflows." },
    { highlight: "Batch & Real-Time Data Processing",
      text: "experienced in developing data ingestion and transformation pipelines using PySpark, Kafka, Delta Lake, and SQL. I enjoy solving complex data challenges involving large-scale processing, optimization, and data quality management." },
    { highlight: "Strong Foundation in Data Systems",
      text: "with expertise in database design, data modeling, ETL development, warehousing concepts, and cloud-native architectures. I keep improving through hands-on projects and real-world implementations." },
    { highlight: "Recent Master's Graduate",
      text: "seeking full-time opportunities in Data Engineering, Analytics Engineering, and Cloud Data Platforms where I can help build scalable, reliable, business-focused data solutions." },
  ];

  const reveal = (delay: number, from = "translateY(18px)") => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : from,
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  // ── Small building blocks ─────────────────────────────────────
  const WindowBar: React.FC<{ file: string; right?: string }> = ({ file, right }) => (
    <Box sx={{
      display: "flex", alignItems: "center", gap: 1.5, px: 2, py: 1.1,
      borderBottom: `1px solid ${cardBorder}`, background: "rgba(255,255,255,0.02)",
    }}>
      <Box sx={{ display: "flex", gap: 0.6 }}>
        {["#ff5f57", "#febc2e", "#28c840"].map(c => (
          <Box key={c} sx={{ width: 9, height: 9, borderRadius: "50%", background: c, opacity: 0.8 }} />
        ))}
      </Box>
      <Box sx={{
        fontFamily: mono, fontSize: "0.68rem", color: textPrimary,
        px: 1.2, py: 0.3, borderRadius: "4px 4px 0 0",
        borderBottom: `1.5px solid ${accent}`,
      }}>
        {file}
      </Box>
      <Box sx={{ flex: 1 }} />
      {right && <Typography sx={{ fontFamily: mono, fontSize: "0.6rem", color: fileLabel }}>{right}</Typography>}
    </Box>
  );

  const ChipList: React.FC<{ chips: string[]; color: string; animKey?: string | number }> = ({ chips, color, animKey }) => (
    <Box key={animKey} sx={{ display: "flex", flexWrap: "wrap", gap: 0.7 }}>
      {chips.map((chip, i) => (
        <Chip key={chip} label={chip} size="small" sx={{
          fontFamily: sans, fontWeight: 600, fontSize: "0.7rem", height: 24, borderRadius: "3px",
          background: "rgba(255,255,255,0.05)", color: textMuted, border: `1px solid ${cardBorder}`,
          "& .MuiChip-label": { px: 1 },
          "&:hover": { background: "rgba(255,255,255,0.09)", color, borderColor: color },
          transition: "color 0.18s ease, border-color 0.18s ease", cursor: "default",
          animation: animKey !== undefined ? `chipIn 0.35s ease ${i * 0.035}s both` : undefined,
        }} />
      ))}
    </Box>
  );

  // animated connector between pipeline stages
  const Connector: React.FC<{ from: string; to: string }> = ({ from, to }) => (
    <Box sx={{ position: "relative", height: 38, ml: "22px", width: "2px" }}>
      <Box sx={{ position: "absolute", inset: 0, background: `linear-gradient(${from}, ${to})`, opacity: 0.45 }} />
      {[0, 0.8].map(d => (
        <Box key={d} className="packet" sx={{
          position: "absolute", left: "-2px", width: 6, height: 6, borderRadius: "1px",
          background: to, boxShadow: `0 0 8px ${to}`,
          animation: `flowDown 1.6s linear ${d}s infinite`,
        }} />
      ))}
    </Box>
  );

  const StageCard: React.FC<{ step: string; title: string; color: string; children: React.ReactNode; delay: number }> =
    ({ step, title, color, children, delay }) => (
      <Box sx={{
        border: `1px solid ${cardBorder}`, borderLeft: `2px solid ${color}`,
        borderRadius: "6px", p: 2, background: cardBg, ...reveal(delay, "translateX(20px)"),
      }}>
        <Box sx={{ display: "flex", alignItems: "baseline", gap: 1.2, mb: 1.5 }}>
          <Typography sx={{ fontFamily: mono, fontSize: "0.62rem", color }}>{step}/</Typography>
          <Typography sx={{ fontFamily: sans, fontWeight: 700, fontSize: "0.95rem", color: textPrimary }}>
            {title}
          </Typography>
        </Box>
        {children}
      </Box>
    );

  const active = clouds[cloud];

  return (
    <Box
      id="about"
      ref={sectionRef}
      sx={{
        position: "relative", backgroundColor: bg,
        py: { xs: 8, md: 12 }, px: { xs: 3, sm: 5, md: 10, lg: 16 }, overflow: "hidden",
        "@keyframes flowDown": {
          "0%": { top: "-4px", opacity: 0 }, "15%": { opacity: 1 },
          "85%": { opacity: 1 }, "100%": { top: "calc(100% - 2px)", opacity: 0 },
        },
        "@keyframes chipIn": {
          from: { opacity: 0, transform: "translateY(4px)" }, to: { opacity: 1, transform: "none" },
        },
        "@keyframes caret": { "0%, 49%": { opacity: 1 }, "50%, 100%": { opacity: 0 } },
        "@media (prefers-reduced-motion: reduce)": {
          "& .packet": { display: "none" },
          "& *": { animation: "none !important", transition: "none !important" },
        },
      }}
    >
      {/* grid */}
      <Box sx={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
        backgroundSize: "44px 44px",
      }} />

      {/* section label */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 6, ...reveal(0, "translateY(16px)") }}>
        <Typography sx={{ fontFamily: mono, fontSize: "0.65rem", color: accent, letterSpacing: "0.12em" }}>02 /</Typography>
        <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
        <Typography sx={{ fontFamily: mono, fontSize: "0.65rem", color: fileLabel, letterSpacing: "0.08em" }}>about.md</Typography>
      </Box>

      {/* heading */}
      <Box sx={{ mb: 7, ...reveal(0.1, "translateY(20px)") }}>
        <Typography sx={{
          fontFamily: sans, fontWeight: 900, fontSize: { xs: "2.4rem", sm: "3rem", md: "3.6rem" },
          lineHeight: 0.95, letterSpacing: "-0.03em", color: textPrimary, mb: 1,
        }}>
          About <span style={{ color: accent }}>Me</span>
        </Typography>
        <Typography sx={{ fontFamily: mono, fontSize: "0.72rem", color: textMuted, letterSpacing: "0.06em" }}>
          // how I think about data, and the stack I use to move it
        </Typography>
      </Box>

      <Box sx={{
        display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1.1fr 1fr" },
        gap: { xs: 6, lg: 8 }, position: "relative", zIndex: 1, alignItems: "start",
      }}>
        {/* ── LEFT — bio as an open file in an editor ── */}
        <Box sx={{
          border: `1px solid ${cardBorder}`, borderRadius: "8px", overflow: "hidden",
          background: editorBg, ...reveal(0.15),
        }}>
          <WindowBar file="about.md" right="markdown" />
          <Box sx={{ py: 2.5 }}>
            {paragraphs.map((p, i) => (
              <Box key={i} sx={{
                display: "grid", gridTemplateColumns: "44px 1fr", pr: 3, mb: 2.2,
                ...reveal(0.2 + i * 0.08, "translateY(10px)"),
              }}>
                <Typography sx={{
                  fontFamily: mono, fontSize: "0.62rem", color: gutter,
                  textAlign: "right", pr: 2, pt: "4px", userSelect: "none",
                }}>
                  {String(i * 3 + 1).padStart(2, "0")}
                </Typography>
                <Box>
                  <Typography sx={{ fontFamily: mono, fontSize: "0.8rem", fontWeight: 700, color: textPrimary, mb: 0.5 }}>
                    <span style={{ color: accent }}>## </span>{p.highlight}
                  </Typography>
                  <Typography sx={{ fontFamily: sans, fontSize: { xs: "0.9rem", md: "0.95rem" }, lineHeight: 1.75, color: textMuted }}>
                    {p.text}
                  </Typography>
                </Box>
              </Box>
            ))}

            {/* closing status line with blinking caret */}
            <Box sx={{ display: "grid", gridTemplateColumns: "44px 1fr", pr: 3, ...reveal(0.65, "none") }}>
              <Typography sx={{ fontFamily: mono, fontSize: "0.62rem", color: gutter, textAlign: "right", pr: 2, pt: "3px" }}>
                {String(paragraphs.length * 3 + 1).padStart(2, "0")}
              </Typography>
              <Typography sx={{ fontFamily: mono, fontSize: "0.78rem", color: textMuted }}>
                <span style={{ color: accent }}>status</span> = "open_to_work"
                <Box component="span" sx={{
                  display: "inline-block", width: "7px", height: "0.95em", ml: 0.6,
                  verticalAlign: "text-bottom", background: accent,
                  animation: "caret 1s step-end infinite",
                }} />
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ── RIGHT — tech stack as a pipeline: sources → process → ship ── */}
        <Box>
          <Typography sx={{ fontFamily: mono, fontSize: "0.65rem", color: fileLabel, mb: 2, ...reveal(0.15) }}>
            stack_pipeline.yaml
          </Typography>

          <StageCard step="ingest" title="Cloud platforms" color={active.color} delay={0.2}>
            {/* cloud tabs */}
            <Box role="tablist" aria-label="Cloud platform" sx={{
              display: "inline-flex", p: 0.4, mb: 1.6, gap: 0.4,
              border: `1px solid ${cardBorder}`, borderRadius: "6px", background: "rgba(0,0,0,0.2)",
            }}>
              {clouds.map((c, i) => {
                const on = i === cloud;
                return (
                  <ButtonBase key={c.label} role="tab" aria-selected={on} onClick={() => setCloud(i)}
                    sx={{
                      fontFamily: mono, fontSize: "0.7rem", px: 1.6, py: 0.6, borderRadius: "4px",
                      color: on ? (isDark ? "#05090e" : "#0d1b2a") : textMuted,
                      background: on ? c.color : "transparent",
                      transition: "background 0.2s ease, color 0.2s ease",
                      "&:hover": { color: on ? undefined : c.color },
                      "&.Mui-focusVisible": { outline: `2px solid ${c.color}`, outlineOffset: 2 },
                    }}>
                    {c.label}
                  </ButtonBase>
                );
              })}
            </Box>
            <ChipList chips={active.chips} color={active.color} animKey={cloud} />
          </StageCard>

          <Connector from={active.color} to={processStage.color} />

          <StageCard step="process" title={processStage.label} color={processStage.color} delay={0.3}>
            <ChipList chips={processStage.chips} color={processStage.color} />
          </StageCard>

          <Connector from={processStage.color} to={shipStage.color} />

          <StageCard step="ship" title={shipStage.label} color={shipStage.color} delay={0.4}>
            <ChipList chips={shipStage.chips} color={shipStage.color} />
          </StageCard>
        </Box>
      </Box>

      {/* bottom line */}
      <Box sx={{ mt: 10, display: "flex", alignItems: "center", gap: 2, opacity: visible ? 1 : 0, transition: "opacity 0.7s ease 0.7s" }}>
        <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
        <Typography sx={{ fontFamily: mono, fontSize: "0.6rem", color: endLabel, letterSpacing: "0.08em" }}>
          end_of_section
        </Typography>
      </Box>
    </Box>
  );
};

export default About;