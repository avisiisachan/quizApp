import React, {useContext} from 'react'
import './Home.styles.css';
import { QuizContext } from '../../Helpers/Contexts';

const Home = () => {
  const {gameState, setGameState}= useContext(QuizContext);
  return (
    <div className='homeScreen'>
      <img className='rocket' src="./images/rocket.png" alt="" />
      <h1 className='headingtext'>Time to Triviaa!!</h1>
      <img src="./images/homePage.png" alt="" />  
      <button className='starButton' onClick={()=> {setGameState("quiz")}}>Start Quiz</button>
    </div>
  )
}

export default Home
