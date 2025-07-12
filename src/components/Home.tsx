// src/components/Home.tsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Instagram,
  Mail,
  WhatsApp,
  Send,
} from "@mui/icons-material";
import Typed from "react-typed";
import "./Home.css";

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setSnackbarOpen(true);
    setOpen(false);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "100vh",
          px: 4,
          py: 8,
          gap: 4,
        }}
      >
        {/* Left Side */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" gutterBottom>
            👋 Hi
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Typed
              strings={[
                "I am Abhishek Reddy",
                "I am Frontend Developer",
                "I am Full Stack Developer",
                "I build amazing things",
                "I am a programmer",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                display: "inline-block",
              }}
            />
          </Box>

          <Typography variant="body1" sx={{ mb: 4 }}>
            Welcome to my portfolio! I'm thrilled to have you here. Whether you're
            here to learn more about my work, collaborate, or get inspired, let's
            connect and build something incredible together!
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
              Send Message
            </Button>
            <Button variant="outlined" color="primary">
              Resume
            </Button>
          </Box>
        </Box>

        {/* Right Side - Orbit */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center", position: "relative" }}>
          <div className="orbit-container floating">
            <div className="orbit-ring">
              <div className="orbit-center">
                <img
                  src="/static/images/profile.jpg"
                  alt="Abhishek Reddy"
                  className="orbit-image"
                />
              </div>
              <div className="icon-orbit icon1 linkedin floating">
                <IconButton href="https://linkedin.com" target="_blank">
                  <LinkedIn />
                </IconButton>
              </div>
              <div className="icon-orbit icon2 mail floating">
                <IconButton href="mailto:shiva@example.com">
                  <Mail />
                </IconButton>
              </div>
              <div className="icon-orbit icon3 instagram floating">
                <IconButton href="https://instagram.com" target="_blank">
                  <Instagram />
                </IconButton>
              </div>
              <div className="icon-orbit icon4 whatsapp floating">
                <IconButton href="https://wa.me/1234567890" target="_blank">
                  <WhatsApp />
                </IconButton>
              </div>
              <div className="icon-orbit icon5 github floating">
                <IconButton href="https://github.com" target="_blank">
                  <GitHub />
                </IconButton>
              </div>
            </div>
          </div>
        </Box>
      </Box>

      {/* Dialog Form */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>Let's Connect!</DialogTitle>
        <DialogContent>
          <Typography sx={{ mb: 2 }}>
            I'd love to hear from you. Send me a message!
          </Typography>
          <TextField
            margin="dense"
            fullWidth
            name="name"
            label="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            fullWidth
            name="email"
            label="Your Email"
            value={form.email}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            fullWidth
            multiline
            minRows={3}
            name="message"
            label="Your Message"
            value={form.message}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={handleSubmit} variant="contained" startIcon={<Send />}>
            Send Message
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Message Sent Successfully! ✅
        </Alert>
      </Snackbar>
    </>
  );
};

export default Home;
