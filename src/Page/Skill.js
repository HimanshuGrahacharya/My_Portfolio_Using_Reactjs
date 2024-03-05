import React from "react";
import "../components/Styles.css/skill.css";
const Skill = () => {
  return (
    <div className="container">
      {/* Main Heading Start   */}
      <div className="main-title">
        <h1>My Skills</h1>
        <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum amet quam,  odit magnam maiores cupiditate nostrum aut molestias incidunt itaque repellat repudiandae ullam!</p>
      </div>
      {/* main heading end */}
      <div className="row">
        {/* *****Left section starts here****** */}
        <section className="col">
          <div className="sub-title">
            <h2>Programming Skills</h2>
          </div>
          <div className="skills-container">
            <div className="skill">
              <div className="subject">HTML</div>
              <div className="progress-bar" value="94%">
                <div
                  className="progress-line"
                  style={{ maxWidth: "94%" }}
                ></div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">CSS</div>
              <div className="progress-bar" value="94%">
                <div
                  className="progress-line"
                  style={{ maxWidth: "94%" }}
                ></div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">JAVA SCRIPT</div>
              <div className="progress-bar" value="90%">
                <div
                  className="progress-line"
                  style={{ maxWidth: "90%" }}
                ></div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">JAVA</div>
              <div className="progress-bar" value="91%">
                <div
                  className="progress-line"
                  style={{ maxWidth: "91%" }}
                ></div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">SQL</div>
              <div className="progress-bar" value="94%">
                <div
                  className="progress-line"
                  style={{ maxWidth: "94%" }}
                ></div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">ADVANCED JAVA</div>
              <div className="progress-bar" value="89%">
                <div
                  className="progress-line"
                  style={{ maxWidth: "89%" }}
                ></div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">REACT JS</div>
              <div className="progress-bar" value="94%">
                <div
                  className="progress-line"
                  style={{ maxWidth: "94%" }}
                ></div>
              </div>
            </div>
          </div>
        </section>
        {/* right section */}

        <section className="col">
          <div className="sub-title">
            <h2>Designing Skills</h2>
          </div>
          <div className="skills-container">
            <div className="skill">
              <div className="subject">Photoshop</div>
              <div className="progress-bar" value="82%">
                <div
                  className="progress-line"
                  style={{ maxWidth: "82%" }}
                ></div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">VideoEditing</div>
              <div className="progress-bar" value="90%">
                <div
                  className="progress-line"
                  style={{ maxWidth: "90%" }}
                ></div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">Figma</div>
              <div className="progress-bar" value="60%">
                <div
                  className="progress-line"
                  style={{ maxWidth: "60%" }}
                ></div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">Responsive Design</div>
              <div className="progress-bar" value="71%">
                <div
                  className="progress-line"
                  style={{ maxWidth: "71%" }}
                ></div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">Color Design</div>
              <div className="progress-bar" value="74%">
                <div
                  className="progress-line"
                  style={{ maxWidth: "74%" }}
                ></div>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skill;
