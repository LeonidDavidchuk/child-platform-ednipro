import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Games.module.css";
import LayoutProfile from "../../components/LayoutProfile/LayoutProfile";
import baby from "../Profile/images/baby_photo_profile.jpeg";
import plus from "../Profile/images/plus.svg";
import programi_gray from "./images/programi_gray.svg";
import igri_gray from "./images/igri_gray.svg";
import chitannya_gray from "./images/chitannya_gray.svg";
import programi_active from "./images/programi_active.svg";
import igri_active from "./images/igri_active.svg";
import chitannya_active from "./images/chitannya_active.svg";

import cat from "./images/cat.svg";
import card_slova from "./images/card_slova.svg";
import card_rahui from "./images/card_rahui.svg";
import card_figuri from "./images/card_figuri.svg";

function Games() {
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
              <a href="/programi">
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
              </a>

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

              <a className={styles.no_underline} href="/chitannya">
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
              </a>
            </div>

            <div className={styles.cards_container}>

              <Link to ="/slova">
                <div className={styles.card}>
                  <div className={styles.picture_in_card}>
                    <img src={card_slova} alt="slova" />
                  </div>
                  <div className={styles.down_card}>
                    <span>Пропущені букви</span>
                  </div>
                </div>
              </Link>

              <Link to="/sloga">
                <div className={styles.card}>
                  <div className={styles.picture_in_card}>
                    <img src={cat} alt="cat" />
                  </div>
                  <div className={styles.down_card}>
                    <span>Пропущені слога</span>
                  </div>
                </div>
              </Link>

              <Link to = "/figuri">
                <div className={styles.card}>
                  <div className={styles.picture_in_card}>
                    <img src={card_figuri} alt="card" />
                  </div>
                  <div className={styles.down_card}>
                    <span>Відповідності (фігури)</span>
                  </div>
                </div>
              </Link>

              <Link to ="/podchet">
                <div className={styles.card}>
                  <div className={styles.picture_in_card}>
                    <img src={card_rahui} alt="card" />
                  </div>
                  <div className={styles.down_card}>
                    <span>Рахуймо разом</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LayoutProfile>
  );
}

export default Games;
