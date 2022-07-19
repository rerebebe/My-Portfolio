import EmailForm from "./EmailForm.js";
import "../MyProfolio.css";

// This is for the profolio
function Home1() {
  return (
    <div>
      <div className="About">
        <div className="TitleWithoutPic">
          <h1 className="HeaderText">
            Frond End Developer
            <br />
            <span>Regina Liu</span>
          </h1>
          <p className="text-white text-base text-gray-300 sm:mt-5 mt-3">
            This is my coding journey, using React.js, some of the projects I
            styled them with CSS and some of them are styled with TailwindCSS,
            please see the introduction in each of my work. Contact me if you
            are interested!
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
