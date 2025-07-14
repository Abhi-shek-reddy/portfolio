import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Tooltip,
  Snackbar,
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

  const phone = '+1 484-482-9961';
  const email = 'abhishekreddymanam@gmail.com';

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setSnackbarOpen(true);
  };

  const contactData = [
    {
      icon: <PhoneIcon sx={{ color: '#d32f2f' }} />,
      value: phone,
    },
    {
      icon: <EmailIcon sx={{ color: '#ff9800' }} />,
      value: email,
    },
  ];

  return (
    <Box className="contact-container" id="contact">
      {/* Heading */}
      <Typography
        className="heading-monoton"
        variant="h4"
        sx={{
          fontWeight: 'bold',
          paddingTop: 4,
          marginBottom: 4,
          color: theme.palette.mode === 'dark' ? '#00fa43' : '#1976d2',
          textAlign: 'center',
        }}
      >
        📞 Contact Me
      </Typography>

      {/* Phone & Email Boxes */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
          flexWrap: 'wrap',
        }}
      >
        {contactData.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: '100%',
              maxWidth: 400,
              padding: 2.5,
              borderRadius: 2,
              border: `1px solid ${
                theme.palette.mode === 'dark' ? '#00fa43' : '#90caf9'
              }`,
              backgroundColor:
                theme.palette.mode === 'dark' ? '#121212' : '#f9f9f9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 1.5,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              {item.icon}
              <Typography
                variant="body1"
                className="contact-text"
                sx={{ color: theme.palette.text.primary }}
              >
                {item.value}
              </Typography>
            </Box>
            <Tooltip title="Copy">
              <IconButton
                onClick={() => handleCopy(item.value)}
                sx={{ color: theme.palette.text.primary }}
              >
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        ))}
      </Box>

      {/* Social Media Icons */}
      <Box
        className="social-icons"
        sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}
      >
        <Tooltip title="LinkedIn">
          <span className="icon-wrapper linkedin">
            <IconButton
              href="https://www.linkedin.com/in/abhishek-reddy-manam-1b5167204/"
              target="_blank"
              sx={{ color: '#0077b5' }}
            >
              <LinkedInIcon />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="GitHub">
          <span className="icon-wrapper github">
            <IconButton
              href="https://github.com/Abhi-shek-reddy"
              target="_blank"
              sx={{ color: '#ffffff' }}
            >
              <GitHubIcon />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Instagram">
          <span className="icon-wrapper instagram">
            <IconButton
              href="https://www.instagram.com/aab.hi_/"
              target="_blank"
              sx={{ color: '#C13584' }}
            >
              <InstagramIcon />
            </IconButton>
          </span>
        </Tooltip>
      </Box>

      {/* Footer */}
      <Typography
        variant="body2"
        sx={{ mt: 4, color: '#777', textAlign: 'center' }}
      >
        © 2025 Abhishek. All rights reserved.
      </Typography>

      {/* Copy Snackbar */}
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
