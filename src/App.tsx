import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ThreeCanvas from "./components/ThreeCanvas";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="app" style={{ paddingTop: "1px" }}>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <ThreeCanvas />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};


export default App;