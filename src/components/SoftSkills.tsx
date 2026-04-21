// // src/components/SoftSkills.tsx
// import React from "react";
// import { Box, Typography, useTheme } from "@mui/material";
// import "./Skills.css"; // Reuse same CSS

// const softSkills = [
//   { name: "Communication", icon: "./images/conversation.png" },
//   { name: "Team Work", icon: "./images/brainstorm.png" },
//   { name: "Creativity", icon: "./images/brain.png" },
//   { name: "Creative Thinking", icon: "./images/idea.png" },
//   { name: "Problem Solving", icon: "./images/problem-solving-skills.png" },
// ];

// const SoftSkills: React.FC = () => {
//   const theme = useTheme();
//   const isDarkMode = theme.palette.mode === "dark";

//   return (
//     <Box sx={{ px: 4, py: 8, textAlign: "center" }}>
//       <Typography
//         className="heading-monoton"
//         variant="h4"
//         gutterBottom
//         sx={{
//           color: isDarkMode ? "#00fa43" : "#00bcd4",
//           fontWeight: "bold",
//           textAlign: "center",
//         }}
//       >
//         Soft Skills
//       </Typography>

//       <Box
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           gap: 4,
//           mt: 4,
//         }}
//       >
//         {softSkills.map((skill) => (
//           <Box
//             key={skill.name}
//             sx={{
//               width: 150,
//               p: 2,
//               borderRadius: 2,
//               backgroundColor: isDarkMode ? "#292c28ff" : "#e0f7fa",
//               boxShadow: 3,
//               textAlign: "center",
//             }}
//             className={`skill-card ${isDarkMode ? "dark-mode" : "light-mode"}`}
//           >
//             <img src={skill.icon} alt={skill.name} className="skill-icon" />
//             <Typography
//               variant="subtitle1"
//               sx={{
//                 mt: 1,
//                 color: isDarkMode ? "#ffffff" : "#000000", // ✅ Dark/Light mode control here
//               }}
//             >
//               {skill.name}
//             </Typography>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default SoftSkills;
// src/components/DataEngineeringSkills.tsx
// import React from "react";
// import { Box, Typography, useTheme } from "@mui/material";
// import { motion } from "framer-motion";
// import "./SoftSkills.css";
// const MBox = motion(Box);

// const dataSkills = [
//   // 🧠 Core Languages
//   { name: "SQL", icon: "https://img.icons8.com/color/96/sql.png" },
//   { name: "Python", icon: "https://img.icons8.com/color/96/python.png" },

//   // ⚙️ Processing
//   { name: "Apache Spark", icon: "https://img.icons8.com/color/96/apache-spark.png" },
//   { name: "PySpark", icon: "https://img.icons8.com/color/96/code.png" },

//   // 🔄 Orchestration
//   { name: "Airflow", icon: "https://img.icons8.com/color/96/workflow.png" },
//   { name: "DBT", icon: "https://img.icons8.com/color/96/database.png" },

//   // 🌊 Streaming
//   { name: "Kafka", icon: "https://img.icons8.com/color/96/data-in-both-directions.png" },

//   // 💾 Warehousing
//   { name: "Snowflake", icon: "https://img.icons8.com/color/96/snowflake.png" },
//   { name: "Amazon Redshift", icon: "https://img.icons8.com/color/96/database.png" },
//   { name: "Google BigQuery", icon: "https://img.icons8.com/color/96/google-cloud.png" },

//   // ☁️ Cloud
//   { name: "AWS S3", icon: "https://img.icons8.com/color/96/amazon-web-services.png" },
//   { name: "AWS Glue", icon: "https://img.icons8.com/color/96/amazon-web-services.png" },
//   { name: "Azure Data Factory", icon: "https://img.icons8.com/color/96/azure-1.png" },

//   // 🔧 Pipelines & Concepts
//   { name: "ETL Pipelines", icon: "https://img.icons8.com/color/96/data-configuration.png" },
//   { name: "Data Warehousing", icon: "https://img.icons8.com/color/96/database.png" },
//   { name: "Data Modeling", icon: "https://img.icons8.com/color/96/flow-chart.png" },
//   { name: "Git", icon: "https://img.icons8.com/color/96/git.png" },
// ];

