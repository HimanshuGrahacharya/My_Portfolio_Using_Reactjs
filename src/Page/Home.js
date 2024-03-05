import React from "react";
import "../components/Styles.css/home.css";
import { useNavigate } from "react-router";

const Home = () => {
  let data = useNavigate();
  let change = () => {
    data("/about");
  };

  //scroll by work

  // let words = document.querySelectorAll(".word");
  // words.forEach(word => {
  //   let letters = word.textContent.split("");
  //   word.textContent = "";
  //   letters.forEach(letter => {
  //     let span = document.createElement("span");
  //     span.textContent = letter;
  //     span.className = "letter";
  //     word.append(span);
  //   });
  // });

  // let currentWordIndex = 0;
  // let maxWordIndex = words.length - 1;
  // words[currentWordIndex].style.opacity = "1";
  // let changeText = () => {
  //   let currentWord = words[currentWordIndex];
  //   let nextWord =
  //     currentWordIndex === maxWordIndex
  //       ? words[0]
  //       : words[currentWordIndex + 1];

  //   Array.from(currentWord.children).forEach((letter, i) => {
  //     setTimeout(() => {
  //       letter.className = "letter out";
  //     }, i * 80);
  //   });
  //   nextWord.style.opacity = "1";
  //   Array.from(nextWord.children).forEach((letter, i) => {
  //     letter.className = "letter behind";
  //     setTimeout(() => {
  //       letter.className = "letter in";
  //     }, 340 + i * 80);
  //   });
  //   currentWordIndex =
  //     currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
  // };

  // changeText();
  // setInterval(changeText, 3000);

  return (
    <div className="home_page">
      <section id="home" className="home">
        <div className="home-contentscroll-scale">
          <h1>Hi! i'm Himanshu Grahacharya</h1>
          <div className="change-text">
            <h3>
              And I'm
              <span>Web Developer</span>
            </h3>
            <br />

            <button
              onClick={change}
              className="btn"
              style={{
                height: "30px",
                borderRadius: "10px",
                background: "cadetblue",
                border: "white",
                boxShadow: "3px 3px 3px ",
              }}
            >
              About Page
            </button>

            <h3>
              <span className="word">Web&nbsp;Designer</span>
              <span className="word">Student</span>
              <span className="word">Youtuber</span>
              <span className="word">Engineer</span>
              <span className="word">Traveller</span>
              <span className="word">Frontend&nbsp; Designer</span>
              <span className="word">Video &nbsp;editer</span>
            </h3>
          </div>

          <div className="info-box">
            <div className="email-info">
              <h5>
                Email :
                <span style={{ color: "white" }}>
                  himanshugrahachaya62@gmail.com
                </span>
              </h5>
            </div>
          </div>

          <div className="btn-box">
            <a href="image/final.pdf" className="btn">
              Download CV
            </a>

            <a href="https://himanshupofo.netlify.app/" className="btn">
              Hire Me Now
            </a>
          </div>

          <div className="social-icons">
            <a href="https://www.facebook.com/">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://www.twitter.com/">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://www.youtube.com/">
              <i className="bx bxl-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="img-about"></div>
        {/* <div className="home-image">
    <div className="img-box">
     
       
    </div>
   
</div> */}
      </section>
    </div>
  );
};

export default Home;
