import React from "react";
import "../components/Styles.css/skill.css";
import "../components/Styles.css/about.css";

const devSkills = [
  { name: "React JS", percent: 88 },
  { name: "Java", percent: 85 },
  { name: "C# / .NET", percent: 80 },
  { name: "Python", percent: 78 },
  { name: "TypeScript", percent: 75 },
  { name: "JavaScript", percent: 88 },
  { name: "HTML / CSS", percent: 92 },
  { name: "SQL / MongoDB", percent: 82 },
];

const testingSkills = [
  { name: "Manual Testing", percent: 92 },
  { name: "Automation Testing", percent: 86 },
  { name: "API Testing", percent: 88 },
  { name: "Selenium / Playwright", percent: 80 },
  { name: "CI/CD Pipelines", percent: 74 },
  { name: "Test Case Design", percent: 90 },
  { name: "Bug Reporting", percent: 93 },
  { name: "Postman", percent: 85 },
];

const techStack = [
  { icon: "bxl-react",      label: "React JS"    },
  { icon: "bxl-java",       label: "Java"        },
  { icon: "bxl-python",     label: "Python"      },
  { icon: "bxl-typescript", label: "TypeScript"  },
  { icon: "bxl-javascript", label: "JavaScript"  },
  { icon: "bxl-html5",      label: "HTML5"       },
  { icon: "bxl-css3",       label: "CSS3"        },
  { icon: "bxs-data",       label: "SQL"         },
  { icon: "bxl-mongodb",    label: "MongoDB"     },
  { icon: "bxl-git",        label: "Git"         },
  { icon: "bxl-github",     label: "GitHub"      },
  { icon: "bxl-figma",      label: "Figma"       },
  { icon: "bx-terminal",    label: ".NET"        },
  { icon: "bx-cloud",       label: "REST API"    },
];

const experiences = [
  {
    icon: "bx bx-buildings",
    role: "JSDET — Junior Software Development Engineer in Test",
    company: "ApraLabs",
    desc: "Hands-on experience in software testing, automation, full-stack development, and modern web technologies. Building scalable SaaS platforms and AI-powered applications.",
    tags: ["Java", "C#", ".NET", "Automation", "API Testing"],
  },
  {
    icon: "bx bx-brain",
    role: "Founder & Full-Stack Developer",
    company: "HSG AI HUB",
    desc: "Built and deployed a full-stack AI discovery platform with multi-model AI integration, OTP authentication, Google OAuth, real-time AI chat, and scalable backend architecture.",
    tags: ["React", "Node.js", "MongoDB", "AI/LLM", "OAuth"],
  },
];

const Skill = () => {
  return (
    <div className="skills-page">
      <div className="section-header">
        <p className="section-tag">What I work with</p>
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
        <div className="section-line"></div>
      </div>

      {/* Skill bars grid */}
      <div className="skills-grid">
        {/* Development */}
        <div className="skill-category">
          <div className="skill-category-header">
            <div className="skill-category-icon">
              <i className="bx bx-code-alt"></i>
            </div>
            <h3>Development Skills</h3>
          </div>
          {devSkills.map((skill) => (
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

        {/* Testing & QA */}
        <div className="skill-category">
          <div className="skill-category-header">
            <div className="skill-category-icon">
              <i className="bx bx-bug"></i>
            </div>
            <h3>Testing & QA Skills</h3>
          </div>
          {testingSkills.map((skill) => (
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

      {/* Experience cards */}
      <div className="experience-highlight">
        {experiences.map((exp) => (
          <div className="exp-card" key={exp.company}>
            <div className="exp-icon">
              <i className={exp.icon}></i>
            </div>
            <div className="exp-info">
              <div className="exp-role">{exp.role}</div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-desc">{exp.desc}</div>
              <div className="exp-tags">
                {exp.tags.map((tag) => (
                  <span className="exp-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tech stack icons */}
      <div className="tech-stack-section">
        <h3>Full Tech Stack</h3>
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
