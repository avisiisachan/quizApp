import React, {useState, useContext} from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';
import EndScreen from './Components/EndScreen/EndScreen';
import { QuizContext } from './Helpers/Contexts';


function App() {
  const [gameState, setGameState]=useState("home");
  const [score, setScore]=useState(0);
  return (
    <div className="App">
      <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
      {gameState==="home" && <Home/>}
      {gameState==="quiz" && <Quiz/>}
      {gameState==="endscreen" && <EndScreen/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
