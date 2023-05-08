import React, { useState } from "react";
import styles from "./Slova.module.css";
import LayoutProfile from "../../../components/LayoutProfile/LayoutProfile";
import baby from "../../Profile/images/baby_photo_profile.jpeg";
import plus from "../../Profile/images/plus.svg";
import programi_gray from "./images/programi_gray.svg";
import igri_gray from "./images/igri_gray.svg";
import chitannya_gray from "./images/chitannya_gray.svg";
import programi_active from "./images/programi_active.svg";
import igri_active from "./images/igri_active.svg";
import chitannya_active from "./images/chitannya_active.svg";
import Game from "./Game";

function Slova() {
  const [activeButton, setActiveButton] = useState(0);
  const [activeSection, setActiveSection] = useState(1);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  const handleSectionClick = (index) => {
    setActiveSection(index);
  };

  return (
    <LayoutProfile>
      <div className={styles.container}>
        <div className={styles["button-object-wrapper"]}>
          <div className={styles.buttons}>
            <button
              className={`${styles.deti} ${
                activeButton === 0 ? styles.deti_active : ""
              }`}
              onClick={() => handleClick(0)}
            >
              Леонид
            </button>
            <button
              className={`${styles.deti} ${
                activeButton === 1 ? styles.deti_active : ""
              }`}
              onClick={() => handleClick(1)}
            >
              Стас
            </button>
            <a className={styles.no_underline} href="/formschild">
              <button
                className={`${styles.deti_add} ${
                  activeButton === 2 ? styles.deti_add_active : ""
                }`}
                onClick={() => handleClick(2)}
              >
                <img src={plus} alt="plus" />
                <span>Додати дитину</span>
              </button>
            </a>
          </div>

          <div
            className={`${styles.object} ${
              activeButton === null ? styles.object_full_top_border : ""
            }`}
          >
            <div className={styles.photo_parametrs}>
              <img className={styles.profile_photo} src={baby} alt="baby" />

              <div className={styles.parametr}>
                <span>Давидчук Леонид</span>
                <span>Хлопчик</span>
                <span>20 лет</span>
              </div>

              <div className={styles.alert}>Повідомлення</div>
            </div>

            <div className={styles.razdeli}>
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

              <a href="/education_games">
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
              </a>

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
                  src={activeSection === 2 ? chitannya_active : chitannya_gray}
                  alt="chitannya"
                />
              </div>
            </div>
            <Game />
          </div>
        </div>
      </div>
    </LayoutProfile>
  );
}

export default Slova;
