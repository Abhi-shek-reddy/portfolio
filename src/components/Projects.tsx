import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const sampleProjects = [
    {
      title: "Bookstore App",
      description: "A full-stack MERN project with cart, wishlist, and genres.",
    },
    {
      title: "AI Love Story Video",
      description: "Generated using AI scenes and animations.",
    },
    {
      title: "Birthday Surprise Website",
      description: "Interactive and animated with personalized Ghibli-style art.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16 px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {sampleProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;