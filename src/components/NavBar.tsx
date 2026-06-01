import React, { useState, useEffect } from "react";
import {
  AppBar, Toolbar, Typography, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText,
  Box, Button, Tooltip, useMediaQuery, useTheme,
} from "@mui/material";
import MenuIcon    from "@mui/icons-material/Menu";
import CloseIcon   from "@mui/icons-material/Close";
import DarkModeIcon  from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

interface NavBarProps {
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

const NavBar: React.FC<NavBarProps> = ({ mode, setMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const theme   = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDark  = mode === "dark";

  const navLinks = ["Home","About","Experience","Skills","Education","Projects","Contact"];

  // ── Tokens — both modes are dark substrates ───────────────────
  // DARK  → black-navy bg + green accent
  // LIGHT → deep-navy bg + gold accent
  const accent     = isDark ? "#00ffb4" : "#fbbf24";
  const textColor  = isDark ? "#e8f4f0" : "#e0f2ff";
  const mutedColor = isDark ? "rgba(232,244,240,0.42)" : "rgba(224,242,255,0.42)";
  const navBorder  = isDark ? "rgba(0,255,180,0.12)"   : "rgba(251,191,36,0.18)";

  // Frosted nav bg — both modes are dark, just different navy depths
  const navBg = isDark
    ? scrolled ? "rgba(5,9,14,0.94)"   : "rgba(5,9,14,0.72)"
    : scrolled ? "rgba(13,27,42,0.96)" : "rgba(13,27,42,0.78)";

  const drawerBg   = isDark ? "#05090e" : "#0d1b2a";
  const activeHoverBg = isDark ? "rgba(0,255,180,0.05)" : "rgba(251,191,36,0.06)";
  const toggleHoverBg = isDark ? "rgba(0,255,180,0.06)" : "rgba(251,191,36,0.07)";

  // Scroll shrink
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracker
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveLink(e.target.id); });
      },
      { threshold: 0.35 }
    );
    navLinks.forEach(l => {
      const el = document.getElementById(l.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);
  const toggleMode   = () => setMode(mode === "light" ? "dark" : "light");

  // ── Mobile Drawer ─────────────────────────────────────────────
  const drawer = (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      PaperProps={{
        sx: {
          width: 260,
          background: drawerBg,
          borderLeft: `1px solid ${navBorder}`,
          pt: 2,
        },
      }}
    >
      {/* header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2.5, mb: 3 }}>
        <Typography sx={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.72rem", color: accent, letterSpacing: "0.08em",
        }}>
          nav://menu
        </Typography>
        <IconButton onClick={toggleDrawer(false)} sx={{ color: mutedColor }}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      <List disablePadding>
        {navLinks.map((text, i) => {
          const isActive = activeLink === text.toLowerCase();
          return (
            <ListItem key={text} disablePadding>
              <ListItemButton
                component="a"
                href={`#${text.toLowerCase()}`}
                onClick={toggleDrawer(false)}
                sx={{
                  px: 2.5, py: 1.1,
                  display: "flex", alignItems: "center", gap: 1.5,
                  borderLeft: `2px solid ${isActive ? accent : "transparent"}`,
                  background: isActive ? activeHoverBg : "transparent",
                  ":hover": { background: activeHoverBg, borderLeftColor: accent },
                }}
              >
                <Typography sx={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.6rem", color: mutedColor, minWidth: 20,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </Typography>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: isActive ? 700 : 500,
                    fontSize: "0.95rem",
                    color: isActive ? accent : textColor,
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* footer */}
      <Box sx={{ mt: "auto", px: 2.5, pb: 3, pt: 4 }}>
        <Box sx={{ height: "1px", background: navBorder, mb: 3 }} />
        <Button
          fullWidth onClick={toggleMode}
          startIcon={isDark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
          sx={{
            textTransform: "none",
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.7rem", color: accent,
            border: `1px solid ${navBorder}`, borderRadius: "4px", py: 1,
            ":hover": { borderColor: accent, background: toggleHoverBg },
          }}
        >
          {isDark ? "light_mode()" : "dark_mode()"}
        </Button>
      </Box>
    </Drawer>
  );

  return (
    <>
      <AppBar
        position="sticky" elevation={0}
        sx={{
          top: 0, zIndex: theme.zIndex.appBar,
          background: navBg,
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: `1px solid ${scrolled ? navBorder : "transparent"}`,
          transition: "background 0.35s ease, border-color 0.35s ease",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.5)" : "none",
        }}
      >
        <Toolbar sx={{
          maxWidth: 1200, width: "100%", mx: "auto",
          px: { xs: 2, md: 4 },
          minHeight: { xs: "58px", md: scrolled ? "58px" : "68px" },
          transition: "min-height 0.3s ease",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          {/* Logo */}
          <Typography
            component="a" href="#home"
            sx={{
              fontFamily: "'Space Mono', monospace",
              fontWeight: 700, fontSize: { xs: "0.92rem", md: "1rem" },
              letterSpacing: "0.02em", textDecoration: "none",
              color: accent, display: "flex", alignItems: "center", gap: 0.5,
              "&:hover": { opacity: 0.8 }, transition: "opacity 0.2s",
            }}
          >
            {"<Abhi"}
            <span style={{ color: textColor, opacity: 0.4 }}>/</span>
            {">"}
          </Typography>

          {/* Desktop links */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              {navLinks.map(text => {
                const isActive = activeLink === text.toLowerCase();
                return (
                  <Button key={text} href={`#${text.toLowerCase()}`}
                    sx={{
                      textTransform: "none",
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: isActive ? 700 : 500,
                      fontSize: "0.88rem",
                      color: isActive ? accent : mutedColor,
                      px: 1.5, py: 0.8, borderRadius: "4px",
                      position: "relative", letterSpacing: "0.01em", minWidth: 0,
                      transition: "color 0.2s ease",
                      "&:hover": { color: textColor, background: "transparent" },
                      "&::after": {
                        content: '""',
                        position: "absolute", bottom: 4, left: "50%",
                        transform: isActive
                          ? "translateX(-50%) scaleX(1)"
                          : "translateX(-50%) scaleX(0)",
                        transformOrigin: "center",
                        width: "60%", height: "1.5px",
                        background: accent, borderRadius: "2px",
                        transition: "transform 0.25s ease",
                      },
                      "&:hover::after": {
                        transform: "translateX(-50%) scaleX(1)",
                        background: "rgba(255,255,255,0.2)",
                      },
                    }}
                  >
                    {text}
                  </Button>
                );
              })}
            </Box>
          )}

          {/* Right controls */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Tooltip title={isDark ? "Light mode" : "Dark mode"} placement="bottom">
              <IconButton onClick={toggleMode} size="small"
                sx={{
                  width: 34, height: 34,
                  border: `1px solid ${navBorder}`, borderRadius: "6px",
                  color: mutedColor, transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: accent, color: accent,
                    background: toggleHoverBg,
                    transform: "rotate(12deg)",
                  },
                }}
              >
                {isDark
                  ? <LightModeIcon sx={{ fontSize: 16 }} />
                  : <DarkModeIcon  sx={{ fontSize: 16 }} />}
              </IconButton>
            </Tooltip>

            {isMobile && (
              <IconButton onClick={toggleDrawer(true)} size="small"
                sx={{
                  width: 34, height: 34,
                  border: `1px solid ${navBorder}`, borderRadius: "6px",
                  color: mutedColor,
                  "&:hover": { borderColor: accent, color: accent },
                }}
              >
                <MenuIcon sx={{ fontSize: 18 }} />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {drawer}
    </>
  );
};

export default NavBar;