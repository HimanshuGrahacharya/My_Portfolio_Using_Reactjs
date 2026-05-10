import React, { useEffect, useState } from "react";
import "../components/Styles.css/home.css";

const roles = [
  "JSDET @ ApraLabs",
  "Full-Stack Developer",
  "React JS Developer",
  "Automation Engineer",
  "AI & SaaS Builder",
  "Java · C# · .NET · Python",
];

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 55 : 95;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((r) => (r + 1) % roles.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className="home_page">
      <div className="home-content">
        {/* Left */}
        <div className="home-text">
          <div className="home-greeting fade-in-up delay-1">
            Open to opportunities
          </div>

          <h1 className="home-name fade-in-up delay-2">
            Hi, I'm <br />
            <span className="highlight">Himanshu</span>
            <br />
            Grahacharya
          </h1>

          <div className="home-typed-wrapper fade-in-up delay-3">
            <span className="typed-text">{displayText}</span>
            <span className="cursor" />
          </div>

          <p className="home-description fade-in-up delay-4">
            JSDET at <strong style={{ color: "#a78bfa" }}>ApraLabs</strong> —
            building scalable full-stack apps, automation frameworks, and
            AI-powered SaaS platforms. Passionate about clean code, performance,
            and real-world impact.
          </p>

          <div className="home-email fade-in-up delay-4">
            <i className="bx bx-envelope"></i>
            <a href="mailto:himanshugrahachaya62@gmail.com">
              himanshugrahachaya62@gmail.com
            </a>
          </div>

          <div className="home-stats fade-in-up delay-4">
            <div className="stat-item">
              <span className="stat-number">1+</span>
              <span className="stat-label">Yrs @ ApraLabs</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">AI</span>
              <span className="stat-label">HSG AI HUB</span>
            </div>
          </div>

          <div className="home-btns fade-in-up delay-5">
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
              LinkedIn
            </a>
          </div>

          <div className="home-socials fade-in-up delay-6">
            <a
              href="https://www.linkedin.com/in/himanshugrahacharya/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <i className="bx bxl-youtube"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="home-image-wrapper fade-in-up delay-3">
          <div className="home-image-ring">
            <div className="home-img"></div>
          </div>
          <div className="home-float-badge">
            <i className="bx bx-code-alt"></i>
            <span>JSDET @ ApraLabs</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Scroll</span>
      </div>
    </div>
  );
};

export default Home;
