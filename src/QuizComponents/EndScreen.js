import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBanks";

function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  function restartQuiz() {
    setScore(0);
    setGameState("menu");
  }
  function checkYourAnswer() {
    setGameState("checkyouranswer");
  }

  function result() {
    if (Questions.length === score) {
      return "Congrats!!!You got everything right!!!";
    } else if (Questions.length / 2 < score) {
      return "Not Bad!! Let's check the wrong answers and learn from mistakes :)";
    } else {
      return "Sorry...you gotta study more... :(";
    }
  }
  return (
    <div className="EndScreen">
      <h1 className="mb-2 text-5xl font-bold text-white ">Done!</h1>
      <p className="ml-2 px-3 mb-5 text-2xl text-pink-200">
        {result()}
        {/* {Questions.length / 2 < score
          ? "you know me so well :)"
          : "you gotta pay more attention to your girlfriend..."} */}
      </p>
      <h3 className="text-3xl font-bold text-white text-base text-gray-300 py-9 ">
        correct answer:{score}/Total Question:{Questions.length}
      </h3>

      <button
        onClick={restartQuiz}
        className="mt-15 w-30 h-10 rounded-md shadow bg-gradient-to-r from-indigo-400 to-pink-300 text-white font-bold bg-gradient-to-r hover:from-indigo-300 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
      >
        Restart the Quiz
      </button>
      <button
        onClick={checkYourAnswer}
        className="w-20 h-6 rounded-md shadow bg-gradient-to-r from-blue-400 to-green-300 text-white font-bold bg-gradient-to-r hover:from-indigo-300 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
      >
        Check your answer
      </button>
    </div>
  );
}

export default EndScreen;
