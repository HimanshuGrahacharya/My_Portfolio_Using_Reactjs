import React from "react";
import "../components/Styles.css/project.css";
import "../components/Styles.css/about.css";
const Project = () => {
  return (
    <section id="project" className="project">
      <h1 className="pro-header">
        Proj<spen style={{ color: "yellow" }}>ect</spen>
      </h1>

      <div className="all-project">
        <div className="proj123">
          <div className="p1">
            {/* <img src="#" alt="image" /> */}
          </div>
          <div className="p2">
            {/* <img src="./image/place1.png" /> */}
            {/* <img src="#" /> */}
          </div>
          <div className="p3">
            <a href="./project/marriage.com/CSS/marriage.html">
              {/* <img src="#" /> */}
            </a>
          </div>
        </div>
        <div className="proj456">
          <div className="p4">
            <a href="./project/Youtube.com/Html and css/index.html">
              {/* <img src="./image/youtube.png" /> */}
            </a>
          </div>
          <div className="p5">
            <a href="./project/Surprise.com/Html/index.html">
              {" "}
              {/* <img src="./image/surprise.png" /> */}
            </a>
          </div>
          <div className="p6">
            <a href="./project/RoyalBrothers.com/index.html">
              {/* <img src="./image/royal.png" /> */}
            </a>
          </div>
        </div>
        <div className="btn-box1">
          <a href="#" className="btn">
            Read More!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
