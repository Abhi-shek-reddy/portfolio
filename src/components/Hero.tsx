import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero min-h-screen flex items-center justify-center text-center bg-gradient-to-r from-black via-purple-900 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hey, I'm Abhishek 👨‍💻</h1>
        <p className="text-xl md:text-2xl">A Creative React & Full-Stack Developer</p>
      </motion.div>
    </div>
  );
};

export default Hero;