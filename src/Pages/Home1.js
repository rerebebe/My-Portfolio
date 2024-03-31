import { useState, useEffect } from "react";
import EmailForm from "./EmailForm.js";
import "../MyProfolio.css";

// This is for the profolio
function Home1() {
  const [current, setCurrent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCurrent(!current);
    }, 1000);
  });
  return (
    <div className="App">
      <div className="background">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
      </div>
      <div className="About">
        <div className="TitleWithoutPic">
          <h1 className="HeaderText">
            Frond End Developer
            <br />
            <span>Regina Liu</span>
          </h1>
          <p className="text-3xl">
            I am a Software Engineer working with React and JavaScript. Check
            out my work and get in touch! Please check my portfolio for more
            details &#128521;
            <br />
            Contact me if you are interested!
          </p>
          <EmailForm />
        </div>
        <div className="lg:relative">
          <div>
            <img
              src={current ? "/IMG_2445.png" : "/IMG_3446.png"}
              alt="This is a Memoji."
              width="700"
              height="700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1;
