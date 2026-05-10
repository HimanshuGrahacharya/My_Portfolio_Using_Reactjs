import React from "react";
import "../components/Styles.css/about.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="section-header">
        <p className="section-tag">Get to know me</p>
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        <div className="section-line"></div>
      </div>

      <div className="about-grid">
        {/* Image */}
        <div className="about-image-wrapper">
          <div className="about-img-frame">
            <div className="about-img-inner"></div>
          </div>
          <div className="about-badge">
            <div className="badge-number">JSDET</div>
            <div className="badge-label">@ ApraLabs</div>
          </div>
        </div>

        {/* Text */}
        <div className="about-text">
          <h3>Full-Stack Developer & Software Engineer in Test</h3>

          <p>
            I'm <strong style={{ color: "#a78bfa" }}>Himanshu Grahacharya</strong>,
            currently working as a{" "}
            <strong style={{ color: "#06b6d4" }}>
              JSDET (Junior Software Development Engineer in Test) at ApraLabs
            </strong>{" "}
            with hands-on experience in software testing, automation,
            full-stack development, and modern web technologies.
          </p>

          <p>
            Skilled in <strong style={{ color: "#a78bfa" }}>Java, C#, .NET, Python, React JS, SQL,
            TypeScript, MongoDB, Automation Testing,</strong> and API integrations,
            with a strong interest in scalable SaaS platforms and AI-powered
            applications.
          </p>

          <p>
            Recently built and deployed{" "}
            <strong style={{ color: "#06b6d4" }}>HSG AI HUB</strong> — a
            full-stack AI discovery and interaction platform featuring
            multi-model AI integration, OTP authentication, Google OAuth,
            real-time AI chat, and scalable backend architecture.
          </p>

          <div className="about-info-grid">
            <div className="info-card">
              <div className="info-label">Current Role</div>
              <div className="info-value">JSDET @ ApraLabs</div>
            </div>
            <div className="info-card">
              <div className="info-label">Specialization</div>
              <div className="info-value">Full-Stack + Automation</div>
            </div>
            <div className="info-card">
              <div className="info-label">Email</div>
              <div className="info-value" style={{ fontSize: "0.78rem" }}>
                <a
                  href="mailto:himanshugrahachaya62@gmail.com"
                  style={{ color: "#06b6d4", textDecoration: "none" }}
                >
                  himanshugrahachaya62@gmail.com
                </a>
              </div>
            </div>
            <div className="info-card">
              <div className="info-label">Status</div>
              <div className="info-value" style={{ color: "#4ade80" }}>
                ● Open to opportunities
              </div>
            </div>
          </div>

          {/* Passion tags */}
          <div className="about-passions">
            {[
              "Full-Stack Development",
              "Automation & Testing",
              "AI & LLM Integrations",
              "SaaS Platforms",
              "Scalable System Design",
              "Modern Web Technologies",
            ].map((item) => (
              <span className="passion-tag" key={item}>
                {item}
              </span>
            ))}
          </div>

          <div className="about-cta">
            <a
              href="https://himanshupofo.netlify.app/resume1.pdf"
              className="btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bx-download"></i>
              Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/himanshugrahacharya/"
              className="btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
