import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../Styles.css/nav.css";

export default function Nav() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/Home", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skill", label: "Skills" },
    { to: "/project", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="Navbar">
      <div className="logo">
        <span>H</span>G
      </div>

      <div className={`links ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
            <button
              className={
                location.pathname.toLowerCase() === link.to.toLowerCase()
                  ? "active-link"
                  : ""
              }
            >
              {link.label}
            </button>
          </Link>
        ))}
      </div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
