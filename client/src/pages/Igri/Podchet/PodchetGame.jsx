import React, { useState } from "react";
import styles from "./PodchetGame.module.css";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";

import apples from "./images/apples.svg";
import fishes from "./images/fishes.svg";
import house from "./images/house.svg";
import osminog from "./images/osminog.svg";
import level_pencil from "./images/level_pencil.svg";

import blue_pencil from "./images/blue_pencil.svg";
import red_pencil from "./images/red_pencil.svg";

import error from "./images/error.svg";
import success from "./images/success.svg";

function PodchetGame(props) {
  const levels = [
    {
      count: 8,
      answers: [2, 6, 8, 5],
      correctAnswer: 8,
      image: apples,
      textUp: "Порахуй яблука на картинці",
    },

    {
      count: 7,
      answers: [8, 6, 7, 3],
      correctAnswer: 7,
      image: fishes,
      textUp: "Скільки зелених рибок",
    },

    {
      count: 5,
      answers: [5, 3, 6, 4],
      correctAnswer: 5,
      image: house,
      textUp: "Порахуй скільки поверхів у будівлі",
    },

    {
      count: 8,
      answers: [5, 8, 12, 9],
      correctAnswer: 8,
      image: osminog,
      textUp: "Скільки кінцівок у восьминога",
    },

    {
      count: 2,
      answers: [
        { img: red_pencil, value: 1 },
        { img: blue_pencil, value: 2 },
      ],
      correctAnswer: 2,
      image: level_pencil,
      textUp: "Яких олівців більше?",
    },
  ];

  const [answer, setAnswer] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [message, setMessage] = useState("");
  const [resultImage, setResultImage] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const handleAnswerClick = (answer) => {
    setAnswer(answer);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentCorrectAnswer = levels[currentLevel].correctAnswer;
    if (answer === currentCorrectAnswer) {
      setMessage("Правильно");
      setResultImage(success);

      if (currentLevel < levels.length - 1) {
        setTimeout(() => {
          setCurrentLevel(currentLevel + 1);
          setAnswer(null);
          setMessage("");
          setResultImage(null);
        }, 1500);
      } else {
        setTimeout(() => {
          setGameOver(true);
        }, 1500);
      }
    } else {
      setMessage("Спробуйте ще раз");
      setResultImage(error);
    }
  };

  const currentAnswers = levels[currentLevel].answers;
  const currentImage = levels[currentLevel].image;
  const currentTextUp = levels[currentLevel].textUp;

  if (gameOver) {
    return (
      <div className={styles.gameOver}>
        <div>
          <p>Вітаємо! Ви закінчили гру.</p>
        </div>
        <div className={styles.confettiContainer}>
          <Confetti gravity={0.05} />
        </div>
        <Link
          className={`${styles.gameOver_button} ${styles.no_decoration}`}
          to="/cards_content/1"
        >
          Закрити гру
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.game}>
      <div className={styles.textContainer}>
        <span className={styles.text_up}>{currentTextUp}</span>
      </div>
      <div className={styles.gameContent}>
        <div className={styles.imageContainer}>
          <img src={currentImage} alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.answers}>
            {currentAnswers.map((answerOption, index) =>
              currentLevel !== 4 ? (
                <button
                  key={index}
                  className={`${styles.letterButton} ${
                    answerOption === answer ? styles.selected : ""
                  }`}
                  onClick={() => handleAnswerClick(answerOption)}
                >
                  {answerOption}
                </button>
              ) : (
                <button
                  key={index}
                  className={`${styles.imageButton} ${
                    answerOption.value === answer ? styles.selected : ""
                  }`}
                  onClick={() => handleAnswerClick(answerOption.value)}
                >
                  <img
                    className={styles.image_answer}
                    src={answerOption.img}
                    alt=""
                  />
                </button>
              )
            )}
          </div>
        </form>
      </div>
      <div className={styles.feedbackContainer}>
        {message && (
          <div className={styles.message}>
            <img className={styles.resultImage} src={resultImage} alt="" />
            <span>{message}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default PodchetGame;