// const DataEngineeringSkills: React.FC = () => {
//   const theme = useTheme();
//   const isDarkMode = theme.palette.mode === "dark";

//   return (
//     <Box sx={{ px: 4, py: 8, textAlign: "center" }}>

//       {/* 🔥 TITLE ANIMATION */}
//       <MBox
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <Typography
//           variant="h4"
//           sx={{
//             color: isDarkMode ? "#ff4d8d" : "#1976d2",
//             fontWeight: "bold",
//           }}
//         >
//           Data Engineering Skills
//         </Typography>
//       </MBox>

//       {/* 🎯 SKILLS GRID */}
//       <Box
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           gap: 4,
//           mt: 5,
//         }}
//       >
//         {dataSkills.map((skill, index) => (
//           <MBox
//             key={skill.name}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               delay: index * 0.1, // 🔥 stagger effect
//               duration: 0.4,
//             }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.05 }} // 🔥 hover animation
//           >
//             <Box
//               sx={{
//                 width: 150,
//                 p: 2,
//                 borderRadius: "12px",
//                 background: isDarkMode ? "#111" : "#f5f5f5",
//                 border: "1px solid rgba(255,255,255,0.08)",
//                 textAlign: "center",
//                 transition: "0.3s",
//                 "&:hover": {
//                   boxShadow: "0 0 20px rgba(255,77,141,0.3)",
//                 },
//               }}
//             >
//               <img
//                 src={skill.icon}
//                 alt={skill.name}
//                 style={{ width: 50, height: 50 }}
//               />

//               <Typography
//                 sx={{
//                   mt: 1,
//                   fontSize: "0.9rem",
//                   color: isDarkMode ? "#fff" : "#000",
//                 }}
//               >
//                 {skill.name}
//               </Typography>
//             </Box>
//           </MBox>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default DataEngineeringSkills;
// src/components/Skills.tsx
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import "./Skills.css";

const skills = [
  // 🧠 Core Languages
  { name: "SQL", icon: "https://img.icons8.com/color/96/sql.png" },
  { name: "Python", icon: "https://img.icons8.com/color/96/python.png" },

  // ⚙️ Processing
  { name: "Apache Spark", icon: "https://img.icons8.com/color/96/apache-spark.png" },
  { name: "PySpark", icon: "https://img.icons8.com/color/96/code.png" },

  // 🔄 Orchestration
  { name: "Airflow", icon: "https://img.icons8.com/color/96/workflow.png" },
  { name: "DBT", icon: "https://img.icons8.com/color/96/database.png" },

  // 🌊 Streaming
  { name: "Kafka", icon: "https://img.icons8.com/color/96/data-in-both-directions.png" },

  // 💾 Warehousing
  { name: "Snowflake", icon: "https://img.icons8.com/color/96/snowflake.png" },
  { name: "Amazon Redshift", icon: "https://img.icons8.com/color/96/database.png" },
  { name: "Google BigQuery", icon: "https://img.icons8.com/color/96/google-cloud.png" },

  // ☁️ Cloud
  { name: "AWS S3", icon: "https://img.icons8.com/color/96/amazon-web-services.png" },
  { name: "AWS Glue", icon: "https://img.icons8.com/color/96/amazon-web-services.png" },
  { name: "Azure Data Factory", icon: "https://img.icons8.com/color/96/azure-1.png" },

  // 🔧 Pipelines & Concepts
  { name: "ETL Pipelines", icon: "https://img.icons8.com/color/96/data-configuration.png" },
  { name: "Data Warehousing", icon: "https://img.icons8.com/color/96/database.png" },
  { name: "Data Modeling", icon: "https://img.icons8.com/color/96/flow-chart.png" },
  { name: "Git", icon: "https://img.icons8.com/color/96/git.png" },
];

const Skills: React.FC = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box sx={{ textAlign: "center", px: 4, py: 6 }} id="skills">
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
        Data Engineering Skills
      </Typography>

      <Box className="skills-grid">
        {skills.map((skill) => (
          <Box
            key={skill.name}
            className={`skill-card ${isDarkMode ? "dark-mode" : "light-mode"}`}
          >
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <Typography
              variant="subtitle1"
              className="skill-name"
              sx={{
                marginTop: "10px",
                color: isDarkMode ? "white" : "black",
              }}
            >
              {skill.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
