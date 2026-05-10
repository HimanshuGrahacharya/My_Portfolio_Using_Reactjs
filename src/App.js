import React from "react";
import Nav from "./components/Navbar/Nav";
import ParticleBackground from "./components/Background/ParticleBackground";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Skill from "./Page/Skill";
import Project from "./Page/Project";
import About from "./Page/About";
import Home from "./Page/Home";
import Contact from "./Page/Contact";

const App = () => {
  return (
    <BrowserRouter>
      {/* Animated particle background — fixed, behind everything */}
      <ParticleBackground />

      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
