// import React from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardMedia,
//   CardContent,
//   Chip,
//   useTheme,
// } from "@mui/material";
// import "./Projects.css";

// const projects = [
//   {
//     name: "Bookstore Website",
//     image: "/images/bsPortfolio.png",
//     summary:
//       "Built a responsive Bookstore website using React (Vite + TypeScript) and FastAPI with Python/MongoDB, featuring live search, genre-based listings, cart/wishlist APIs, and smooth state handling via Context API.",
//     skills: [
//       "React",
//       "TypeScript",
//       "Vite",
//       "MUI",
//       "Context API",
//       "FastAPI",
//       "Python",
//       "MongoDB",
//       "REST API",
//       "Responsive Design",
//     ],
//   },
//   {
//     name: "Admin DashBoard",
//     image: "/images/hwPortfolio.png",
//     summary:
//       "Developed a responsive admin dashboard using React and MUI to manage users, delivery agents, and orders with tabular views, filters, and role-based UI components.",
//     skills: ["React", "JavaScript", "MUI", "HTML5", "CSS3", "Dashboard Design"],
//   },
//   {
//     name: "Blockysite ",
//     image: "/images/bPortfolio.png",
//     summary:
//       "Worked on designing and developing the landing page and a custom IDE builder interface using React, focusing on responsive layout, smooth UI, and component reusability.",
//     skills: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
//   },
// ];

// const Projects: React.FC = () => {
//   const theme = useTheme();
//   const isDarkMode = theme.palette.mode === "dark";

//   return (
//     <Box
//       id="projects"
//       className="project-section"
//       sx={{
//         backgroundColor: isDarkMode ? "#70f570ff" : "#90c5cbff",
//         px: 4,
//         py: 6,
//         minHeight: "100vh",
//       }}
//     >
//       <Typography
//         className="heading-monoton"
//         sx={{
//           color: isDarkMode ? "#000000ff" : "#023E8A",
//           fontWeight: "bold",
//           fontSize: "2rem",
//           mb: 4,
//           fontFamily: "'Monoton', cursive",
//           textAlign: "center",
//         }}
//       >
//         🚀 Projects
//       </Typography>

//       <Box
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           gap: 4,
//         }}
//       >
//         {projects.map((project, index) => (
//           <Box
//             key={index}
//             sx={{
//               width: { xs: "100%", sm: "80%", md: "30%" },
//               display: "flex",
//             }}
//             className="project-grid-item"
//           >
//             <Card
//               className="project-card"
//               sx={{
//                 backgroundColor: isDarkMode ? "#000" : "#021230ff",
//                 color: isDarkMode ? "#ffffff" : "#fff",
//                 height: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 width: "100%",
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 image={project.image}
//                 alt={project.name}
//                 className="project-image"
//               />
//               <CardContent className="project-content" sx={{ flexGrow: 1 }}>
//                 <Typography
//                   className="project-name"
//                   sx={{
//                     color: isDarkMode ? "#00fa43" : "#ffffff",
//                     fontWeight: "bold",
//                     fontSize: "1.2rem",
//                     mb: 1.5,
//                   }}
//                 >
//                   {project.name}
//                 </Typography>

//                 <Typography
//                   className="project-summary"
//                   sx={{
//                     mb: 2,
//                     fontSize: "0.95rem",
//                     color: isDarkMode ? "#ccc" : "#e0e0e0",
//                   }}
//                 >
//                   {project.summary}
//                 </Typography>

//                 <Box
//                   className="project-skills"
//                   sx={{ mt: "auto", gap: 1, display: "flex", flexWrap: "wrap" }}
//                 >
//                   {project.skills.map((skill, i) => (
//                     <Chip
//                       key={i}
//                       label={skill}
//                       size="small"
//                       sx={{
//                         backgroundColor: isDarkMode ? "#1b5e20" : "#e3f2fd",
//                         color: isDarkMode ? "#00fa43" : "#0d47a1",
//                         fontWeight: "500",
//                         border: `1px solid ${
//                           isDarkMode ? "#00fa43" : "#90caf9"
//                         }`,
//                       }}
//                     />
//                   ))}
//                 </Box>
//               </CardContent>
//             </Card>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Projects;
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  useTheme,
} from "@mui/material";

