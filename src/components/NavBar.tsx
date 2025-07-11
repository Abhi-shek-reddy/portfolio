// src/components/NavBar.tsx
import React from "react";
import {
  AppBar, Toolbar, IconButton, Typography, Container,
  Button, Box, Drawer, List, ListItem, ListItemButton, ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from '@mui/material/styles';

interface Props {
  mode: 'light' | 'dark';
  setMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const pages = ['Home', 'About','Skills','Experience',"Projects",  'Contact'];

const NavBar: React.FC<Props> = ({ mode, setMode }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        p: 2,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
      }}
      role="presentation"
    >
      <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
        <IconButton onClick={toggleDrawer(false)} color="inherit">
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ mt: 6 }}>
        {pages.map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              animation: `fadeSlideIn 0.5s ease ${(index + 1) * 0.1}s forwards`,
              opacity: 0,
              transform: 'translateX(-20px)',
            }}
          >
            <ListItemButton component="a" href={`#${text.toLowerCase()}`} onClick={toggleDrawer(false)}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <style>
        {`
          @keyframes fadeSlideIn {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>

      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
                display: { xs: "none", md: "flex" },
              }}
            >
              Abhishek
            </Typography>

            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerList}
              </Drawer>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
                display: { xs: "flex", md: "none" },
              }}
            >
              Abhishek
            </Typography>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  href={`#${page.toLowerCase()}`}
                  sx={{ color: "white" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} color="inherit">
                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
