import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import CloudAndFullStackSkills from "./components/AzureSkills";
import Projects from "./components/Projects";
import CodeContribution from "./components/CodeContribution";
import Education from "./components/Education";
import Contact from "./components/Contact";
import RevealSection from "./components/RevealSection";
import "./App.css";
import Experienceupdated from "./components/Experienceupdated";

interface AppProps {
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

const App: React.FC<AppProps> = ({ mode, setMode }) => {
  return (
    <div className="app">
      <NavBar mode={mode} setMode={setMode} />
      <RevealSection><Home /></RevealSection>
      <RevealSection><About /></RevealSection>
      <RevealSection><Experienceupdated /></RevealSection>
      <RevealSection><CloudAndFullStackSkills /></RevealSection>
      <RevealSection><Projects /></RevealSection>
      <RevealSection><CodeContribution /></RevealSection>
      <RevealSection><Education /></RevealSection>
      <RevealSection><Contact /></RevealSection>
    </div>
  );
};

export default App;