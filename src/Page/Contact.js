import React from "react";
import "../components/Styles.css/contact.css";
const contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className="main-text">
          <span >ask me question</span>
          <h2
            style={{ color: "aqua", fontSize: "xx-large", textAlign: "canter" }}
          >
            Contact Me
          </h2>
        </div>
        <form action="#">
          <input type="text" placeholder="Your Name" />
          <br />

          <input type="text" placeholder="Your Email" />
          <br />
          <input type="text" placeholder="Your Address" />
          <br />
          <input type="number" placeholder="Phone Number" />
          <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <br />
          <div className="btn-box1 formBtn">
            <button type="submit" className="btn">
              Semd Message
            </button>
          </div>
        </form>
      </section>

      <footer>
        <p>Copyright &copy; 2023 by Himanshu || All Right Reserved.</p>
        <a href="#home">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </footer>
    </>
  );
};

export default contact;
