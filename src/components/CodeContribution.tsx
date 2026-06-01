import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";

const quotes = [
  { text: "Code is like a joke. If you have to explain it, it's probably not that good.", attr: "— Cory House" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", attr: "— Martin Fowler" },
  { text: "First, solve the problem. Then, write the code.", attr: "— John Johnson" },
  { text: "Data is the new oil, but like oil, it needs to be refined to be valuable.", attr: "— Clive Humby" },
];

const CodeContribution: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [qIdx, setQIdx] = useState(0);
  const [fade, setFade] = useState(true);

  // ── Tokens — navy+gold light / black+green dark ───────────────
  const accent      = isDark ? "#00ffb4" : "#fbbf24";
  const bg          = isDark ? "#05090e"  : "#0d1b2a";
  const cardBg      = isDark ? "rgba(255,255,255,0.03)"  : "rgba(255,255,255,0.04)";
  const cardBorder  = isDark ? "rgba(0,255,180,0.1)"     : "rgba(99,179,255,0.1)";
  const textPrimary = isDark ? "#e8f4f0"  : "#e0f2ff";
  const textMuted   = isDark ? "rgba(232,244,240,0.5)"   : "rgba(224,242,255,0.48)";
  const gridColor   = isDark ? "rgba(0,255,180,0.03)"    : "rgba(99,179,255,0.04)";
  const quoteAccent = isDark ? "#60a5fa"  : "#a78bfa";
  const endLabel    = isDark ? "rgba(0,255,180,0.2)"     : "rgba(251,191,36,0.2)";
  const statBg      = isDark ? "rgba(255,255,255,0.04)"  : "rgba(255,255,255,0.05)";
  const headerBg    = isDark ? "rgba(0,255,180,0.03)"    : "rgba(251,191,36,0.04)";

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => { setQIdx(i => (i + 1) % quotes.length); setFade(true); }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      id="contributions"
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
          06 /
        </Typography>
        <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: textMuted, letterSpacing: "0.08em" }}>
          contributions.log
        </Typography>
      </Box>

      {/* heading */}
      <Box sx={{
        mb: 8,
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.7s ease 0.1s",
      }}>
        <Typography sx={{
          fontFamily: "'Outfit', sans-serif", fontWeight: 900,
          fontSize: { xs: "2.4rem", sm: "3rem", md: "3.6rem" },
          lineHeight: 0.95, letterSpacing: "-0.03em", color: textPrimary, mb: 1,
        }}>
          Days I <span style={{ color: accent }}>Code</span>
        </Typography>
        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: textMuted, letterSpacing: "0.06em" }}>
          // github_activity --user=Abhi-shek-reddy
        </Typography>
      </Box>

      <Box sx={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 3 }}>

        {/* contribution image card */}
        <Box sx={{
          border: `1px solid ${cardBorder}`,
          borderRadius: "8px", overflow: "hidden",
          background: cardBg,
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(22px)",
          transition: "all 0.7s ease 0.2s",
          "&:hover": { borderColor: accent },
        }}>
          {/* terminal bar */}
          <Box sx={{
            display: "flex", alignItems: "center", gap: 1.5,
            px: 2, py: 1.2,
            borderBottom: `1px solid ${cardBorder}`,
            background: headerBg,
          }}>
            {["#ff5f57","#febc2e","#28c840"].map(c => (
              <Box key={c} sx={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
            ))}
            <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: textMuted, ml: 1, letterSpacing: "0.05em" }}>
              github.com/Abhi-shek-reddy — contribution_graph.svg
            </Typography>
          </Box>
          <Box sx={{ p: { xs: 2, md: 3 }, display: "flex", justifyContent: "center" }}>
            <Box component="img" src="./images/gitRepo.png" alt="Abhishek's GitHub Contribution Graph"
              sx={{
                width: "100%", maxWidth: 760, borderRadius: "4px", display: "block",
                filter: isDark ? "none" : "brightness(1.1) contrast(1.05) saturate(1.1)",
              }}
            />
          </Box>
        </Box>

        {/* stat + quote row */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>

          {/* dev_profile card */}
          <Box sx={{
            border: `1px solid ${cardBorder}`, borderRadius: "8px", p: 2.5,
            background: cardBg, display: "flex", flexDirection: "column", gap: 2,
            opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(22px)",
            transition: "all 0.7s ease 0.35s",
            "&:hover": { borderColor: accent },
          }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.5 }}>
              <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: accent }} />
              <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: accent, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                dev_profile
              </Typography>
              <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
            </Box>
            {[
              { label: "primary_stack", value: "Azure · AWS · GCP" },
              { label: "focus_area",    value: "Data Engineering"  },
              { label: "also_ships",    value: "Full Stack Apps"   },
              { label: "status",        value: "open_to_work = true" },
            ].map(stat => (
              <Box key={stat.label} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2 }}>
                <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: textMuted, letterSpacing: "0.04em" }}>
                  {stat.label}
                </Typography>
                <Typography sx={{
                  fontFamily: "'Space Mono', monospace", fontSize: "0.68rem",
                  color: stat.label === "status" ? accent : textPrimary,
                  fontWeight: 700,
                  background: statBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "3px", px: 1, py: 0.3,
                }}>
                  {stat.value}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* rotating quote card */}
          <Box sx={{
            border: `1px solid ${cardBorder}`, borderRadius: "8px", p: 2.5,
            background: cardBg, display: "flex", flexDirection: "column", justifyContent: "space-between",
            opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(22px)",
            transition: "all 0.7s ease 0.45s",
            "&:hover": { borderColor: accent },
            minHeight: 160,
          }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
              <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: quoteAccent }} />
              <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: quoteAccent, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                quote.rotate()
              </Typography>
              <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
            </Box>
            <Box sx={{
              opacity: fade ? 1 : 0, transition: "opacity 0.4s ease",
              flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
            }}>
              <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.92rem", lineHeight: 1.7, color: textPrimary, fontStyle: "italic", mb: 1.5 }}>
                "{quotes[qIdx].text}"
              </Typography>
              <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: textMuted, letterSpacing: "0.04em" }}>
                {quotes[qIdx].attr}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 0.7, mt: 2 }}>
              {quotes.map((_, i) => (
                <Box key={i} sx={{
                  width: i === qIdx ? 16 : 5, height: 5, borderRadius: "3px",
                  background: i === qIdx ? accent : cardBorder,
                  transition: "all 0.3s ease",
                }} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* bottom line */}
      <Box sx={{
        mt: 10, display: "flex", alignItems: "center", gap: 2,
        opacity: visible ? 1 : 0, transition: "all 0.7s ease 0.7s",
      }}>
        <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: endLabel, letterSpacing: "0.08em" }}>
          end_of_section
        </Typography>
      </Box>
    </Box>
  );
};

export default CodeContribution;