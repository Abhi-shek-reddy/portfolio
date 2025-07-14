import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

interface NavBarProps {
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

const NavBar: React.FC<NavBarProps> = ({ mode, setMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navLinks = [
    "Home",
    "About",
    "Experience",
    "Skills",
    "Education",
    "Projects",
    "Contact",
  ];

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const toggleDarkMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const drawer = (
    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
      <List sx={{ width: 250 }}>
        {navLinks.map((text) => (
          <ListItem
            button
            key={text}
            onClick={toggleDrawer(false)}
            component="a"
            href={`#${text.toLowerCase()}`}
            sx={{ textTransform: "none" }}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <Box
      sx={{
        mt: 2,
        mx: "50px",
        borderRadius: "50px",
        overflow: "hidden",
        position: "sticky",
        top: 0,
        zIndex: theme.zIndex.appBar,
      }}
    >
      <AppBar
        position="sticky"
        elevation={4}
        sx={{
          backgroundColor: mode === "light" ? "#023E8A" : "#111",
          color: mode === "light" ? "#ffffffff" : "#00fa43ff",
          borderRadius: "50px",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="a"
            href="#home"
            sx={{
              fontWeight: "bold",
              letterSpacing: 1,
              textDecoration: "none",
              color: "inherit",
              fontFamily: "'Fira Code', monospace",
              "&:hover": {
                opacity: 0.8,
              },
            }}
          >
            {"<Abhi/>"}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {!isMobile &&
              navLinks.map((text) => (
                <Button
                  key={text}
                  color="inherit"
                  href={`#${text.toLowerCase()}`}
                  sx={{ textTransform: "none" }}
                >
                  {text}
                </Button>
              ))}

            {isMobile && (
              <IconButton
                edge="end"
                color="inherit"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Tooltip title="Toggle Theme">
              <IconButton
                onClick={toggleDarkMode}
                color="inherit"
                sx={{
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      {drawer}
    </Box>
  );
};

export default NavBar;
