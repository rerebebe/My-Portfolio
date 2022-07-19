import { useState, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBanks";

function Quiz() {
  const { score, setScore, setGameState, answer, setAnswer } =
    useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0); //0 is first object in array
  const [optionChosen, setOptionChosen] = useState("");

  function chooseOption(option) {
    setOptionChosen(option);
  }

  // function nextQuestion() {
  //   if (Questions[currentQuestion].answer == optionChosen) {
  //     setScore(score + 1);
  //   }
  //   if (currentQuestion == Questions.length - 1) {
  //     finishQuiz();
  //   }
  //   alert(optionChosen);
  //   setCurrentQuestion(currentQuestion + 1);
  // }
  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
      setOptionChosen("");
    }
    // alert(score);
    setCurrentQuestion(currentQuestion + 1);
    setAnswer(function (prevData) {
      return [
        ...prevData,
        { q: Questions[currentQuestion].prompt, a: optionChosen },
      ];
    });
  };

  // function prevQuestion() {
  //   if (Questions[currentQuestion].answer === optionChosen) {
  //     setScore(score - 1); // 原本的score + 1
  //   }
  //   setCurrentQuestion(currentQuestion - 1);
  // }

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setAnswer(function (prevData) {
      return [
        ...prevData,
        { q: Questions[currentQuestion].prompt, a: optionChosen },
      ];
    });
    setGameState("endScreen");
  };

  // function finishQuiz() {
  //   if (Questions[currentQuestion].answer == optionChosen) {
  //     setScore(score + 1); // 原本的score + 1
  //   }
  //   setGameState("endScreen");
  // }

  return (
    <div className="Quiz">
      <h1 className="Title">{Questions[currentQuestion].prompt}</h1>
      <div className="options">
        <button
          id="A"
          className="w-30 h-10 rounded-md shadow bg-gradient-to-r from-indigo-400 to-pink-300 text-white font-bold bg-gradient-to-r hover:from-indigo-300 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
          onClick={() => {
            chooseOption(Questions[currentQuestion].optionA);
          }}
        >
          A. {Questions[currentQuestion].optionA}
        </button>
        <button
          id="B"
          className="w-30 h-10 rounded-md shadow bg-gradient-to-r from-indigo-400 to-pink-300 text-white font-bold bg-gradient-to-r hover:from-indigo-300 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
          onClick={() => {
            chooseOption(Questions[currentQuestion].optionB);
          }}
        >
          B. {Questions[currentQuestion].optionB}
        </button>
        <button
          id="C"
          className="w-30 h-10 rounded-md shadow bg-gradient-to-r from-indigo-400 to-pink-300 text-white font-bold bg-gradient-to-r hover:from-indigo-300 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
          onClick={() => {
            chooseOption(Questions[currentQuestion].optionC);
          }}
        >
          C. {Questions[currentQuestion].optionC}
        </button>
        <button
          id="D"
          className="w-30 h-10 rounded-md shadow bg-gradient-to-r from-indigo-400 to-pink-300 text-white font-bold bg-gradient-to-r hover:from-indigo-300 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
          onClick={() => {
            chooseOption(Questions[currentQuestion].optionD);
          }}
        >
          D. {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion === Questions.length - 1 ? (
        <button
          className="w-20 h-6 rounded-md shadow bg-gradient-to-r from-blue-400 to-green-300 text-white font-bold bg-gradient-to-r hover:from-indigo-300 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
          onClick={finishQuiz}
          id="nextQuestion"
        >
          Finish Quiz
        </button>
      ) : (
        <button
          onClick={nextQuestion}
          id="nextQuestion"
          disabled={optionChosen ? false : true}
          className="w-20 h-6 rounded-md shadow bg-gradient-to-r from-blue-400 to-green-300 text-white font-bold bg-gradient-to-r hover:from-indigo-300 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
        >
          Next Question
        </button>
      )}
      {/* <div>{JSON.stringify(answer)}</div> */}
    </div>
  );
}

export default Quiz;
