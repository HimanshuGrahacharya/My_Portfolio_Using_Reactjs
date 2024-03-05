import React from "react";
import "../components/Styles.css/about.css";
const About = () => {
  return (
    <section id="about" className="about">
      <div className="img-about"></div>
      <div className="about1">
        <span style={{ fontSize: "30px" }}>3+</span>
        <p style={{ fontSize: 22 }}>Project Complete</p>
      </div>
      <div className="about-me">
        <span>let me introduse my self</span>
        <h1 style={{ color: "rgb(222, 18, 161)", fontSize: "large" }}></h1>

        <br />

        <p style={{ color: "rgb(144, 89, 89)", fontSize: "large" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            necessitatibus ipsum sit ducimus dolor maiores dignissimos ab!
            Dolore omnis modi natus deleniti, officia tempora. Quidem odit
            similique tenetur recusandae repellendus.{" "}
          </p>
        </p>
        <br />
        <div className="btn-box1">
          <a href="#" className="btn">
            Read More!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
