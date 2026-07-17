import { useState, useEffect } from 'react';
import EmailForm from './EmailForm.js';
import '../MyProfolio.css';

// This is for the profolio
function Home1() {
  const [current, setCurrent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCurrent(!current);
    }, 6000);
  });
  return (
    <div className="App">
      <div className="background">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>
      <div className="About">
        <div className="TitleWithoutPic">
          <h1 className="HeaderText">
            Frond End Developer
            <br />
            <span>Regina Liu</span>
          </h1>
          <p className="text-3xl">
            Frontend Developer building with React, TypeScript, and Next.js.
            Lately I've been expanding into data pipelines and AI-assisted
            automation — I like turning messy problems into clean, maintainable
            solutions, wherever they show up. Check out my work below, and get
            in touch if something resonates! Please check my portfolio for more
            details &#128521;
            <br />
            Contact me if you are interested!
          </p>
          <EmailForm />
        </div>
        <div className="lg:relative">
          <div>
            <img
              src={current ? '/IMG_2445.png' : '/IMG_3446.png'}
              alt="This is a Memoji."
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1;
