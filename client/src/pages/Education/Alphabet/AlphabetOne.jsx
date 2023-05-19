import React, { useState } from "react";
import styles from "./Alphabet.module.css";
import { useContext } from "react";
import LayoutProfile from "../../../components/LayoutProfile/LayoutProfile";
import ponchik from "./images/ponchik.svg";
import plus from "../../Profile/images/plus.svg";
import programi_gray from "./images/programi_gray.svg";
import igri_gray from "./images/igri_gray.svg";
import chitannya_gray from "./images/chitannya_gray.svg";
import programi_active from "./images/programi_active.svg";
import igri_active from "./images/igri_active.svg";
import chitannya_active from "./images/chitannya_active.svg";
import arrow from "./images/arrow.svg";
import withAuth from "../../../components/WithAuth/WithAuth";
import { UserContext } from "../../../UserContext";

import akula_image from "./assets/pictures/akula.svg";
import begemot_image from "./assets/pictures/begemot.svg";
import verblud_image from "./assets/pictures/verblud.svg";
import golub_image from "./assets/pictures/golub.svg";
import gudzik_image from "./assets/pictures/gudzik.svg";
import { Link } from "react-router-dom";

import akula from "./assets/sounds/akula.m4a";
import begemot from "./assets/sounds/begemot.m4a";
import verblud from "./assets/sounds/verblud.m4a";
import golub from "./assets/sounds/golub.m4a";
import gudzik from "./assets/sounds/gudzik.m4a";

function AlphabetOne() {
  const [activeButton, setActiveButton] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);
  const [audio, setAudio] = useState(null);

  const { user } = useContext(UserContext);
  const firstName = user?.firstName || "User";

  const handleClick = (index) => {
    setActiveButton(index);
  };

  const children = user?.Children?.length ? user?.Children[activeButton] : [];
  const canAddMoreChildren = user?.Children?.length < 4;

  const getGender = (sexId) => {
    if (sexId === 1) {
      return "Хлопчик";
    } else if (sexId === 2) {
      return "Дівчинка";
    } else {
      return "";
    }
  };

  const handleSectionClick = (index) => {
    setActiveSection(index);
  };

  const handleLetterClick = (sound, image, letter, word, index) => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    const newAudio = new Audio(sound);
    newAudio.play();

    setAudio(newAudio);
    setSelectedImage(image);
    setSelectedLetter(letter);
    setSelectedWord(word);
    setSelectedButton(index);
  };

  const alphabet = [
    { letter: "А", sound: akula, image: akula_image, word: "Акула" },
    { letter: "Б", sound: begemot, image: begemot_image, word: "Бегемот" },
    { letter: "В", sound: verblud, image: verblud_image, word: "Верблюд" },
    { letter: "Г", sound: golub, image: golub_image, word: "Голуб" },
    { letter: "Ґ", sound: gudzik, image: gudzik_image, word: "Ґудзик" },
  ];

  return (
    <LayoutProfile>
      <div className={styles.container}>
        <div className={styles["button-object-wrapper"]}>
          <div className={styles.buttons}>
            {user?.Children?.map((child, index) => (
              <button
                key={index}
                className={`${styles.deti} ${
                  activeButton === index ? styles.deti_active : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {child.firstName}
              </button>
            ))}
            {canAddMoreChildren && (
              <a className={styles.no_decoration} href="/formschild">
                <button
                  className={`${styles.deti_add} ${
                    activeButton === user?.Children?.length
                      ? styles.deti_add_active
                      : ""
                  }`}
                  onClick={() => handleClick(user?.Children?.length)}
                >
                  <img src={plus} alt="plus" />
                  <span>Додати дитину</span>
                </button>
              </a>
            )}
          </div>
          <div
            className={`${styles.object} ${
              activeButton === null ? styles.object_full_top_border : ""
            }`}
          >
            <div className={styles.photo_parametrs}>
              <img
                className={styles.profile_photo}
                src={children?.photo || ponchik}
                alt="baby"
              />

              <div className={styles.parametr}>
                <span>
                  {children?.lastName} {children?.firstName}
                </span>
                <span>{getGender(children?.sexId)}</span>
                <span>{children?.age} років</span>
              </div>

              <div className={styles.alert}>Повідомлення</div>
            </div>

            <div className={styles.razdeli}>
              <Link to="/cards_content/0">
                <div
                  className={`${styles.programi} ${
                    activeSection === 0 ? styles.programi_active : ""
                  }`}
                  onClick={() => handleSectionClick(0)}
                >
                  <span>Учбові програми</span>
                  <img
                    src={activeSection === 0 ? programi_active : programi_gray}
                    alt="programi"
                  />
                </div>
              </Link>

              <Link to="/cards_content/1">
                <div
                  className={`${styles.programi} ${
                    activeSection === 1 ? styles.igri_active : ""
                  }`}
                  onClick={() => handleSectionClick(1)}
                >
                  <span>Розвиваючі ігри</span>
                  <img
                    src={activeSection === 1 ? igri_active : igri_gray}
                    alt="igri"
                  />
                </div>
              </Link>

              <Link className={styles.no_decoration} to="/cards_content/2">
                <div
                  className={`${styles.chitannya} ${
                    activeSection === 2 ? styles.chitannya_active : ""
                  }`}
                  onClick={() => handleSectionClick(2)}
                >
                  <div className={styles.chitannya_text}>
                    <span>Читання та</span>
                    <span>аудіокниги</span>
                  </div>
                  <img
                    src={
                      activeSection === 2 ? chitannya_active : chitannya_gray
                    }
                    alt="chitannya"
                  />
                </div>
              </Link>
            </div>

            <div className={styles.image_letter}>
              {selectedLetter && (
                <div className={styles.selectedLetter}>
                  <span className={styles.big_letter}>{selectedLetter}</span>
                  <span className={styles.big_word}>{selectedWord}</span>
                </div>
              )}
              {selectedImage && (
                <img
                  className={styles.selectedImage}
                  src={selectedImage}
                  alt="Выбранная буква"
                />
              )}
            </div>

            <div className={styles.alphabet}>
              {alphabet.map(({ letter, sound, image, word }, index) => {
                return (
                  <button
                    key={letter}
                    className={`${styles.letterButton} ${
                      selectedButton === index ? styles.selected_letter : ""
                    }`}
                    onClick={() =>
                      handleLetterClick(sound, image, letter, word, index)
                    }
                  >
                    {letter}
                  </button>
                );
              })}
            </div>

            <div className={styles.next_container}>
              <a className={styles.no_decoration} href="/alphabet_two">
                <div className={styles.next}>
                  <span className={styles.text_on_next}>Наступні літери</span>
                  <img className={styles.arrow} src={arrow} alt="arrow" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </LayoutProfile>
  );
}

export default withAuth(AlphabetOne);
