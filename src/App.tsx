// App.tsx
import React from "react";
import Hero from "./components/Home";
import Projects from "./components/Projects";
import ThreeCanvas from "./components/ThreeCanvas";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./App.css";

interface AppProps {
  mode: 'light' | 'dark';
  setMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const App: React.FC<AppProps> = ({ mode, setMode }) => {
  return (
    <div className="app" style={{ paddingTop: "1px" }}>
      <NavBar mode={mode} setMode={setMode} />
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
