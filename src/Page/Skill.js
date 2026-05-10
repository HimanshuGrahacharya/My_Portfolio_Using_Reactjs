import React from "react";
import "../components/Styles.css/skill.css";
import "../components/Styles.css/about.css";

const programmingSkills = [
  { name: "HTML", percent: 94 },
  { name: "CSS", percent: 92 },
  { name: "JavaScript", percent: 88 },
  { name: "React JS", percent: 85 },
  { name: "Java", percent: 80 },
  { name: "SQL", percent: 82 },
  { name: "Advanced Java", percent: 75 },
];

const designSkills = [
  { name: "Photoshop", percent: 82 },
  { name: "Video Editing", percent: 90 },
  { name: "Figma", percent: 65 },
  { name: "Responsive Design", percent: 88 },
  { name: "Color Theory", percent: 78 },
];

const techStack = [
  { icon: "bxl-html5", label: "HTML5" },
  { icon: "bxl-css3", label: "CSS3" },
  { icon: "bxl-javascript", label: "JS" },
  { icon: "bxl-react", label: "React" },
  { icon: "bxl-java", label: "Java" },
  { icon: "bxs-data", label: "SQL" },
  { icon: "bxl-figma", label: "Figma" },
  { icon: "bxl-git", label: "Git" },
  { icon: "bxl-github", label: "GitHub" },
  { icon: "bxl-youtube", label: "YouTube" },
];

const Skill = () => {
  return (
    <div className="skills-page">
      <div className="section-header">
        <p className="section-tag">What I know</p>
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
        <div className="section-line"></div>
      </div>

      <div className="skills-grid">
        {/* Programming Skills */}
        <div className="skill-category">
          <div className="skill-category-header">
            <div className="skill-category-icon">
              <i className="bx bx-code-alt"></i>
            </div>
            <h3>Programming Skills</h3>
          </div>

          {programmingSkills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <div className="skill-meta">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.percent}%</span>
              </div>
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Design Skills */}
        <div className="skill-category">
          <div className="skill-category-header">
            <div className="skill-category-icon">
              <i className="bx bx-palette"></i>
            </div>
            <h3>Design Skills</h3>
          </div>

          {designSkills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <div className="skill-meta">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.percent}%</span>
              </div>
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="tech-stack-section">
        <h3>Tech Stack</h3>
        <div className="tech-icons">
          {techStack.map((tech) => (
            <div className="tech-icon-item" key={tech.label}>
              <i className={`bx ${tech.icon}`}></i>
              <span>{tech.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
