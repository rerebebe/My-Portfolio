import "./MyWork.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import WorkItem from "./WorkItem";

function ProjectsGallery() {
  return (
    <div className="MyWork">
      <div className="NewGallery">
        <WorkItem
          title="Full Stack Project"
          description="This is a completed version for to-do list, I used ReactJS, NodeJS,
            Express, MySQL to build a basic login/register system, It includes
            registering users, inserting data into a DataBase, and reading the
            data to allow a login. Once users register/login in their account,
            they are able to read and create their own data on their the to-do
            list. The user is able to get reminder alert if it's due on the same
            date they log in."
          link="https://frontend-todo-app-2-fb9b407fa646.herokuapp.com/"
        />
      </div>
      <div>
        <a
          href="https://golden-granita-c893d6.netlify.app/"
          target="rel=noopener"
        >
          <div className="NewGalleryImg"></div>
        </a>

        <div>
          <h1>Weather API</h1>
          <p className="paragraph">
            Weather API built with typesctipt.
            <a
              href="https://golden-granita-c893d6.netlify.app/"
              target="rel=noopener"
            >
              <button className="buttonNeonOrange">
                Check this out
                <IoIosArrowRoundForward size="1.5rem" margin="auto" />
              </button>
            </a>
          </p>
        </div>
      </div>

      {/* <div style={{ margin: "40px" }}>
        <div className="ImgWrap">
          <a
            href="https://aquamarine-salamander-5a8798.netlify.app/"
            target="rel=noopener"
          >
            <img
              src="/Screen Shot 2022-09-24 at 2.55.59 PM.png"
              alt="chat app"
              width="600"
              height="500"
            />
          </a>
        </div>
        <div>
          <h1>Chat-App-V2</h1>
          <p className="paragraph">
            Built with socket.io Library in React, I use Node.js and express to
            build an HTTP Socket server and a basic login/register system. I
            also use MongoDB as database, you can add friend, get requests and
            chat in this application and everything will be stored in MongoDB
            database.
            <div className="parallel">
              <a
                href="https://aquamarine-salamander-5a8798.netlify.app/"
                target="rel=noopener"
              >
                <button className="buttonNeonOrange">
                  Check this out{" "}
                  <IoIosArrowRoundForward size="1.5rem" margin="auto" />
                </button>
              </a>
              <a
                href="https://github.com/rerebebe/chat-app-v2"
                target="rel=noopener"
              >
                <span className="Sizechange">
                  <FaGithub size="2rem" margin="auto" />
                </span>
              </a>
            </div>
          </p>
        </div>
      </div> */}

      <div className="NewGallery2">
        <div></div>
        <WorkItem
          title="Chat-App"
          description="This is built with socket.io Library in React, I use Node.js and
            express to build an HTTP Socket server and a basic login/register
            system. I also use MongoDB as database, you can add friend, get
            requests and chat in this application and everything will be stored
            in MongoDB database."
          link="https://aquamarine-salamander-5a8798.netlify.app/"
        />
        {/* <div>
          <h1>Chat-App</h1>
          <p className="paragraph">
            This is built with socket.io Library in React, I use Node.js and
            express to build an HTTP Socket server and a basic login/register
            system. I also use MongoDB as database, you can add friend, get
            requests and chat in this application and everything will be stored
            in MongoDB database.
            <div className="parallel">
              <a
                href="https://aquamarine-salamander-5a8798.netlify.app/"
                target="rel=noopener"
              >
                <button className="buttonNeonNew">
                  Check this out{" "}
                  <IoIosArrowRoundForward size="1.5rem" margin="auto" />
                </button>
              </a>
              <a
                href="https://github.com/rerebebe/chat-app"
                target="rel=noopener"
              >
                <span className="Sizechange">
                  <FaGithub size="2rem" margin="auto" color="white" />
                </span>
              </a>
            </div>
          </p>
        </div> */}
      </div>

      {/* <div
        style={{
          margin: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <div>
          <a
            href="https://62cfd5a7fa2ec3346e186aba--jovial-baklava-72509f.netlify.app"
            target="rel=noopener"
            className="ImgWrapParallel"
          >
            <img
              src="/hotelPage.png"
              alt="hotel page"
              width="600"
              height="500"
              style={{ margin: "auto" }}
            />
          </a>
          <h1>Motel Booking System</h1>
          <p className="paragraph">
            It is still in the process. The page from the link is designed by me
            and is part of the booking system. It was built when I was in an
            intern opportunity at a start up.{" "}
            <a
              href="https://jovial-baklava-72509f.netlify.app/"
              target="rel=noopener"
            >
              <button className="buttonNeonOrange">
                Check this out{" "}
                <IoIosArrowRoundForward size="1.5rem" margin="auto" />
              </button>
            </a>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <a
            href="/my-work/Quiz"
            target="rel=noopener"
            className="ImgWrapParallel"
          >
            <img
              src="/Quizzie.png"
              alt="Quiz"
              width="600"
              height="500"
              style={{ margin: "auto" }}
            />
          </a>
          <h1>Quiz App</h1>
          <p className="paragraph">
            This is a React project styled with pure CSS and part of
            TailwindCSS, it was another practice of React and in the end you can
            check what was your answer of each questions. And it will give you
            comments in the end based on your score of the quiz.
            <a href="/my-work/Quiz" target="rel=noopener">
              <button className="buttonNeonOrange">
                Check this out
                <IoIosArrowRoundForward size="1.5rem" margin="auto" />
              </button>
            </a>
          </p>
        </div>
      </div> */}

      <div>
        <div>
          <h1>Quiz App</h1>
          <p className="paragraph">
            This is a React project styled with pure CSS and part of
            TailwindCSS, it was another practice of React and in the end you can
            check what was your answer of each questions. And it will give you
            comments in the end based on your score of the quiz.
            <a href="/my-work/Quiz" target="rel=noopener">
              <button className="buttonNeonOrange">
                Check this out
                <IoIosArrowRoundForward size="1.5rem" margin="auto" />
              </button>
            </a>
          </p>
        </div>
        <a href="/my-work/Quiz" target="rel=noopener">
          <div className="NewGalleryImgBottom"></div>
        </a>
      </div>
    </div>
  );
}

export default ProjectsGallery;
