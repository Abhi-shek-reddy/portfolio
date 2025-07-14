import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  useTheme,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './Education.css'; // Add this line if not already included

const educationData = [
  {
    course: 'MS in Information System Technologies (Web Design)',
    duration: '2024 - 2026',
    university: 'Wilmington University',
    cgpa: '3.8 / 4.0',
    description:
      'Currently pursuing a Master’s program with a specialization in Web Design. Gaining in-depth knowledge of advanced UI/UX, frontend frameworks, backend integration, and responsive web development. Also exploring database design and project-based collaboration.',
  },
  {
    course: 'BTech in Computer Science',
    duration: '2019 - 2023',
    university: 'Lovely Professional University',
    cgpa: '7.2 / 10',
    description:
      'Built strong foundational knowledge in data structures, object-oriented programming, computer networks, and software engineering. Worked on academic projects and explored frontend development using React during the final year.',
  },
  {
    course: 'Intermediate (MPC)',
    duration: '2017 - 2019',
    university: 'Sri Chaitanya Junior College',
    cgpa: '9.5 / 10',
    description:
      'Focused on core mathematics, physics, and chemistry subjects to prepare for engineering entrance exams. Built a strong analytical mindset and problem-solving skills.',
  },
];

const Education: React.FC = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const borderColor = isDarkMode ? '#00fa43' : '#00bcd4';

  return (
    <Box sx={{ px: 4, py: 6 }} id="education">
      <Typography
      className="heading-monoton"
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          mb: 4,
          color: borderColor,
        }}
      >
        🎓 Education
      </Typography>

      {educationData.map((edu, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Box className="animated-card-wrapper">
            <Card
              className="animated-card"
              variant="outlined"
              sx={{
                backgroundColor: isDarkMode ? '#000' : '#18182bff',
                color: isDarkMode ? '#fff' : 'white',
                borderColor,
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <SchoolIcon color="primary" />
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {edu.university}
                  </Typography>
                </Box>

                <Typography sx={{ mb: 1 }}>{edu.course}</Typography>

                <Divider sx={{ my: 1, borderColor }} />

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <CalendarMonthIcon fontSize="small" color="action" />
                  <Typography variant="body2">{edu.duration}</Typography>
                </Box>

                <Typography>
                  CGPA: <strong>{edu.cgpa}</strong>
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    color: isDarkMode ? '#ccc' : '#00bcd4',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                  }}
                >
                  {edu.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Education;
