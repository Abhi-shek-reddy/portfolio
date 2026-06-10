
import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  Box, Button, Typography, IconButton,
  Dialog, DialogTitle, DialogContent, TextField,
  DialogActions, Snackbar, Alert, useTheme, Chip,
} from "@mui/material";
import {
  GitHub, LinkedIn, Instagram, Mail, WhatsApp,
  Send, Close, ArrowForward, Download,
  Work as WorkIcon, School as SchoolIcon,
  Cloud as CloudIcon, Code as CodeIcon,
} from "@mui/icons-material";
import Lottie from "lottie-react";
import hiAnimation from "../lottie/Hello.json";
import { replaceLottieColor } from "../utils/replaceLottieColor";
import "./Home.css";

// ── Resume data ───────────────────────────────────────────────────────────────
const resume = {
  name: "Abhishek Reddy Manam",
  title: "Data Engineer · Analytics Engineer",
  location: "Delaware, USA",
  email: "abhishekreddymanam@gmail.com",
  phone: "+1 484-482-9961",
  linkedin: "linkedin.com/in/abhishek-reddy-manam-1b5167204",
  github: "github.com/Abhi-shek-reddy",
  summary:
    "Azure-focused Data Engineer with hands-on experience building scalable data platforms across Azure, AWS, and GCP. Skilled in Azure Data Factory, Databricks, PySpark, Snowflake, Kafka, Airflow, Delta Lake, and modern lakehouse architectures. Passionate about building reliable, analytics-ready data solutions that drive business value.",
  experience: [
    {
      role: "Data Engineer",
      company: "Digiuniv Technologies",
      duration: "Oct 2021 – Jul 2024",
      type: "Full-time",
      points: [
        "Architected a metadata-driven ADF framework with JSON-config-driven workflows across 40+ linked services — cut new source onboarding from days to hours",
        "Elevated PySpark workloads in Databricks with broadcast joins, predicate pushdown, and AQE on top of Delta Lake Medallion Architecture (Bronze→Silver→Gold) — reducing pipeline latency by 50%",
        "Owned dbt transformation layer in Snowflake with staging/intermediate/mart conventions, SCD Type 2 snapshots, and CI/CD-gated deployment via GitHub Actions — reducing data quality incidents by 40%",
        "Built Kafka + PySpark Structured Streaming pipeline processing 5M+ events/day with exactly-once semantics consuming from Azure Event Hubs into Azure Synapse Analytics",
        "Migrated Airflow to dynamic DAG generation on GCP Cloud Composer spanning BigQuery, Dataflow, and AWS Glue — cutting MTTR from 2 hours to 30 minutes",
        "Containerised all pipeline services with Docker, integrated Azure DevOps CI/CD, and provisioned infrastructure via Terraform IaC",
      ],
    },
    {
      role: "Associate Data Engineer",
      company: "Digiuniv Technologies",
      duration: "Jun 2020 – Oct 2021",
      type: "Full-time",
      points: [
        "Built dynamic ADF workflows with JSON-driven configuration scaling across multiple data sources without code changes",
        "Implemented Medallion Architecture (Bronze, Silver, Gold) with Delta Lake on ADLS Gen2 using PySpark in Azure Databricks — type casting, null handling, multi-source joins",
        "Served business-ready data through Azure Synapse Serverless SQL Pool via OPENROWSET, External Tables, and Managed Identity connected to Power BI",
        "Led dbt development in Snowflake — staging, intermediate, and mart layers with incremental strategies cutting full-refresh runtimes by ~60%",
      ],
    },
    {
      role: "Data Engineering Intern",
      company: "Digiuniv Technologies",
      duration: "Apr 2020 – Jun 2020",
      type: "Internship",
      points: [
        "Assisted building ETL pipelines on AWS (S3, Glue, Lambda, Step Functions) and GCP (BigQuery, Pub/Sub, Cloud Storage) — hands-on exposure to production-scale data movement",
        "Wrote and maintained Airflow DAGs for multi-step workflows across AWS Glue and BigQuery with Slack failure alerting",
        "Developed PySpark scripts on AWS EMR for deduplication, null-handling, and schema enforcement on large datasets",
        "Built Python utilities for data quality validation and row-count reconciliation between source and target",
      ],
    },
  ],
  education: [
    { degree: "MS Information System Technologies", school: "Wilmington University",         year: "2024–2026", gpa: "3.6 / 4.0" },
    { degree: "BTech Computer Science",             school: "Lovely Professional University", year: "",          gpa: "7.2 / 10"  },
  ],
  skills: {
    azure: ["ADF", "Databricks", "Synapse", "ADLS Gen2", "Event Hubs", "DevOps", "Purview"],
    aws:   ["S3", "Glue", "Redshift", "EMR", "Lambda", "Kinesis", "Step Functions"],
    gcp:   ["BigQuery", "Dataflow", "Pub/Sub", "Cloud Composer"],
    data:  ["Snowflake", "dbt", "PySpark", "Kafka", "Airflow", "Delta Lake", "Python", "SQL", "Terraform", "Docker", "Great Expectations"],
  },
};

