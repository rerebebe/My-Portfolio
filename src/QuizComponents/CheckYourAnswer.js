import { useState, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBanks";

function CheckYourAnswer() {
  const { score, answer } = useContext(QuizContext);
  const [answer0, setAnswer0] = useState("");

  return (
    <div>
      <h1 className="mt-2">Quiz Result </h1>
      <h3>
        Score: {score} of {Questions.length}
      </h3>
      <ul className="mt-4 ">
        {answer.map((answer, i) => (
          <li className="mb-6 border-2 p-4">
            <p>
              <strong>{answer.q}</strong>
            </p>
            <p>
              {answer.a === Questions[i].answer ? (
                <div>Correct Answer: {Questions[i].answer}</div>
              ) : (
                <div>
                  <p>Wrong Answer: {answer.a}</p>
                  <p>Correct Answer: {Questions[i].answer}</p>
                </div>
              )}
            </p>
            {/* <p
              className={
                answer.a === Questions[i].answer
                  ? "has-background-success has-text-white p-2"
                  : "has-background-danger has-text-white p-2"
              }
            >
              Your answer: {answer.a}
            </p>
            {answer.a !== Questions[i].answer && (
              <p className="has-background-link has-text-white p-2">
                Correct answer: {Questions[i].answer}
              </p>
            )} */}
          </li>
        ))}
      </ul>
      {/* <p>{JSON.stringify(answer)}</p> */}
    </div>
  );
}

export default CheckYourAnswer;