const projects = [
  // 🔥 1. DATA ENGINEERING PROJECT
  {
    name: "End-to-End Data Pipeline",
    image: "/images/dataEng.png",
    summary:
      "Built a complete data pipeline using AWS S3, Snowflake, and DBT. Implemented data ingestion, transformation, and analytics-ready models with incremental loading.",
    skills: [
      "SQL",
      "DBT",
      "Snowflake",
      "AWS S3",
      "ETL",
      "Data Modeling",
    ],
  },

  // 🔥 2. AWS + SNOWFLAKE + DBT PROJECT
  {
    name: "Modern Data Warehouse Project",
    image: "/images/snowflake.png",
    summary:
      "Designed a modern data warehouse using Snowflake and DBT with staging, transformation layers, and snapshot tracking. Integrated cloud storage (S3) for scalable data ingestion.",
    skills: [
      "Snowflake",
      "DBT",
      "AWS",
      "SQL",
      "Data Warehousing",
      "Snapshots",
    ],
  },

  // 🔥 3. FULLSTACK PROJECT
  {
    name: "BookishBeacon (Fullstack)",
    image: "/images/bsPortfolio.png",
    summary:
      "Developed a fullstack bookstore platform with React (TypeScript) and FastAPI. Includes cart, search, wishlist, and responsive UI with API integration.",
    skills: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "MongoDB",
      "REST API",
    ],
  },

  {
    name: "Admin Dashboard",
    image: "/images/hwPortfolio.png",
    summary:
      "Built an admin dashboard with role-based UI, tables, filters, and responsive design using React and MUI.",
    skills: ["React", "MUI", "JavaScript", "Dashboard UI"],
  },

  {
    name: "BlockySite Builder",
    image: "/images/bPortfolio.png",
    summary:
      "Created a responsive UI and IDE builder layout focusing on component reuse and smooth user experience.",
    skills: ["React", "HTML", "CSS", "UI Design"],
  },
];

const Projects: React.FC = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box
      id="projects"
      sx={{
        px: 4,
        py: 10,

        // 🔥 ADVANCED BACKGROUND
        background: isDarkMode
          ? `
        radial-gradient(circle at top right, rgba(0,255,128,0.08), transparent 40%),
        linear-gradient(to bottom, #0b0b0f, #111)
      `
          : `
        radial-gradient(circle at top right, rgba(0,188,212,0.1), transparent 40%),
        linear-gradient(to bottom, #01171aff, #021230)
      `,
      }}
    >
      {/* 🔥 GLOW EFFECT */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          left: "30%",
          width: 300,
          height: 300,
          background: "rgba(255,77,141,0.2)",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      {/* TITLE */}
      <Typography
        variant="h4"
        gutterBottom
        className="heading-monoton"
        sx={{
          color: isDarkMode ? "#00fa43" : "#00bcd4",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Projects
      </Typography>

      {/* GRID */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: 4,
          position: "relative",
          zIndex: 1,
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: "16px",
              overflow: "hidden",
              background: isDarkMode ? "rgba(255,255,255,0.05)" : "#fff",
              backdropFilter: "blur(10px)",
              color: isDarkMode ? "#fff" : "#000",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              },
            }}
          >
            <CardMedia
              component="img"
              image={project.image}
              sx={{ height: 180 }}
            />

            <CardContent>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  mb: 1,
                  color: isDarkMode ? "#ff4d8d" : "#023E8A",
                }}
              >
                {project.name}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.9rem",
                  mb: 2,
                  color: isDarkMode ? "#bbb" : "#555",
                }}
              >
                {project.summary}
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {project.skills.map((skill, i) => (
                  <Chip
                    key={i}
                    label={skill}
                    size="small"
                    sx={{
                      background: isDarkMode ? "#1a1a1a" : "#e3f2fd",
                      color: isDarkMode ? "#00fa43" : "#0d47a1",
                      border: `1px solid ${isDarkMode ? "#00fa43" : "#90caf9"
                        }`,
                    }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;