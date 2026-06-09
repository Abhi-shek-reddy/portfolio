import React from "react";
import { motion } from "framer-motion";

interface RevealSectionProps {
children: React.ReactNode;
}

const RevealSection: React.FC<RevealSectionProps> = ({ children }) => {
return (
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{
duration: 0.5,
ease: "easeOut",
}}
style={{
width: "100%",
overflow: "visible",
display: "block",
}}
>
{children}
</motion.div>
);
};

export default RevealSection;
