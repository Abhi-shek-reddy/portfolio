// src/components/ContactMe.tsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Tooltip,
  Snackbar,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

import './Contact.css';

const ContactMe: React.FC = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const phone = '+1 234-567-8901';
  const email = 'youremail@example.com';

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setSnackbarOpen(true);
  };

  return (
    <Box className="contact-container">
      <Typography variant="h4" className="contact-title" gutterBottom>
        📞 Contact Me
      </Typography>

      <Grid
        container
        spacing={3}
        direction={isSmallScreen ? 'column' : 'row'}
        justifyContent="center"
        className="contact-row"
      >
        <Grid item xs={12} sm={6}>
          <Box className="contact-box">
            <Box className="contact-info">
              <PhoneIcon color="primary" />
              <Typography variant="body1" className="contact-text">
                {phone}
              </Typography>
              <Tooltip title="Copy Number">
                <IconButton onClick={() => handleCopy(phone)}>
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box className="contact-box">
            <Box className="contact-info">
              <EmailIcon color="error" />
              <Typography variant="body1" className="contact-text">
                {email}
              </Typography>
              <Tooltip title="Copy Email">
                <IconButton onClick={() => handleCopy(email)}>
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Social Media Icons */}
      <Box className="social-icons">
        <Tooltip title="LinkedIn">
          <IconButton href="https://linkedin.com" target="_blank" style={{ color: '#0077B5' }}>
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="GitHub">
          <IconButton href="https://github.com" target="_blank" style={{ color: '#000000' }}>
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Instagram">
          <IconButton href="https://instagram.com" target="_blank" style={{ color: '#C13584' }}>
            <InstagramIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Footer */}
      <Typography variant="body2" sx={{ mt: 4, color: '#777' }}>
        © 2025 Abhishek. All rights reserved.
      </Typography>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        message="Copied to clipboard!"
      />
    </Box>
  );
};

export default ContactMe;