// ── Main component ────────────────────────────────────────────────────────────
const Home: React.FC = () => {
  const [open, setOpen]               = useState(false);
  const [resumeOpen, setResumeOpen]   = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [form, setForm]               = useState({ name: "", email: "", message: "" });
  const [mounted, setMounted]         = useState(false);
  const canvasRef                     = useRef<HTMLCanvasElement>(null);

  const theme  = useTheme();
  const isDark = theme.palette.mode === "dark";

  // ── Design tokens ─────────────────────────────────────────────
  const accent       = isDark ? "#00ffb4" : "#fbbf24";
  const accentHover  = isDark ? "#00e8a3" : "#f59e0b";
  const accentText   = isDark ? "#05090e" : "#0d1b2a";
  const bg           = isDark ? "#05090e" : "#0d1b2a";
  const surface      = isDark ? "rgba(5,9,14,0.97)"  : "rgba(13,27,42,0.97)";
  const textPrimary  = isDark ? "#e8f4f0"  : "#e0f2ff";
  const textMuted    = isDark ? "rgba(232,244,240,0.48)" : "rgba(224,242,255,0.48)";
  const borderFaint  = isDark ? "rgba(255,255,255,0.07)" : "rgba(99,179,255,0.1)";
  const accentFaint  = isDark ? "rgba(0,255,180,0.06)"   : "rgba(251,191,36,0.07)";
  const accentBorder = isDark ? "rgba(0,255,180,0.25)"   : "rgba(251,191,36,0.28)";
  const chipBg       = isDark ? "rgba(5,9,14,0.88)"      : "rgba(13,27,42,0.88)";
  const gridColor    = isDark ? "rgba(0,255,180,0.04)"   : "rgba(99,179,255,0.04)";
  const scanColor    = isDark ? "rgba(0,255,180,0.12)"   : "rgba(251,191,36,0.1)";
  const cornerColor  = isDark ? "rgba(0,255,180,0.22)"   : "rgba(251,191,36,0.22)";
  const hexStroke    = isDark ? "rgba(0,255,180,0.2)"    : "rgba(251,191,36,0.22)";
  const hexInner     = isDark ? "rgba(0,255,180,0.07)"   : "rgba(251,191,36,0.06)";
  const hexFill      = isDark ? "rgba(0,255,180,0.02)"   : "rgba(251,191,36,0.025)";
  const hexGlow      = isDark ? "rgba(0,255,180,0.04)"   : "rgba(251,191,36,0.04)";
  const hexRing      = isDark ? "rgba(0,255,180,0.06)"   : "rgba(251,191,36,0.06)";
  const photoBorder  = isDark ? "rgba(0,255,180,0.45)"   : "rgba(251,191,36,0.5)";
  const dialogBorder = isDark ? "rgba(0,255,180,0.14)"   : "rgba(251,191,36,0.18)";
  const fieldBorder  = isDark ? "rgba(0,255,180,0.14)"   : "rgba(251,191,36,0.15)";
  const cardBg       = isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.05)";
  const cardBorder   = isDark ? "rgba(255,255,255,0.08)" : "rgba(99,179,255,0.12)";

  const skillColors: Record<string, string> = {
    azure: accent,
    aws:   isDark ? "#fbbf24" : "#fb923c",
    gcp:   isDark ? "#60a5fa" : "#93c5fd",
    data:  "#a78bfa",
  };

  const updatedLottie = useMemo(
    () => replaceLottieColor(hiAnimation, accent),
    [accent]
  );

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  // ── Particle canvas ────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const pts = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: Math.random() * 1.1 + 0.4,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const dotColor  = isDark ? "rgba(0,255,180,0.55)" : "rgba(251,191,36,0.45)";
      const lineAlpha = isDark ? 0.07 : 0.06;
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = isDark
              ? `rgba(0,255,180,${lineAlpha * (1 - d / 110)})`
              : `rgba(251,191,36,${lineAlpha * (1 - d / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [isDark]);

  // ── Typewriter ─────────────────────────────────────────────────
  const titles = [
    "Data Engineer",
    "Azure Data Engineer",
    "Analytics Engineer",
    "Cloud Data Engineer",
    "ETL Developer",
    "Problem Solver",
  ];
  const [currentText, setCurrentText] = useState("");
  const [tIdx, setTIdx]     = useState(0);
  const [subIdx, setSubIdx] = useState(0);
  const [rev, setRev]       = useState(false);

  useEffect(() => {
    if (subIdx === titles[tIdx].length + 1 && !rev) { setTimeout(() => setRev(true), 1000); return; }
    if (subIdx === 0 && rev) { setRev(false); setTIdx(p => (p + 1) % titles.length); return; }
    const t = setTimeout(() => {
      setSubIdx(p => p + (rev ? -1 : 1));
      setCurrentText(titles[tIdx].substring(0, subIdx));
    }, rev ? 36 : 75);
    return () => clearTimeout(t);
  }, [subIdx, tIdx, rev]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => {
    setSnackbarOpen(true); setOpen(false);
    setForm({ name: "", email: "", message: "" });
  };

  const socials = [
    { icon: <LinkedIn fontSize="small" />, href: "https://www.linkedin.com/in/abhishek-reddy-manam-1b5167204/", label: "LinkedIn"  },
    { icon: <GitHub    fontSize="small" />, href: "https://github.com/Abhi-shek-reddy",                          label: "GitHub"    },
    { icon: <Mail      fontSize="small" />, href: "mailto:abhishekreddymanam@gmail.com",                         label: "Email"     },
    { icon: <Instagram fontSize="small" />, href: "https://www.instagram.com/",                         label: "Instagram" },
    { icon: <WhatsApp  fontSize="small" />, href: "https://wa.me/14844829961",                                   label: "WhatsApp"  },
  ];

  const ticks = [
    [130,8,130,22],[238,70,226,77],[238,210,226,203],
    [130,272,130,258],[22,210,34,203],[22,70,34,77],
  ];

  const dialogPaper = {
    borderRadius: "10px", background: surface,
    border: `1px solid ${dialogBorder}`,
    backdropFilter: "blur(20px)",
    boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
  };

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "6px", fontFamily: "'Outfit', sans-serif", color: textPrimary,
      "& fieldset": { borderColor: fieldBorder },
      "&:hover fieldset": { borderColor: accent },
      "&.Mui-focused fieldset": { borderColor: accent },
    },
    "& .MuiInputLabel-root": { color: textMuted },
    "& .MuiInputLabel-root.Mui-focused": { color: accent },
  };

  // ── Resume section helper ──────────────────────────────────────
  const ResumeSection: React.FC<{
    icon: React.ReactNode; label: string; color: string; children: React.ReactNode;
  }> = ({ icon, label, color, children }) => (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
        <Box sx={{ color, display: "flex", alignItems: "center" }}>{icon}</Box>
        <Typography sx={{
          fontFamily: "'Space Mono', monospace", fontSize: "0.65rem",
          color, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700,
        }}>
          {label}
        </Typography>
        <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
      </Box>
      {children}
    </Box>
  );

  return (
    <>
      {/* ══ HERO ═════════════════════════════════════════════════ */}
      <Box id="home" sx={{
        position: "relative", minHeight: "100vh", display: "flex",
        alignItems: "center", overflow: "hidden",
        px: { xs: 3, sm: 5, md: 8, lg: 12 }, backgroundColor: bg,
      }}>
        {/* grid */}
        <Box sx={{
          position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
        }} />
        {/* scan line */}
        <Box sx={{
          position: "absolute", left: 0, right: 0, height: "1.5px",
          zIndex: 1, pointerEvents: "none",
          background: `linear-gradient(90deg, transparent, ${scanColor} 40%, ${scanColor} 60%, transparent)`,
          animation: "scan-anim 9s linear infinite",
        }} />
        {/* particles */}
        <canvas ref={canvasRef} style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          pointerEvents: "none", zIndex: 0,
        }} />
        {/* corner labels */}
        <Typography className="corner-code corner-tl" sx={{ color: cornerColor }}>
          v2.4.1_portfolio
        </Typography>
        <Typography className="corner-code corner-br" sx={{ color: cornerColor }}>
          status::active
        </Typography>

        {/* ── LEFT ── */}
        <Box sx={{
          flex: 1, position: "relative", zIndex: 2, maxWidth: { md: "55%" },
          opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(22px)",
          transition: "opacity 0.75s ease, transform 0.75s ease",
        }}>
          {/* badge */}
          <Box className="status-badge" sx={{ borderColor: accentBorder, background: accentFaint, mb: 2 }}>
            <Box className="blink-dot" sx={{ background: accent }} />
            <Typography sx={{
              fontFamily: "'Space Mono', monospace", fontSize: "0.72rem",
              color: accent, letterSpacing: "0.1em", textTransform: "uppercase",
            }}>
              open to work
            </Typography>
          </Box>
          {/* Lottie */}
          <Box sx={{ width: { xs: 90, md: 110 }, height: { xs: 80, md: 96 }, mb: 1 }}>
            <Lottie animationData={updatedLottie} loop autoplay />
          </Box>
          {/* name */}
          <Typography sx={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 900,
            fontSize: { xs: "3rem", sm: "4rem", md: "4.6rem" },
            lineHeight: 0.95, letterSpacing: "-0.04em", color: textPrimary, mb: 0.5,
          }}>
            Abhi<span style={{ color: accent }}>shek</span><br />Reddy
          </Typography>

          {/* typewriter */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3, minHeight: 40 }}>
            <Typography sx={{
              fontFamily: "'Space Mono', monospace",
              fontSize: { xs: "0.9rem", md: "1.05rem" },
              color: isDark ? "rgba(0,255,180,0.4)" : "rgba(251,191,36,0.45)", fontWeight: 700,
            }}>
              //
            </Typography>
            <Typography sx={{
              fontFamily: "'Space Mono', monospace",
              fontSize: { xs: "1rem", sm: "1.2rem" },
              color: accent, fontWeight: 700, letterSpacing: "0.03em",
            }}>
              {currentText}
              <span className="block-cursor" style={{ background: accent }} />
            </Typography>
          </Box>

          {/* bio */}
          <Typography sx={{
            fontSize: { xs: "0.95rem", md: "1rem" }, lineHeight: 1.8,
            color: textMuted, maxWidth: 440, mb: 3.5,
          }}>
            I design and build scalable cloud-native data platforms using Azure,
            Databricks, PySpark, Snowflake, and modern lakehouse architectures.
            Passionate about transforming raw data into reliable business insights.
          </Typography>

          {/* CTAs */}
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mb: 3.5 }}>
            <Button variant="contained" onClick={() => setOpen(true)}
              endIcon={<ArrowForward sx={{ fontSize: "1rem !important" }} />}
              sx={{
                textTransform: "none", fontFamily: "'Outfit', sans-serif",
                fontWeight: 700, fontSize: "0.96rem",
                px: 3, py: 1.2, borderRadius: "4px", letterSpacing: "0.02em",
                background: accent, color: accentText,
                boxShadow: `0 0 22px ${isDark ? "rgba(0,255,180,0.28)" : "rgba(251,191,36,0.35)"}`,
                ":hover": {
                  background: accentHover, transform: "translateY(-1px)",
                  boxShadow: `0 0 34px ${isDark ? "rgba(0,255,180,0.42)" : "rgba(251,191,36,0.5)"}`,
                },
              }}>
              Send Message
            </Button>
            <Button variant="outlined" onClick={() => setResumeOpen(true)}
              startIcon={<Download sx={{ fontSize: "1rem !important" }} />}
              sx={{
                textTransform: "none", fontFamily: "'Outfit', sans-serif",
                fontWeight: 700, fontSize: "0.96rem",
                px: 3, py: 1.2, borderRadius: "4px", letterSpacing: "0.02em",
                color: accent, borderColor: accentBorder,
                ":hover": { borderColor: accent, background: accentFaint },
              }}>
              Resume
            </Button>
          </Box>

          {/* socials */}
          <Box sx={{ display: "flex", gap: 1 }}>
            {socials.map(s => (
              <IconButton key={s.label} href={s.href} target="_blank" aria-label={s.label}
                sx={{
                  width: 40, height: 40, borderRadius: "6px",
                  border: `1px solid ${borderFaint}`, color: textMuted,
                  transition: "all 0.18s ease",
                  ":hover": { borderColor: accent, color: accent, background: accentFaint, transform: "translateY(-2px)" },
                }}>
                {s.icon}
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* ── RIGHT — Hex frame ── */}
        <Box sx={{
          flex: "0 0 auto", display: { xs: "none", md: "flex" },
          alignItems: "center", justifyContent: "center",
          position: "relative", zIndex: 2, ml: { md: 4, lg: 8 },
          opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(22px)",
          transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
        }}>
          <Box className="hex-container">
            <svg className="hex-svg" viewBox="0 0 260 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="130,8 238,70 238,210 130,272 22,210 22,70"
                stroke={hexStroke} strokeWidth="1" strokeDasharray="6 4" fill="none" />
              <polygon points="130,30 214,78 214,202 130,250 46,202 46,78"
                stroke={hexInner} strokeWidth="1" fill={hexFill} />
              <circle cx="130" cy="140" r="92"
                stroke={hexRing} strokeWidth="1" strokeDasharray="10 7" fill="none">
                <animateTransform attributeName="transform" type="rotate"
                  from="0 130 140" to="360 130 140" dur="22s" repeatCount="indefinite" />
              </circle>
              <circle cx="130" cy="140" r="64" fill={hexGlow} />
              {ticks.map(([x1,y1,x2,y2], i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke={accent} strokeWidth="1.5" opacity="0.55" />
              ))}
            </svg>
            <Box component="img" src="./images/cvPhoto.jpg" alt="Abhishek Reddy"
              sx={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: 160, height: 160, borderRadius: "50%", objectFit: "cover",
                border: `2.5px solid ${photoBorder}`, zIndex: 3,
              }} />
            {[
              { top: "0px",    left: "50%",  transform: "translateX(-50%)", delay: "0s",   size: 9, opacity: 0.75 },
              { bottom: "0px", left: "50%",  transform: "translateX(-50%)", delay: "0.7s", size: 7, opacity: 0.4  },
              { top: "50%",    right: "-2px", transform: "translateY(-50%)", delay: "1.4s", size: 6, opacity: 0.35 },
            ].map((s, i) => (
              <Box key={i} sx={{
                position: "absolute", width: s.size, height: s.size,
                borderRadius: "50%", background: accent, opacity: s.opacity,
                animation: `blink-vertex 2.2s ${s.delay} ease-in-out infinite`, zIndex: 5,
                top: s.top, bottom: (s as any).bottom,
                left: s.left, right: (s as any).right, transform: s.transform,
              }} />
            ))}
            {[
              { label: "[ Data Engineer ]", style: { top: "-6px", right: "-48px" },  anim: "float-a 3.5s ease-in-out infinite" },
              { label: "[ 4+ yrs exp ]",    style: { bottom: "2px", left: "-52px" }, anim: "float-b 4.2s ease-in-out infinite" },
            ].map(chip => (
              <Box key={chip.label} className="hex-chip"
                sx={{
                  ...chip.style,
                  borderColor: isDark ? "rgba(0,255,180,0.22)" : "rgba(251,191,36,0.28)",
                  background: chipBg, color: accent, animation: chip.anim,
                }}>
                {chip.label}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ══ CONTACT DIALOG ═══════════════════════════════════════ */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth PaperProps={{ sx: dialogPaper }}>
        <DialogTitle sx={{
          fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "1.3rem",
          pt: 3, px: 3, color: textPrimary,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          Let's Connect
          <IconButton onClick={() => setOpen(false)} size="small" sx={{ color: textMuted }}><Close /></IconButton>
        </DialogTitle>
        <DialogContent sx={{ px: 3 }}>
          {(["name","email","message"] as const).map(field => (
            <TextField key={field} margin="dense" fullWidth name={field}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]} onChange={handleChange}
              multiline={field === "message"} minRows={field === "message" ? 3 : undefined}
              sx={inputSx} />
          ))}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={handleSubmit} variant="contained" fullWidth startIcon={<Send />}
            sx={{
              textTransform: "none", fontFamily: "'Outfit', sans-serif", fontWeight: 700,
              py: 1.2, borderRadius: "4px", background: accent, color: accentText,
              ":hover": { background: accentHover },
            }}>
            Send Message
          </Button>
        </DialogActions>
      </Dialog>

      {/* ══ RESUME DIALOG ════════════════════════════════════════ */}
      <Dialog
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            background: bg,
            border: `1px solid ${cardBorder}`,
            borderRadius: "12px",
            boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
            maxHeight: "92vh",
            overflow: "hidden",
          },
        }}
      >
        {/* Header */}
        <Box sx={{
          px: 3.5, pt: 3, pb: 2.5,
          borderBottom: `1px solid ${cardBorder}`,
          background: isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.03)",
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          flexShrink: 0,
        }}>
          <Box>
            {/* traffic-light dots */}
            <Box sx={{ display: "flex", gap: 0.7, mb: 1.5 }}>
              {["#ff5f57","#febc2e","#28c840"].map(c => (
                <Box key={c} sx={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
              ))}
            </Box>
            <Typography sx={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 900,
              fontSize: { xs: "1.5rem", md: "2rem" },
              color: textPrimary, lineHeight: 1.1, letterSpacing: "-0.03em",
            }}>
              {resume.name.split(" ")[0]}
              <span style={{ color: accent }}> {resume.name.split(" ").slice(1).join(" ")}</span>
            </Typography>
            <Typography sx={{
              fontFamily: "'Space Mono', monospace", fontSize: "0.72rem",
              color: accent, mt: 0.5, letterSpacing: "0.04em",
            }}>
              // {resume.title}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 1.5 }}>
              {[resume.location, resume.email, resume.phone].map(item => (
                <Typography key={item} sx={{
                  fontFamily: "'Space Mono', monospace", fontSize: "0.62rem",
                  color: textMuted, letterSpacing: "0.03em",
                }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 1 }}>
            <IconButton onClick={() => setResumeOpen(false)} size="small"
              sx={{ color: textMuted, border: `1px solid ${cardBorder}`, borderRadius: "6px", width: 32, height: 32 }}>
              <Close sx={{ fontSize: 15 }} />
            </IconButton>
            <Button variant="contained" href="/Abhishek_Reddy_Manam_Resume.pdf" download
              startIcon={<Download sx={{ fontSize: "0.85rem !important" }} />}
              sx={{
                textTransform: "none", fontFamily: "'Outfit', sans-serif",
                fontWeight: 700, fontSize: "0.82rem",
                px: 2, py: 0.8, borderRadius: "4px",
                background: accent, color: accentText,
                ":hover": { background: accentHover }, whiteSpace: "nowrap",
              }}>
              Download PDF
            </Button>
          </Box>
        </Box>

        {/* Scrollable body */}
        <DialogContent sx={{
          p: 3.5, overflowY: "auto",
          "&::-webkit-scrollbar": { width: "4px" },
          "&::-webkit-scrollbar-track": { background: "transparent" },
          "&::-webkit-scrollbar-thumb": { background: cardBorder, borderRadius: "2px" },
        }}>
          {/* Summary */}
          <Box sx={{ p: 2, mb: 3, borderRadius: "6px", border: `1px solid ${cardBorder}`, background: cardBg }}>
            <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", lineHeight: 1.75, color: textMuted }}>
              {resume.summary}
            </Typography>
          </Box>

          {/* Two-column grid */}
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 4 }}>

            {/* LEFT — Experience + Education */}
            <Box>
              <ResumeSection icon={<WorkIcon sx={{ fontSize: 14 }} />} label="Experience" color={accent}>
                {resume.experience.map((exp, i) => (
                  <Box key={i} sx={{
                    mb: i < resume.experience.length - 1 ? 2.5 : 0,
                    pl: 2, borderLeft: `2px solid ${i === 0 ? accent : cardBorder}`,
                  }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 1, mb: 0.5 }}>
                      <Box>
                        <Typography sx={{
                          fontFamily: "'Outfit', sans-serif", fontWeight: 700,
                          fontSize: "0.9rem", color: textPrimary, lineHeight: 1.2,
                        }}>
                          {exp.role}
                        </Typography>
                        <Typography sx={{
                          fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem",
                          color: i === 0 ? accent : textMuted,
                        }}>
                          {exp.company}
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign: "right", flexShrink: 0 }}>
                        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: textMuted }}>
                          {exp.duration}
                        </Typography>
                        <Box sx={{
                          display: "inline-flex", alignItems: "center",
                          px: 0.8, py: 0.2, mt: 0.4,
                          border: `1px solid ${cardBorder}`, borderRadius: "3px",
                          background: "rgba(255,255,255,0.04)",
                        }}>
                          <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: textMuted }}>
                            {exp.type}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.6, mt: 1 }}>
                      {exp.points.map((pt, pi) => (
                        <Box key={pi} sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                          <Box sx={{
                            width: 4, height: 4, borderRadius: "50%",
                            background: accent, opacity: 0.6, flexShrink: 0, mt: "6px",
                          }} />
                          <Typography sx={{
                            fontFamily: "'Outfit', sans-serif", fontSize: "0.78rem",
                            lineHeight: 1.65, color: textMuted,
                          }}>
                            {pt}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ))}
              </ResumeSection>

              <ResumeSection icon={<SchoolIcon sx={{ fontSize: 14 }} />} label="Education"
                color={isDark ? "#60a5fa" : "#93c5fd"}>
                {resume.education.map((edu, i) => (
                  <Box key={i} sx={{
                    mb: i < resume.education.length - 1 ? 2 : 0,
                    pl: 2, borderLeft: `2px solid ${cardBorder}`,
                  }}>
                    <Typography sx={{
                      fontFamily: "'Outfit', sans-serif", fontWeight: 700,
                      fontSize: "0.88rem", color: textPrimary, lineHeight: 1.2,
                    }}>
                      {edu.degree}
                    </Typography>
                    <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.78rem", color: textMuted }}>
                      {edu.school}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2, mt: 0.4 }}>
                      {edu.year && (
                        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: textMuted }}>
                          {edu.year}
                        </Typography>
                      )}
                      <Typography sx={{
                        fontFamily: "'Space Mono', monospace", fontSize: "0.6rem",
                        color: isDark ? "#60a5fa" : "#93c5fd",
                      }}>
                        GPA: {edu.gpa}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </ResumeSection>
            </Box>

            {/* RIGHT — Skills + Links */}
            <Box>
              <ResumeSection icon={<CloudIcon sx={{ fontSize: 14 }} />} label="Cloud & Data Skills" color={accent}>
                {(Object.entries(resume.skills) as [keyof typeof resume.skills, string[]][]).map(([key, chips]) => (
                  <Box key={key} sx={{ mb: 2 }}>
                    <Typography sx={{
                      fontFamily: "'Space Mono', monospace", fontSize: "0.58rem",
                      color: skillColors[key], letterSpacing: "0.08em",
                      textTransform: "uppercase", mb: 0.8,
                    }}>
                      {key.toUpperCase()}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.6 }}>
                      {chips.map(chip => (
                        <Chip key={chip} label={chip} size="small" sx={{
                          fontFamily: "'Outfit', sans-serif", fontWeight: 600,
                          fontSize: "0.68rem", height: 22, borderRadius: "3px",
                          background: "rgba(255,255,255,0.05)", color: textMuted,
                          border: `1px solid ${cardBorder}`,
                          "& .MuiChip-label": { px: 0.8 },
                          "&:hover": { color: skillColors[key], borderColor: skillColors[key] },
                          transition: "all 0.18s ease", cursor: "default",
                        }} />
                      ))}
                    </Box>
                  </Box>
                ))}
              </ResumeSection>

              <ResumeSection icon={<CodeIcon sx={{ fontSize: 14 }} />} label="Links" color="#a78bfa">
                {[
                  { label: "linkedin", value: resume.linkedin, href: `https://${resume.linkedin}` },
                  { label: "github",   value: resume.github,   href: `https://${resume.github}`   },
                ].map(link => (
                  <Box key={link.label} sx={{
                    display: "flex", alignItems: "center", gap: 1.5, mb: 1,
                    p: 1.2, borderRadius: "5px",
                    border: `1px solid ${cardBorder}`, background: cardBg,
                  }}>
                    <Typography sx={{
                      fontFamily: "'Space Mono', monospace", fontSize: "0.6rem",
                      color: "#a78bfa", minWidth: 52, letterSpacing: "0.06em",
                    }}>
                      {link.label}
                    </Typography>
                    <Box component="a" href={link.href} target="_blank"
                      sx={{
                        fontFamily: "'Space Mono', monospace", fontSize: "0.65rem",
                        color: textMuted, textDecoration: "none",
                        "&:hover": { color: accent }, transition: "color 0.18s ease",
                        wordBreak: "break-all",
                      }}>
                      {link.value}
                    </Box>
                  </Box>
                ))}
              </ResumeSection>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>

      {/* ══ SNACKBAR ═════════════════════════════════════════════ */}
      <Snackbar open={snackbarOpen} autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert severity="success" sx={{ borderRadius: "4px", fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>
          Message sent successfully! ✅
        </Alert>
      </Snackbar>
    </>
  );
};

export default Home;