import "./MyWork.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GoMarkGithub } from "react-icons/go";

function ProjectsGallery() {
  return (
    <div className="MyWork">
      <div>
        <div>
          <h1>Full Stack Project</h1>
          <p className="paragraph">
            This is a completed version for to-do list, I used ReactJS, NodeJS,
            Express, MySQL to build a basic login/register system, It includes
            registering users, inserting data into a DataBase, and reading the
            data to allow a login. Once users register/login in their account,
            they are able to read and create their own data on their the to-do
            list. The user is able to get reminder alert if it's due on the same
            date they log in.
            <div className="parallel">
              <a
                href="https://todo-frontend-mysql.herokuapp.com/"
                target="rel=noopener"
              >
                <button className="buttonNeonOrange">
                  Check this out
                  <IoIosArrowRoundForward size="1.5rem" margin="auto" />
                </button>
              </a>
              <a
                href="https://github.com/rerebebe/new-mysql-0807"
                target="rel=noopener"
              >
                <span className="Sizechange">
                  <GoMarkGithub size="2rem" margin="auto" />
                </span>
              </a>
            </div>
          </p>
        </div>
        <div className="ImgWrap">
          <img
            src="/MySQL.png"
            alt="MySQL login ToDoList"
            width="640"
            height="420"
          />
        </div>
      </div>

      <div className="div2n4">
        <div className="ImgWrap">
          <img src="/hotelPage.png" alt="hotel page" width="600" height="500" />
        </div>
        <div>
          <h1>Motel LandingPage(In process...)</h1>
          <p className="paragraph">
            This project is styled with pure CSS,and using react-router-dom to
            help navigate through the website . It was a favor for a friend
            helping them design the Landing Page for their family business, the
            functionality wasn't completely done since there's lots of
            discussion still in the progress.
            <a href="https://62cfd5a7fa2ec3346e186aba--jovial-baklava-72509f.netlify.app">
              <button className="buttonNeonOrange">
                Check this out{" "}
                <IoIosArrowRoundForward size="1.5rem" margin="auto" />
              </button>
            </a>
          </p>
        </div>
      </div>
      <div>
        <div>
          <h1>Quiz App</h1>
          <p className="paragraph">
            This is a React project styled with pure CSS and part of
            TailwindCSS, it was another practice of React and in the end you can
            check what was your answer of each questions. And it will give you
            comments in the end based on your score of the quiz.
            <a href="/my-work/Quiz">
              <button className="buttonNeonYellow">
                Check this out
                <IoIosArrowRoundForward size="1.5rem" margin="auto" />
              </button>
            </a>
          </p>
        </div>
        <div className="ImgWrap">
          <img src="/Quizzie.png" alt="Quiz" width="600" height="500" />
        </div>
      </div>
      <div className="div2n4">
        <div className="ImgWrap">
          <img
            src="/Shot-Link API.png"
            alt="link shortner API"
            width="600"
            height="500"
          />
        </div>
        <div>
          <h1>Project 4</h1>
          <p className="paragraph">
            This is a practive project of API integration that built with React,
            Tailwind, and shrtcode API.
            <a href="/my-work/shortner">
              <button className="buttonNeonOrange">
                Check this out
                <IoIosArrowRoundForward size="1.5rem" margin="auto" />
              </button>
            </a>
          </p>
        </div>
      </div>
      <div>
        <div>
          <h1>To-Do List</h1>
          <p className="paragraph">
            This is a React project styled with TailwindCSS, it includes the
            basic function of adding and editing, other than that it has another
            section for finished tasks, and it lets you examine what items you
            have been done before and you can also delete it afterwards! I used
            json-server as a mock API to store the data for the to-do list. The
            json-server is being deployed on Heroku.
            <a href="/my-work/to-do">
              <button className="buttonNeonYellow">
                Check this out
                <IoIosArrowRoundForward size="1.5rem" margin="auto" />
              </button>
            </a>
          </p>
        </div>
        <div className="ImgWrap">
          <img src="/to-do.png" alt="To Do List" width="600" height="500" />
        </div>
      </div>
    </div>
  );
}

export default ProjectsGallery;
