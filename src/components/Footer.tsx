import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-6">
      <p>© {new Date().getFullYear()} Abhishek Reddy | <a href="/resume.pdf" className="underline">Resume</a></p>
    </footer>
  );
};

export default Footer;