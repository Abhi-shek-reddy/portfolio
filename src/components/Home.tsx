import React, { useState, useEffect, useMemo } from "react";
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
  useTheme,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Instagram,
  Mail,
  WhatsApp,
  Send,
  Close,
} from "@mui/icons-material";
import Lottie from "lottie-react";
import hiAnimation from "../lottie/Hello.json";
import { replaceLottieColor } from "../utils/replaceLottieColor";
import "./Home.css";

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const themeColor = isDarkMode ? "#00fa43" : "#0077b6";

  const updatedLottie = useMemo(() => replaceLottieColor(hiAnimation, themeColor), [themeColor]);

  // Typewriter Logic
  const titles = [
    "I am Abhishek Reddy..",
    "I am Data Engineer..",
    "I am Data Analyst..",
    "I am Frontend Developer..",
    "I am Full Stack Developer..",
    "I build amazing things..",
    "I am a Programmer..",
  ];

  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === titles.length) return;

    if (subIndex === titles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 800);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
      setCurrentText(titles[index].substring(0, subIndex));
    }, reverse ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

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
        id="home"
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
          <Box sx={{ width: 140, height: 120, mb: 1 }}>
            <Lottie animationData={updatedLottie} loop autoplay />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h5"
              className="gloria-hallelujah-regular"
              sx={{
                color: isDarkMode ? "#00fa43ff" : "#90E0EF",
                fontWeight: "bold",
                fontSize: { xs: "1.4rem", sm: "2rem" },
                minHeight: { xs: "72px", sm: "48px" }, // fixed height to avoid bounce
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {currentText}
              <span className="blinking-cursor">|</span>
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 4 }}>
            Welcome to my portfolio! I'm thrilled to have you here. Whether you're
            here to learn more about my work, collaborate, or get inspired, let's
            connect and build something incredible together!
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              onClick={() => setOpen(true)}
              sx={{
                textTransform: "none",
                backgroundColor: isDarkMode ? "#00fa43ff" : "#90E0EF",
                color: "black",
                ":hover": {
                  backgroundColor: isDarkMode ? "#111" : "#0353A4",
                },
              }}
            >
              Send Message
            </Button>
            <Button
              variant="outlined"
              onClick={() => setResumeOpen(true)}
              sx={{
                textTransform: "none",
                color: isDarkMode ? "#00fa43ff" : "#90E0EF",
                borderColor: isDarkMode ? "#00fa43ff" : "#90E0EF",
                ":hover": {
                  borderColor: isDarkMode ? "#aaa" : "#0353A4",
                },
              }}
            >
              Resume
            </Button>
          </Box>
        </Box>

        {/* Right Side */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div className="orbit-container floating">
            <div className="orbit-ring">
              <div className="orbit-center">
                <img
                  src="./images/cvPhoto.jpg"
                  alt="Abhishek Reddy"
                  className="orbit-image"
                />
              </div>
              <div className="icon-orbit icon1 linkedin floating">
                <IconButton
                  href="https://www.linkedin.com/in/abhishek-reddy-manam-1b5167204/"
                  target="_blank"
                >
                  <LinkedIn />
                </IconButton>
              </div>
              <div className="icon-orbit icon2 mail floating">
                <IconButton href="mailto:abhishekreddymanam@gmail.com">
                  <Mail />
                </IconButton>
              </div>
              <div className="icon-orbit icon3 instagram floating">
                <IconButton
                  href="https://www.instagram.com/aab.hi_/"
                  target="_blank"
                >
                  <Instagram />
                </IconButton>
              </div>
              <div className="icon-orbit icon4 whatsapp floating">
                <IconButton
                  href="https://wa.me/14844829961"
                  target="_blank"
                >
                  <WhatsApp />
                </IconButton>
              </div>
              <div className="icon-orbit icon5 github floating">
                <IconButton
                  href="https://github.com/Abhi-shek-reddy"
                  target="_blank"
                >
                  <GitHub />
                </IconButton>
              </div>
            </div>
          </div>
        </Box>
      </Box>

      {/* Contact Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
          Let's Connect!
          <IconButton onClick={() => setOpen(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
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
        <DialogActions>
          <Button
            onClick={handleSubmit}
            variant="contained"
            startIcon={<Send />}
          >
            Send Message
          </Button>
        </DialogActions>
      </Dialog>

      {/* Resume Dialog */}
      <Dialog open={resumeOpen} onClose={() => setResumeOpen(false)} fullWidth maxWidth="md">
        <DialogTitle>
          Resume
          <IconButton onClick={() => setResumeOpen(false)} sx={{ float: "right" }}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <iframe
            src="/Abhishek_Reddy_Resume.pdf"
            title="Resume PDF"
            width="100%"
            height="500px"
            style={{ border: "none" }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            href="/Abhishek_Reddy_Resume.pdf"
            download
          >
            Download Resume
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
