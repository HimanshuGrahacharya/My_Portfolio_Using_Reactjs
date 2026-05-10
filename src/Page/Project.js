import React from "react";
import "../components/Styles.css/project.css";
import "../components/Styles.css/about.css";

import pl from "../image/pl.png";
import youtube2 from "../image/youtube2.png";
import royal2 from "../image/royal2.png";
import shadi2 from "../image/shadi2.png";
import Dibrarypng from "../image/Dibrarypng.png";
import sur from "../image/sur.png";

const projects = [
  {
    title: "Marriage Website",
    desc: "A beautiful wedding event website with elegant design, RSVP form, and gallery section.",
    tags: ["HTML", "CSS", "JavaScript"],
    img: pl,
    demo: "#",
    code: "#",
  },
  {
    title: "YouTube Clone",
    desc: "A responsive YouTube-inspired video platform UI with search, sidebar, and video cards.",
    tags: ["HTML", "CSS"],
    img: youtube2,
    demo: "#",
    code: "#",
  },
  {
    title: "Royal Brothers",
    desc: "A bike rental service landing page with booking UI, fleet showcase, and pricing section.",
    tags: ["HTML", "CSS", "JS"],
    img: royal2,
    demo: "#",
    code: "#",
  },
  {
    title: "Wedding Planner",
    desc: "Full wedding planning platform with vendor listings, budget tracker, and event timeline.",
    tags: ["HTML", "CSS", "JS"],
    img: shadi2,
    demo: "#",
    code: "#",
  },
  {
    title: "Digital Library",
    desc: "An online library system with book catalog, search functionality, and user management.",
    tags: ["Java", "SQL", "HTML"],
    img: Dibrarypng,
    demo: "#",
    code: "#",
  },
  {
    title: "Surprise Box",
    desc: "An interactive surprise reveal web experience with animations and personalized messages.",
    tags: ["HTML", "CSS", "JS"],
    img: sur,
    demo: "#",
    code: "#",
  },
];

const Project = () => {
  return (
    <div className="projects-page">
      <div className="section-header">
        <p className="section-tag">What I've built</p>
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
        <div className="section-line"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div
              className="project-img"
              style={{ backgroundImage: `url(${project.img})` }}
            >
              <div className="project-overlay">
                <a
                  href={project.demo}
                  className="overlay-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bx-link-external"></i>
                  Live
                </a>
                <a
                  href={project.code}
                  className="overlay-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-github"></i>
                  Code
                </a>
              </div>
            </div>

            <div className="project-body">
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-links">
                <a
                  href={project.demo}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bx-link-external"></i>
                  Live Demo
                </a>
                <a
                  href={project.code}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-github"></i>
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-cta">
        <a
          href="https://github.com/"
          className="btn-secondary"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-github"></i>
          View All on GitHub
        </a>
      </div>
    </div>
  );
};

export default Project;
