import React, {useState, useContext} from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import { QuizContext } from './Helpers/Contexts';


function App() {
  const [gameState, setGameState]=useState("home");
  return (
    <div className="App">
      <QuizContext.Provider value={{gameState, setGameState}}>
      {gameState==="home" && <Home/>}
      {gameState==="quiz" && <Quiz/>}
      {gameState==="endscreen" && <EndScreen/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
