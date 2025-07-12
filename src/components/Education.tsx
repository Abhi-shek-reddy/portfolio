import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './Education.css';

const educationData = [
  {
    course: 'MS in Information System Technologies (Web Design)',
    duration: '2024 - 2026',
    university: 'Wilmington University',
    cgpa: '3.8 / 4.0',
  },
  {
    course: 'BTech in Computer Science',
    duration: '2019 - 2023',
    university: 'Lovely Professional University',
    cgpa: '7.2 / 10',
  },
  {
    course: 'Intermediate (MPC)',
    duration: '2017 - 2019',
    university: 'Sri Chaitanya Junior College',
    cgpa: '9.5 / 10',
  },
];

const Education: React.FC = () => {
  return (
    <Box className="education-section">
      <Typography className="education-heading">🎓 Education</Typography>

      <Grid container spacing={4} justifyContent="center">
        {educationData.map((edu, index) => (
          <Grid item xs={12} sm={8} md={4} key={index} className="education-grid-item">
            <Card className="education-card">
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <SchoolIcon color="primary" />
                  <Typography variant="subtitle1" className="education-university">
                    {edu.university}
                  </Typography>
                </Box>

                <Typography className="education-course">{edu.course}</Typography>

                <Divider sx={{ my: 1 }} />

                <Box className="education-duration">
                  <CalendarMonthIcon fontSize="small" color="action" />
                  <Typography variant="body2">{edu.duration}</Typography>
                </Box>

                <Typography className="education-cgpa">
                  CGPA: <strong>{edu.cgpa}</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Education;
