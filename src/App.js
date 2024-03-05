import React from "react";
import Nav from "./components/Navbar/Nav";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App";
import Skill from "./Page/Skill";
import Project from "./Page/Project";
import About from "./Page/About";
import Home from "./Page/Home";
import Contact from "./Page/Contact";
const App = () => {
  return (
    <>
      {/* <Nav/>
  <Home/> */}

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<Home />} path="/Home" />

          <Route element={<About />} path="/about" />
          <Route element={<Skill />} path="/skill" />
          <Route element={<Project />} path="/project" />
          <Route element={<Contact />} path="/contact" />

          <Route element={<Nav />} path="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
