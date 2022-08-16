import EmailForm from "./EmailForm.js";
import "../MyProfolio.css";

// This is for the profolio
function Home1() {
  return (
    <div>
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
            This is my coding journey using React.js. Please check my profolio
            for more details &#128521;
            <br />
            Contact me if you are interested!
          </p>
          <EmailForm />
        </div>
        <div className="mt-12 lg:relative">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            <img src="/UNI.png" alt="This is a unicorn." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1;
