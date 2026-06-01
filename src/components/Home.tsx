import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  Box, Button, Typography, IconButton,
  Dialog, DialogTitle, DialogContent, TextField,
  DialogActions, Snackbar, Alert, useTheme,
} from "@mui/material";
import {
  GitHub, LinkedIn, Instagram, Mail, WhatsApp,
  Send, Close, ArrowForward, Download,
} from "@mui/icons-material";
import Lottie from "lottie-react";
import hiAnimation from "../lottie/Hello.json";
import { replaceLottieColor } from "../utils/replaceLottieColor";
import "./Home.css";

const Home: React.FC = () => {
  const [open, setOpen]               = useState(false);
  const [resumeOpen, setResumeOpen]   = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [form, setForm]               = useState({ name: "", email: "", message: "" });
  const [mounted, setMounted]         = useState(false);
  const canvasRef                     = useRef<HTMLCanvasElement>(null);

  const theme  = useTheme();
  const isDark = theme.palette.mode === "dark";

  // ── Unified token system ─────────────────────────────────────
  // DARK  → near-black + electric green
  // LIGHT → deep navy (#0d1b2a) + electric gold (#fbbf24)
  const accent       = isDark ? "#00ffb4" : "#fbbf24";
  const accentHover  = isDark ? "#00e8a3" : "#f59e0b";
  const accentText   = isDark ? "#05090e" : "#0d1b2a";   // text ON accent button
  const bg           = isDark ? "#05090e" : "#0d1b2a";
  const bgAlt        = isDark ? "#080f14" : "#091420";
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

  const updatedLottie = useMemo(
    () => replaceLottieColor(hiAnimation, accent),
    [accent]
  );

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  // ── Particle canvas ──────────────────────────────────────────
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
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [isDark]);

  // ── Typewriter ───────────────────────────────────────────────
  const titles = [
    "Data Engineer", "Data Analyst", "Frontend Developer",
    "Full Stack Developer", "Programmer", "Problem Solver",
  ];
  const [currentText, setCurrentText] = useState("");
  const [tIdx, setTIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);
  const [rev, setRev] = useState(false);

  useEffect(() => {
    if (subIdx === titles[tIdx].length + 1 && !rev) {
      setTimeout(() => setRev(true), 1000);
      return;
    }
    if (subIdx === 0 && rev) {
      setRev(false);
      setTIdx(p => (p + 1) % titles.length);
      return;
    }
    const t = setTimeout(() => {
      setSubIdx(p => p + (rev ? -1 : 1));
      setCurrentText(titles[tIdx].substring(0, subIdx));
    }, rev ? 36 : 75);
    return () => clearTimeout(t);
  }, [subIdx, tIdx, rev]);

  const handleChange  = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit  = () => {
    setSnackbarOpen(true);
    setOpen(false);
    setForm({ name: "", email: "", message: "" });
  };

  const socials = [
    { icon: <LinkedIn fontSize="small" />, href: "https://www.linkedin.com/in/abhishek-reddy-manam-1b5167204/", label: "LinkedIn" },
    { icon: <GitHub    fontSize="small" />, href: "https://github.com/Abhi-shek-reddy",                          label: "GitHub"   },
    { icon: <Mail      fontSize="small" />, href: "mailto:abhishekreddymanam@gmail.com",                         label: "Email"    },
    { icon: <Instagram fontSize="small" />, href: "https://www.instagram.com/aab.hi_/",                         label: "Instagram"},
    { icon: <WhatsApp  fontSize="small" />, href: "https://wa.me/14844829961",                                   label: "WhatsApp" },
  ];

  const ticks = [
    [130,8,130,22],[238,70,226,77],[238,210,226,203],
    [130,272,130,258],[22,210,34,203],[22,70,34,77],
  ];

  const dialogPaper = {
    borderRadius: "10px",
    background: surface,
    border: `1px solid ${dialogBorder}`,
    backdropFilter: "blur(20px)",
    boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
  };

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "6px",
      fontFamily: "'Outfit', sans-serif",
      color: textPrimary,
      "& fieldset": { borderColor: fieldBorder },
      "&:hover fieldset": { borderColor: accent },
      "&.Mui-focused fieldset": { borderColor: accent },
    },
    "& .MuiInputLabel-root": { color: textMuted },
    "& .MuiInputLabel-root.Mui-focused": { color: accent },
  };

  return (
    <>
      {/* ══ HERO ═════════════════════════════════════════════════ */}
      <Box
        id="home"
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          px: { xs: 3, sm: 5, md: 8, lg: 12 },
          backgroundColor: bg,
        }}
      >
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
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          pointerEvents: "none", zIndex: 0,
        }} />

        {/* corner labels */}
        <Typography className="corner-code corner-tl" sx={{ color: cornerColor }}>
          v2.4.1_portfolio
        </Typography>
        <Typography className="corner-code corner-br" sx={{ color: cornerColor }}>
          status::active
        </Typography>

        {/* ── LEFT ──────────────────────────────────────────────── */}
        <Box sx={{
          flex: 1, position: "relative", zIndex: 2,
          maxWidth: { md: "55%" },
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(22px)",
          transition: "opacity 0.75s ease, transform 0.75s ease",
        }}>
          {/* badge */}
          <Box className="status-badge" sx={{ borderColor: accentBorder, background: accentFaint }}>
            <Box className="blink-dot" sx={{ background: accent }} />
            <Typography sx={{
              fontFamily: "'Space Mono', monospace", fontSize: "0.67rem",
              color: accent, letterSpacing: "0.1em", textTransform: "uppercase",
            }}>
              open to work
            </Typography>
          </Box>

          {/* lottie */}
          <Box sx={{ width: 64, height: 56, mb: 0.5 }}>
            <Lottie animationData={updatedLottie} loop autoplay />
          </Box>

          {/* name */}
          <Typography sx={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 900,
            fontSize: { xs: "3rem", sm: "4rem", md: "4.6rem" },
            lineHeight: 0.95, letterSpacing: "-0.04em",
            color: textPrimary, mb: 0.5,
          }}>
            Abhi<span style={{ color: accent }}>shek</span><br />Reddy
          </Typography>

          {/* typewriter */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2.5, minHeight: 32 }}>
            <Typography sx={{
              fontFamily: "'Space Mono', monospace", fontSize: "0.72rem",
              color: isDark ? "rgba(0,255,180,0.4)" : "rgba(251,191,36,0.45)",
            }}>
              //
            </Typography>
            <Typography sx={{
              fontFamily: "'Space Mono', monospace",
              fontSize: { xs: "0.8rem", sm: "0.92rem" },
              color: accent, fontWeight: 700, letterSpacing: "0.03em",
            }}>
              {currentText}
              <span className="block-cursor" style={{ background: accent }} />
            </Typography>
          </Box>

          {/* bio */}
          <Typography sx={{
            fontSize: "0.9rem", lineHeight: 1.8,
            color: textMuted, maxWidth: 420, mb: 3.5,
          }}>
            I build high-throughput data pipelines, craft pixel-perfect interfaces,
            and ship full-stack products that scale. Let's create something that matters.
          </Typography>

          {/* CTAs */}
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mb: 3.5 }}>
            <Button
              variant="contained"
              onClick={() => setOpen(true)}
              endIcon={<ArrowForward sx={{ fontSize: "0.85rem !important" }} />}
              sx={{
                textTransform: "none", fontFamily: "'Outfit', sans-serif",
                fontWeight: 700, fontSize: "0.88rem",
                px: 2.8, py: 1.1, borderRadius: "4px", letterSpacing: "0.02em",
                background: accent, color: accentText,
                boxShadow: `0 0 22px ${isDark ? "rgba(0,255,180,0.28)" : "rgba(251,191,36,0.35)"}`,
                ":hover": {
                  background: accentHover,
                  transform: "translateY(-1px)",
                  boxShadow: `0 0 34px ${isDark ? "rgba(0,255,180,0.42)" : "rgba(251,191,36,0.5)"}`,
                },
              }}
            >
              Send Message
            </Button>
            <Button
              variant="outlined"
              onClick={() => setResumeOpen(true)}
              startIcon={<Download sx={{ fontSize: "0.85rem !important" }} />}
              sx={{
                textTransform: "none", fontFamily: "'Outfit', sans-serif",
                fontWeight: 700, fontSize: "0.88rem",
                px: 2.8, py: 1.1, borderRadius: "4px", letterSpacing: "0.02em",
                color: accent,
                borderColor: accentBorder,
                ":hover": { borderColor: accent, background: accentFaint },
              }}
            >
              Resume
            </Button>
          </Box>

          {/* socials */}
          <Box sx={{ display: "flex", gap: 1 }}>
            {socials.map(s => (
              <IconButton
                key={s.label} href={s.href} target="_blank" aria-label={s.label}
                sx={{
                  width: 36, height: 36, borderRadius: "6px",
                  border: `1px solid ${borderFaint}`,
                  color: textMuted,
                  transition: "all 0.18s ease",
                  ":hover": { borderColor: accent, color: accent, background: accentFaint, transform: "translateY(-2px)" },
                }}
              >
                {s.icon}
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* ── RIGHT — Hex frame ──────────────────────────────────── */}
        <Box sx={{
          flex: "0 0 auto",
          display: { xs: "none", md: "flex" },
          alignItems: "center", justifyContent: "center",
          position: "relative", zIndex: 2,
          ml: { md: 4, lg: 8 },
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(22px)",
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

            {/* photo */}
            <Box component="img" src="./images/cvPhoto.jpg" alt="Abhishek Reddy"
              sx={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: 160, height: 160, borderRadius: "50%",
                objectFit: "cover",
                border: `2.5px solid ${photoBorder}`,
                zIndex: 3,
              }}
            />

            {/* vertex dots */}
            {[
              { top: "0px",  left: "50%", transform: "translateX(-50%)", delay: "0s",   size: 9, opacity: 0.75 },
              { bottom: "0px", left: "50%", transform: "translateX(-50%)", delay: "0.7s", size: 7, opacity: 0.4  },
              { top: "50%",  right: "-2px", transform: "translateY(-50%)", delay: "1.4s", size: 6, opacity: 0.35 },
            ].map((s, i) => (
              <Box key={i} sx={{
                position: "absolute",
                width: s.size, height: s.size,
                borderRadius: "50%", background: accent,
                opacity: s.opacity,
                animation: `blink-vertex 2.2s ${s.delay} ease-in-out infinite`,
                zIndex: 5,
                top: s.top, bottom: (s as any).bottom,
                left: s.left, right: (s as any).right,
                transform: s.transform,
              }} />
            ))}

            {/* chips */}
            {[
              { label: "[ Full Stack ]", style: { top: "-6px", right: "-48px" }, anim: "float-a 3.5s ease-in-out infinite" },
              { label: "[ 3+ yrs exp ]", style: { bottom: "2px", left: "-52px" }, anim: "float-b 4.2s ease-in-out infinite" },
            ].map(chip => (
              <Box key={chip.label} className="hex-chip"
                sx={{
                  ...chip.style,
                  borderColor: isDark ? "rgba(0,255,180,0.22)" : "rgba(251,191,36,0.28)",
                  background: chipBg, color: accent,
                  animation: chip.anim,
                }}
              >
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
            <TextField
              key={field} margin="dense" fullWidth name={field}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]} onChange={handleChange}
              multiline={field === "message"} minRows={field === "message" ? 3 : undefined}
              sx={inputSx}
            />
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
      <Dialog open={resumeOpen} onClose={() => setResumeOpen(false)} fullWidth maxWidth="md" PaperProps={{ sx: dialogPaper }}>
        <DialogTitle sx={{
          fontFamily: "'Outfit', sans-serif", fontWeight: 800, color: textPrimary,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          Resume
          <IconButton onClick={() => setResumeOpen(false)} size="small" sx={{ color: textMuted }}><Close /></IconButton>
        </DialogTitle>
        <DialogContent>
          <iframe src="/Abhishek_Reddy_Resume.pdf" title="Resume PDF"
            width="100%" height="520px" style={{ border: "none", borderRadius: "6px" }} />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button variant="contained" href="/Abhishek_Reddy_Resume.pdf" download startIcon={<Download />}
            sx={{
              textTransform: "none", fontFamily: "'Outfit', sans-serif", fontWeight: 700,
              borderRadius: "4px", background: accent, color: accentText,
              ":hover": { background: accentHover },
            }}>
            Download Resume
          </Button>
        </DialogActions>
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