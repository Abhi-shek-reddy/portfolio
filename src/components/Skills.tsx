import React from "react";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind", "Node.js", "MongoDB", "Express", "Python"
];

const Skills = () => {
  return (
    <div className="bg-gray-100 py-16 px-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;