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
  useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

interface NavBarProps {
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

const NavBar: React.FC<NavBarProps> = ({ mode, setMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

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
        mt: "50px",
        mx: "50px",
        borderRadius: "50px",
        overflow: "hidden"
      }}
    >
      <AppBar
        position="static"
        elevation={4}
        sx={{
          backgroundColor: mode === "light" ? "#023E8A" : "#111",
          color: "white",
          borderRadius: "50px"
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", letterSpacing: 1 }}
          >
            Abhishek.dev
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {!isMobile &&
              navLinks.map((text) => (
                <Button
                  key={text}
                  color="inherit"
                  href={`#${text.toLowerCase()}`}
                >
                  {text}
                </Button>
              ))}

            {isMobile && (
              <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            )}

            <Tooltip title="Toggle Theme">
              <IconButton onClick={toggleDarkMode} color="inherit">
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
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
