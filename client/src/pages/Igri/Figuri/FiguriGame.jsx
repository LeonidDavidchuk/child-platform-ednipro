import React, { useState } from "react";
import styles from "./FiguriGame.module.css";

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
    { name: "Круг", image: krug },
    { name: "Квадрат", image: kvadrat },
    { name: "Овал", image: oval },
    { name: "Прямокутник", image: pryamougolnik },
    { name: "Ромб", image: romb },
    { name: "Треугольник", image: treugolnik },
    { name: "Звезда", image: zvezda },
  ];

  const getLevelFigures = (level) => {
    return allFigures.slice(0, level + 2);
  };

  const [selectedFigureName, setSelectedFigureName] = useState("");
  const [level, setLevel] = useState(1);
  const [figures, setFigures] = useState(getLevelFigures(level));
  const [correctFigureName, setCorrectFigureName] = useState(
    figures[Math.floor(Math.random() * figures.length)].name
  );
  const [notification, setNotification] = useState(null);
  const [notificationText, setNotificationText] = useState(null);

  const handleFigureClick = (figureName) => {
    setSelectedFigureName(figureName);
    if (figureName === correctFigureName) {
      setNotification(success);
      setNotificationText("Правильно");
      setLevel(level + 1);
      setFigures(getLevelFigures(level + 1));
      setCorrectFigureName(
        figures[Math.floor(Math.random() * figures.length)].name
      );
    } else {
      setNotification(error);
      setNotificationText("Не правильно");
    }
  };

  return (
    <div className={styles.game}>
      <div className={styles.text_up}>
        <span>Уровень {level}: Обери правильну фигуру</span>
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
