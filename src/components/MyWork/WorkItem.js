import "./MyWork.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const WorkItem = ({ title, description, link }) => {
  return (
    <>
      <section>
        <h1>{title}</h1>
        <p className="paragraph">{description}</p>
        <div className="parallel">
          <a href={link} target="rel=noopener">
            <button className="buttonNeonNew">
              Check this out
              <IoIosArrowRoundForward size="1.5rem" margin="auto" />
            </button>
          </a>
          <a
            href="https://github.com/rerebebe/new-mysql-0807"
            target="rel=noopener"
          >
            <span className="Sizechange">
              <FaGithub size="2rem" margin="auto" color="white" />
            </span>
          </a>
        </div>
      </section>
    </>
  );
};

export default WorkItem;
