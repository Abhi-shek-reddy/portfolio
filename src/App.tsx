import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import "./App.css";
import SoftSkills from "./components/SoftSkills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import CodeContribution from "./components/CodeContribution";
import RevealSection from "./components/RevealSection"; // 👈 import the wrapper

interface AppProps {
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

const App: React.FC<AppProps> = ({ mode, setMode }) => {
  return (
    <div
      className="app"
      style={{
        backgroundColor: mode === "light" ? "#021230ff" : "#111",
        color: "#fff",
        transition: "all 0.3s ease",
        minHeight: "100vh",
        paddingTop: "1px",
      }}
    >
      <NavBar mode={mode} setMode={setMode} />

      {/* 👇 Animate each section on scroll */}
      <RevealSection><Home /></RevealSection>
      <RevealSection><About /></RevealSection>
      <RevealSection><CodeContribution /></RevealSection>
      <RevealSection><Experience /></RevealSection>
      <RevealSection><SoftSkills /></RevealSection>
      <RevealSection><Skills /></RevealSection>
      <RevealSection><Education /></RevealSection>
      <RevealSection><Projects /></RevealSection>
      <RevealSection><Contact /></RevealSection>
    </div>
  );
};

export default App;
