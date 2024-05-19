import React, { useState, useContext } from 'react';
import { Questions } from '../../Helpers/QuestionBank';
import { QuizContext } from '../../Helpers/Contexts';
import './Quiz.styles.css';

const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [selectOption, setSelectOption] = useState("");

  const { score, setScore, setGameState } = useContext(QuizContext);

  const nextQuestion = () => {
    if (Questions[currQuestion].answer === selectOption) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
    setSelectOption(""); // Reset the selected option for the next question
  };

  const submitQuiz = () => {
    if (Questions[currQuestion].answer === selectOption) {
      setScore(score + 1);
    }
    setGameState("endscreen");
  };

  return (
    <div className="quiz">
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button
          onClick={() => setSelectOption("optionA")}
          className={selectOption === "optionA" ? "selected" : ""}
        >
          {Questions[currQuestion].optionA}
        </button>
        <button
          onClick={() => setSelectOption("optionB")}
          className={selectOption === "optionB" ? "selected" : ""}
        >
          {Questions[currQuestion].optionB}
        </button>
        <button
          onClick={() => setSelectOption("optionC")}
          className={selectOption === "optionC" ? "selected" : ""}
        >
          {Questions[currQuestion].optionC}
        </button>
      </div>
      {currQuestion === Questions.length - 1 ? (
        <button onClick={submitQuiz}>Submit Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
};

export default Quiz;
