import React, { useState, useEffect } from "react";
import styles from "./FiguriGame.module.css";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";

import krug from "./assets/krug.svg";
import kvadrat from "./assets/kvadrat.svg";
import oval from "./assets/oval.svg";
import pryamougolnik from "./assets/pryamougolnik.svg";
import romb from "./assets/romb.svg";
import treugolnik from "./assets/treugolnik.svg";
import zvezda from "./assets/zvezda.svg";

import success from "./images/success.svg";
import error from "./images/error.svg";

function FiguriGame(props) {
  const allFigures = [
    { name: "Коло", image: krug },
    { name: "Квадрат", image: kvadrat },
    { name: "Овал", image: oval },
    { name: "Прямокутник", image: pryamougolnik },
    { name: "Ромб", image: romb },
    { name: "Трикутник", image: treugolnik },
    { name: "Зірка", image: zvezda },
  ];

  const getLevelFigures = () => {
    const shuffledFigures = allFigures.sort(() => Math.random() - 0.5);
    return shuffledFigures.slice(0, 3);
  };

  const [selectedFigureName, setSelectedFigureName] = useState("");
  const [level, setLevel] = useState(1);
  const [figures, setFigures] = useState(getLevelFigures());
  const [gameOver, setGameOver] = useState(false);
  const [correctFigureName, setCorrectFigureName] = useState(
    figures[Math.floor(Math.random() * figures.length)].name
  );
  const [notification, setNotification] = useState(null);
  const [notificationText, setNotificationText] = useState(null);

  useEffect(() => {
    const getLevelFigures = () => {
      const shuffledFigures = allFigures.sort(() => Math.random() - 0.5);
      return shuffledFigures.slice(0, 3);
    };

    const newFigures = getLevelFigures();
    setFigures(newFigures);
    setCorrectFigureName(
      newFigures[Math.floor(Math.random() * newFigures.length)].name
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  const handleFigureClick = (figureName) => {
    setSelectedFigureName(figureName);
    if (figureName === correctFigureName) {
      setNotification(success);
      setNotificationText("Правильно");

      setTimeout(() => {
        if (level < 1) {
          setLevel(level + 1);
        } else {
          setGameOver(true);
        }
        setNotification(null);
        setNotificationText(null);
      }, 1000);
    } else {
      setNotification(error);
      setNotificationText("Спробуй ще раз");
    }
  };

  const restartGame = () => {
    setGameOver(false);
    setLevel(1);
  };

  if (gameOver) {
    return (
      <div className={styles.gameOver}>
        <div>
          <p>Вітаємо! Ви закінчили гру.</p>
        </div>
        <div className={styles.confettiContainer}>
          <Confetti gravity={0.3} />
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
        <span>Рівень {level}: Обери правильну фигуру</span>
      </div>
      <div className={styles.figures}>
        {figures.map((figure, index) => (
          <button
            key={index}
            className={`${styles.figureButton} ${
              figure.name === selectedFigureName ? styles.selectedFigure : ""
            }`}
            onClick={() => handleFigureClick(figure.name)}
          >
            <img src={figure.image} alt={figure.name} />
          </button>
        ))}
      </div>
      <div className={styles.figureName}>
        <span className={styles.text_figure}>{correctFigureName}</span>
      </div>
      <div className={styles.messageContainer}>
        {notification && (
          <>
            <img
              className={styles.notification}
              src={notification}
              alt="notification"
            />
            <span className={styles.notificationText}>{notificationText}</span>
          </>
        )}
      </div>
    </div>
  );
}

export default FiguriGame;
