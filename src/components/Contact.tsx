import React, { useState, useRef, useEffect } from "react";
import {
  Box, Typography, IconButton, Tooltip, Snackbar, Alert, useTheme,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CheckIcon from "@mui/icons-material/Check";

const phone = "+1 484-482-9961";
const email = "abhishekreddymanam@gmail.com";

// Social accent colours — vivid on both dark substrates
const socials = [
  { label: "LinkedIn",  icon: <LinkedInIcon  sx={{ fontSize: 18 }} />, href: "https://www.linkedin.com/in/abhishek-reddy-manam-1b5167204/", accentDark: "#60a5fa", accentLight: "#93c5fd" },
  { label: "GitHub",    icon: <GitHubIcon    sx={{ fontSize: 18 }} />, href: "https://github.com/Abhi-shek-reddy",                          accentDark: "#e8f4f0", accentLight: "#e0f2ff" },
  { label: "Instagram", icon: <InstagramIcon sx={{ fontSize: 18 }} />, href: "https://www.instagram.com/aab.hi_/",                         accentDark: "#f9a8d4", accentLight: "#f9a8d4" },
  { label: "WhatsApp",  icon: <WhatsAppIcon  sx={{ fontSize: 18 }} />, href: "https://wa.me/14844829961",                                   accentDark: "#34d399", accentLight: "#34d399" },
];

const ContactMe: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [snackOpen, setSnackOpen] = useState(false);

  // ── Tokens — navy+gold light / black+green dark ───────────────
  const accent       = isDark ? "#00ffb4" : "#fbbf24";
  const bg           = isDark ? "#080f14"  : "#091420";   // alternate tier
  const cardBg       = isDark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.04)";
  const cardBorder   = isDark ? "rgba(255,255,255,0.07)"  : "rgba(99,179,255,0.1)";
  const textPrimary  = isDark ? "#e8f4f0"  : "#e0f2ff";
  const textMuted    = isDark ? "rgba(232,244,240,0.5)"   : "rgba(224,242,255,0.48)";
  const gridColor    = isDark ? "rgba(255,255,255,0.025)" : "rgba(99,179,255,0.03)";
  const headerBg     = isDark ? "rgba(0,255,180,0.03)"    : "rgba(251,191,36,0.04)";
  const termBg       = isDark ? "rgba(255,255,255,0.02)"  : "rgba(255,255,255,0.03)";
  const statBg       = isDark ? "rgba(255,255,255,0.04)"  : "rgba(255,255,255,0.05)";
  const footerAccent = isDark ? "rgba(0,255,180,0.22)"    : "rgba(251,191,36,0.22)";

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setSnackOpen(true);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactItems = [
    { key: "phone", label: "phone", value: phone, icon: <PhoneIcon sx={{ fontSize: 16 }} />, href: `tel:${phone}` },
    { key: "email", label: "email", value: email, icon: <EmailIcon sx={{ fontSize: 16 }} />, href: `mailto:${email}` },
  ];

  return (
    <Box
      id="contact"
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
          08 /
        </Typography>
        <Box sx={{ flex: 1, height: "1px", background: cardBorder }} />
        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: textMuted, letterSpacing: "0.08em" }}>
          contact.sh
        </Typography>
      </Box>

      {/* heading */}
      <Box sx={{
        mb: 10,
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.7s ease 0.1s",
      }}>
        <Typography sx={{
          fontFamily: "'Outfit', sans-serif", fontWeight: 900,
          fontSize: { xs: "2.4rem", sm: "3rem", md: "3.6rem" },
          lineHeight: 0.95, letterSpacing: "-0.03em", color: textPrimary, mb: 1,
        }}>
          Get In <span style={{ color: accent }}>Touch</span>
        </Typography>
        <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: textMuted, letterSpacing: "0.06em" }}>
          // open_to_work = true && ready_to_build = true
        </Typography>
      </Box>

      {/* two-column */}
      <Box sx={{
        position: "relative", zIndex: 1,
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: { xs: 4, md: 8 },
        alignItems: "start",
      }}>

        {/* LEFT */}
        <Box sx={{
          opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-20px)",
          transition: "all 0.7s ease 0.2s",
        }}>
          <Typography sx={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 700,
            fontSize: { xs: "1.2rem", md: "1.4rem" },
            color: textPrimary, lineHeight: 1.4, mb: 2,
          }}>
            Let's build something great together.
          </Typography>
          <Typography sx={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: { xs: "0.9rem", md: "0.95rem" },
            lineHeight: 1.8, color: textMuted, mb: 4,
          }}>
            I'm actively looking for full-time or internship opportunities in
            Data Engineering, Cloud Analytics, and Full Stack Development.
            Whether it's a data pipeline, a cloud architecture discussion, or
            a product you want to build — I'm open to the conversation.
          </Typography>

          {/* terminal block */}
          <Box sx={{
            border: `1px solid ${cardBorder}`, borderRadius: "6px",
            overflow: "hidden", background: cardBg, mb: 4,
          }}>
            <Box sx={{
              display: "flex", alignItems: "center", gap: 1,
              px: 1.5, py: 1,
              borderBottom: `1px solid ${cardBorder}`,
              background: termBg,
            }}>
              {["#ff5f57","#febc2e","#28c840"].map(c => (
                <Box key={c} sx={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
              ))}
              <Typography sx={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", color: textMuted, ml: 1 }}>
                status.sh
              </Typography>
            </Box>
            <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 0.8 }}>
              {[
                { key: "role",      value: "Data Engineer / Full Stack Dev" },
                { key: "location",  value: "Delaware, USA"                  },
                { key: "available", value: "open_to_work = true"            },
                { key: "response",  value: "< 24 hours"                     },
              ].map(row => (
                <Box key={row.key} sx={{ display: "flex", gap: 1.5, alignItems: "baseline" }}>
                  <Typography sx={{
                    fontFamily: "'Space Mono', monospace", fontSize: "0.62rem",
                    color: textMuted, minWidth: 80,
                  }}>
                    {row.key}
                  </Typography>
                  <Typography sx={{
                    fontFamily: "'Space Mono', monospace", fontSize: "0.62rem",
                    color: row.key === "available" ? accent : textPrimary,
                    fontWeight: row.key === "available" ? 700 : 400,
                  }}>
                    // {row.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* socials */}
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {socials.map(s => {
              const socAccent = isDark ? s.accentDark : s.accentLight;
              return (
                <Tooltip key={s.label} title={s.label} placement="top">
                  <IconButton
                    href={s.href} target="_blank" aria-label={s.label}
                    sx={{
                      width: 40, height: 40, borderRadius: "6px",
                      border: `1px solid ${cardBorder}`,
                      color: textMuted,
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: socAccent, color: socAccent,
                        background: "rgba(255,255,255,0.05)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    {s.icon}
                  </IconButton>
                </Tooltip>
              );
            })}
          </Box>
        </Box>

        {/* RIGHT */}
        <Box sx={{
          display: "flex", flexDirection: "column", gap: 2,
          opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(20px)",
          transition: "all 0.7s ease 0.3s",
        }}>
          {/* phone + email cards */}
          {contactItems.map(item => (
            <Box
              key={item.key}
              sx={{
                border: `1px solid ${cardBorder}`, borderRadius: "8px",
                background: cardBg, overflow: "hidden",
                transition: "border-color 0.22s ease",
                "&:hover": { borderColor: accent },
              }}
            >
              <Box sx={{
                display: "flex", alignItems: "center", gap: 1.5,
                px: 2, py: 1.2,
                borderBottom: `1px solid ${cardBorder}`,
                background: headerBg,
              }}>
                <Box sx={{ color: accent }}>{item.icon}</Box>
                <Typography sx={{
                  fontFamily: "'Space Mono', monospace", fontSize: "0.62rem",
                  color: accent, letterSpacing: "0.08em", textTransform: "uppercase",
                }}>
                  {item.label}
                </Typography>
              </Box>
              <Box sx={{
                px: 2, py: 1.8,
                display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1,
              }}>
                <Box component="a" href={item.href} sx={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: { xs: "0.72rem", sm: "0.8rem" },
                  color: textPrimary, textDecoration: "none",
                  letterSpacing: "0.02em",
                  "&:hover": { color: accent },
                  transition: "color 0.2s ease", wordBreak: "break-all",
                }}>
                  {item.value}
                </Box>
                <Tooltip title={copied === item.key ? "Copied!" : "Copy"} placement="top">
                  <IconButton
                    onClick={() => handleCopy(item.value, item.key)}
                    size="small"
                    sx={{
                      width: 32, height: 32,
                      border: `1px solid ${copied === item.key ? accent : cardBorder}`,
                      borderRadius: "5px",
                      color: copied === item.key ? accent : textMuted,
                      flexShrink: 0,
                      transition: "all 0.2s ease",
                      "&:hover": { borderColor: accent, color: accent },
                    }}
                  >
                    {copied === item.key
                      ? <CheckIcon sx={{ fontSize: 14 }} />
                      : <ContentCopyIcon sx={{ fontSize: 14 }} />}
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          ))}

          {/* availability card */}
          <Box sx={{
            border: `1px solid ${cardBorder}`, borderRadius: "8px",
            background: cardBg, overflow: "hidden",
            transition: "border-color 0.22s ease",
            "&:hover": { borderColor: accent },
          }}>
            <Box sx={{
              display: "flex", alignItems: "center", gap: 1.5,
              px: 2, py: 1.2,
              borderBottom: `1px solid ${cardBorder}`,
              background: headerBg,
            }}>
              <Box sx={{
                width: 6, height: 6, borderRadius: "50%", background: accent,
                animation: "pulse-dot 1.8s ease-in-out infinite",
              }} />
              <Typography sx={{
                fontFamily: "'Space Mono', monospace", fontSize: "0.62rem",
                color: accent, letterSpacing: "0.08em", textTransform: "uppercase",
              }}>
                availability
              </Typography>
            </Box>
            <Box sx={{ px: 2, py: 1.8 }}>
              <Typography sx={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 700,
                fontSize: "0.95rem", color: accent, mb: 0.5,
              }}>
                Open to Work — Immediately
              </Typography>
              <Typography sx={{
                fontFamily: "'Outfit', sans-serif", fontSize: "0.82rem",
                color: textMuted, lineHeight: 1.65,
              }}>
                Seeking full-time or internship roles in Data Engineering, Cloud Analytics,
                and Full Stack Development. Based in Delaware, USA — open to remote and hybrid.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* footer */}
      <Box sx={{
        mt: 12, pt: 4,
        borderTop: `1px solid ${cardBorder}`,
        display: "flex", flexWrap: "wrap",
        justifyContent: "space-between", alignItems: "center", gap: 2,
        opacity: visible ? 1 : 0, transition: "all 0.7s ease 0.7s",
      }}>
        <Typography sx={{
          fontFamily: "'Space Mono', monospace", fontSize: "0.6rem",
          color: textMuted, letterSpacing: "0.06em",
        }}>
          © 2025 Abhishek Reddy — built with React + MUI + TypeScript
        </Typography>
        <Typography sx={{
          fontFamily: "'Space Mono', monospace", fontSize: "0.6rem",
          color: footerAccent, letterSpacing: "0.06em",
        }}>
          designed_and_coded_by_abhi
        </Typography>
      </Box>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(0.65); }
        }
      `}</style>

      <Snackbar
        open={snackOpen} autoHideDuration={2000}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ borderRadius: "4px", fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>
          Copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactMe;