import React, { useContext } from 'react';
import { QuizContext } from '../../Helpers/Contexts';
import styles from './EndScreen.module.css'; // Import the CSS module

const EndScreen = () => {
  const { setGameState, score } = useContext(QuizContext);
  return (
    <div className={styles.endScreenContainer}>
      <div className={styles.endscreen}>
        <h1>You scored {score} out of 10!</h1>
        {score < 6 ? (
          <div>You can try again for a better score</div>
        ) : (
          <div>Congratulations!</div>
        )}
        <button className={`${styles.home} ${styles.button}`} onClick={() => { setGameState("home") }}>Go to Home</button>
        <button className={`${styles.restart} ${styles.button}`} onClick={() => { setGameState("quiz") }}>Restart Quiz</button>
      </div>
    </div>
  );
};

export default EndScreen;
