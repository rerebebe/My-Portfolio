import { useContext } from "react";

import { QuizContext } from "../Helpers/Contexts";
import "../App.css";

function MainMenu() {
  //傳到這邊unpack
  const { setGameState } = useContext(QuizContext);
  return (
    <div className="Menu">
      <div className="mb-10">
        <h1 className="tracking-tight text-white text-5xl font-bold">
          JavaScript Pop Quiz!
        </h1>
        <h4 className="tracking-tight flex justify-center gap-y-3 text-3xl sm:text-2xl lg:mt-16 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-200">
          Let's test your knowledge level :)
        </h4>
      </div>
      <button
        className="gap-y-3 w-30 h-10 rounded-md shadow bg-gradient-to-r from-indigo-400 to-pink-300 text-white font-bold bg-gradient-to-r hover:from-indigo-300 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default MainMenu;
