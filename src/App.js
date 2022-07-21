import { useState } from "react";
import MainMenu from "./QuizComponents/MainMenu";
import Quiz from "./QuizComponents/Quiz";
import EndScreen from "./QuizComponents/EndScreen";
import CheckYourAnswer from "./QuizComponents/CheckYourAnswer";
import "./App.css";
import { QuizContext } from "./Helpers/Contexts";

function App() {
  // 3 states：menu->playing->end(Global State)
  const [gameState, setGameState] = useState("menu");
  // we have to disaply the final score here so make it global State
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState([]);

  return (
    <div className="App">
      <h1 className="text-6xl mt-10 font-extrabold sm:text-6xl sm:mt-10 lg:mt-16 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-400">
        Quizzzzzz
      </h1>
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore, answer, setAnswer }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
        {gameState === "checkyouranswer" && <CheckYourAnswer />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
