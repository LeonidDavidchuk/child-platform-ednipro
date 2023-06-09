import React, { useState } from "react";
import styles from "./Game.module.css";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";

import akula from "../../Education/Alphabet/assets/pictures/akula.svg";
import begemot from "../../Education/Alphabet/assets/pictures/begemot.svg";
import bochka from "./assets/bochka.svg";
import dveri from "./assets/dveri.svg";
import enot from "./assets/enot.svg";
import gitara from "./assets/gitara.svg";
import gudzik from "./assets/gudzik.svg";
import zhiraf from "./assets/zhiraf.svg";

import error from "./images/error.svg";
import success from "./images/success.svg";

function Game(props) {
  const levels = [
    {
      word: ["А", "к", "у", "_", "а"],
      answers: ["л", "б", "я"],
      correctAnswer: "л",
      image: akula,
      position: 3,
    },
    {
      word: ["Б", "е", "г", "_", "м", "о", "т"],
      answers: ["а", "е", "в"],
      correctAnswer: "е",
      image: begemot,
      position: 3,
    },

    {
      word: ["Б", "о", "_", "к", "а"],
      answers: ["г", "т", "ч"],
      correctAnswer: "ч",
      image: bochka,
      position: 2,
    },

    {
      word: ["Г", "і", "т", "_", "р", "а"],
      answers: ["а", "в", "и"],
      correctAnswer: "а",
      image: gitara,
      position: 3,
    },

    {
      word: ["Ґ", "_", "д", "з", "и", "к"],
      answers: ["я", "б", "у"],
      correctAnswer: "у",
      image: gudzik,
      position: 1,
    },

    {
      word: ["_", "в", "е", "р", "і"],
      answers: ["Д", "Я", "В"],
      correctAnswer: "Д",
      image: dveri,
      position: 0,
    },

    {
      word: ["Є", "_", "о", "т"],
      answers: ["н", "в", "а"],
      correctAnswer: "н",
      image: enot,
      position: 1,
    },

    {
      word: ["Ж", "и", "р", "а", "_"],
      answers: ["а", "л", "ф"],
      correctAnswer: "ф",
      image: zhiraf,
      position: 4,
    },
  ];

  const [answer, setAnswer] = useState("");
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [message, setMessage] = useState("");
  const [resultImage, setResultImage] = useState(null);
  const [currentWord, setCurrentWord] = useState(levels[currentLevel].word);
  const [gameOver, setGameOver] = useState(false);

  const handleAnswerClick = (answer) => {
    const newWord = [...currentWord];
    newWord[levels[currentLevel].position] = answer;
    setCurrentWord(newWord);
    setAnswer(answer);
    setSelectedLetter(answer);
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
          setCurrentWord(levels[currentLevel + 1].word);
          setAnswer("");
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
      <div className={styles.text_up}>
        <span>Встав пропущену букву</span>
      </div>
      <div className={styles.wordContainer}>
        <div className={styles.big_word}>
          {currentWord.map((letter, index) => {
            if (letter === "_") {
              return (
                <span key={index} className={styles.missingLetter}>
                  _
                </span>
              );
            } else {
              return <span key={index}>{letter}</span>;
            }
          })}
        </div>
        <div className={styles.imageContainer}>
          <img src={currentImage} alt="" />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.answers}>
          {currentAnswers.map((answer, index) => (
            <button
              key={index}
              className={`${styles.letterButton} ${
                answer === selectedLetter ? styles.selected_letter : ""
              }`}
              onClick={() => handleAnswerClick(answer)}
            >
              {answer}
            </button>
          ))}
        </div>

        {resultImage && (
          <div className={styles.resultImageContainer}>
            <img src={resultImage} alt="" />
          </div>
        )}

        <div className={styles.messageContainer}>
          <div className={styles.message}>{message}</div>
        </div>
      </form>
    </div>
  );
}

export default Game;
