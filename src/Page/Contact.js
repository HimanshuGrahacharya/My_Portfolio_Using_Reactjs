import React, { useState } from "react";
import "../components/Styles.css/contact.css";
import "../components/Styles.css/about.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <div className="contact-page">
        <div className="section-header">
          <p className="section-tag">Get in touch</p>
          <h2 className="section-title">
            Contact <span>Me</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-wrapper">
          {/* Left: Info */}
          <div className="contact-info">
            <div>
              <h3>Let's work together on something great</h3>
              <p>
                Have a project in mind or just want to say hi? My inbox is
                always open. I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <i className="bx bx-envelope"></i>
                </div>
                <div className="contact-detail-text">
                  <div className="detail-label">Email</div>
                  <div className="detail-value">
                    <a href="mailto:himanshugrahachaya62@gmail.com">
                      himanshugrahachaya62@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <i className="bx bx-map"></i>
                </div>
                <div className="contact-detail-text">
                  <div className="detail-label">Location</div>
                  <div className="detail-value">India</div>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <i className="bx bx-time"></i>
                </div>
                <div className="contact-detail-text">
                  <div className="detail-label">Response Time</div>
                  <div className="detail-value">Within 24 hours</div>
                </div>
              </div>
            </div>

            <div>
              <p
                style={{
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "0.8rem",
                }}
              >
                Find me on
              </p>
              <div className="contact-socials">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a
                  href="https://www.github.com/"
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
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-card">
            <h3>Send me a message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project inquiry"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-submit">
                <button type="submit">
                  <i className="bx bx-send"></i>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <p className="footer-text">
          © 2024 <span>Himanshu Grahacharya</span>. All rights reserved.
        </p>
        <a href="#top" className="footer-back-top" aria-label="Back to top">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </footer>
    </>
  );
};

export default Contact;
