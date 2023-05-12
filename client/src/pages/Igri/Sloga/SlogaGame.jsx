import React, { useState } from "react";
import styles from "./SlogaGame.module.css";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";

import akula from "../../Education/Alphabet/assets/pictures/akula.svg";
import begemot from "../../Education/Alphabet/assets/pictures/begemot.svg";
import bochka from "./assets/bochka.svg";
import buterbrod from "./assets/buterbrod.svg";
import ekskavator from "./assets/ekskavator.svg";
import gitara from "./assets/gitara.svg";
import ioghurt from "./assets/ioghurt.svg";
import palac from "./assets/palac.svg";
import vishnya from "./assets/vishnya.svg";

import error from "./images/error.svg";
import success from "./images/success.svg";

function SlogaGame(props) {
  const levels = [
    {
      word: ["А", "к", "у", "_ _"],
      answers: ["ла", "ба", "га"],
      correctAnswer: "ла",
      image: akula,
      position: 3,
    },
    {
      word: ["Б", "е", "г", "_ _ _", "т"],
      answers: ["емо", "ема", "ева"],
      correctAnswer: "емо",
      image: begemot,
      position: 3,
    },

    {
      word: ["Б", "_ _", "к", "а"],
      answers: ["оч", "от", "ов"],
      correctAnswer: "оч",
      image: bochka,
      position: 1,
    },

    {
      word: ["В", "_ _", "н", "я"],
      answers: ["ич", "иш", "иг"],
      correctAnswer: "иш",
      image: vishnya,
      position: 1,
    },

    {
      word: ["Г", "і", "_ _", "р", "а"],
      answers: ["та", "да", "ва"],
      correctAnswer: "та",
      image: gitara,
      position: 2,
    },

    {
      word: ["Е", "к", "с", "к", "а", "_ _ _", "о", "р"],
      answers: ["вут", "ват", "вот"],
      correctAnswer: "ват",
      image: ekskavator,
      position: 5,
    },

    {
      word: ["П", "_ _", "а", "ц"],
      answers: ["ул", "ал", "іл"],
      correctAnswer: "ал",
      image: palac,
      position: 1,
    },

    {
      word: ["Б", "у", "т", "е", "р", "б", "_ _ _"],
      answers: ["рад", "род", "рід"],
      correctAnswer: "род",
      image: buterbrod,
      position: 6,
    },

    {
      word: ["Й", "о", "г", "у", "_ _"],
      answers: ["рз", "рб", "рт"],
      correctAnswer: "рт",
      image: ioghurt,
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
          to="/education_games"
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

export default SlogaGame;
