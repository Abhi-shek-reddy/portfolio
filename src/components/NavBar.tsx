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
  useTheme,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawer = (
    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
      <List sx={{ width: 250 }}>
        {navLinks.map((text) => (
          <ListItem button key={text} onClick={toggleDrawer(false)} component="a" href={`#${text.toLowerCase()}`}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "black" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          Abhishek.dev
        </Typography>
        {isMobile ? (
          <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: "flex", gap: 3 }}>
            {navLinks.map((text) => (
              <Button key={text} color="inherit" href={`#${text.toLowerCase()}`}>
                {text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
      {drawer}
    </AppBar>
  );
};

export default NavBar;
