import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Cards.module.css";
import LayoutProfile from "../../components/LayoutProfile/LayoutProfile";
import baby from "../Profile/images/baby_photo_profile.jpeg";
import plus from "../Profile/images/plus.svg";
import programi_gray from "./images/programi_gray.svg";
import igri_gray from "./images/igri_gray.svg";
import chitannya_gray from "./images/chitannya_gray.svg";
import programi_active from "./images/programi_active.svg";
import igri_active from "./images/igri_active.svg";
import chitannya_active from "./images/chitannya_active.svg";
import alphabet_image from "./images/alphabet_image.svg";

import cat from "./images/cat.svg";
import card_slova from "./images/card_slova.svg";
import card_rahui from "./images/card_rahui.svg";
import card_figuri from "./images/card_figuri.svg";

function Programi() {
  const { id } = useParams();
  const [activeButton, setActiveButton] = useState(0);
  const [activeSection, setActiveSection] = useState(+id || 0);
  const [activeFilter, setActiveFilter] = useState(null);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  const handleSectionClick = (index) => {
    setActiveSection(index);
  };

  const toggleFilter = (filter) => {
    setActiveFilter((prevActiveFilter) => {
      if (prevActiveFilter === filter) {
        return null;
      } else {
        return filter;
      }
    });
  };

  const filters = [
    { id: 1, name: "Розвиток мовлення" },
    { id: 2, name: "Математика" },
    { id: 3, name: "Довкілля" },
    { id: 4, name: "Соціум" },
    { id: 5, name: "Мистецтво" },
  ];

  const programsData = [
    {
      id: 1,
      title: "Алфавіт",
      category: "Розвиток мовлення",
      link: "/alphabet_one",
      image: alphabet_image,
    },
  ];

  const gamesData = [
    {
      id: 1,
      title: "Пропущені букви",
      category: "Розвиваючі ігри",
      link: "/slova",
      image: card_slova,
    },

    {
      id: 2,
      title: "Пропущені слога",
      category: "Розвиваючі ігри",
      link: "/sloga",
      image: cat,
    },

    {
      id: 3,
      title: "Пропущені фігури",
      category: "Розвиваючі ігри",
      link: "/figuri",
      image: card_figuri,
    },

    {
      id: 4,
      title: "Рахуймо разом",
      category: "Розвиваючі ігри",
      link: "/podchet",
      image: card_rahui,
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 0:
        return (
          <>
            <div className={styles.filter}>
              {filters.map((filter) => (
                <div
                  key={filter.id}
                  className={`${styles.filter_razdeli} ${
                    activeFilter === filter.name ? styles.active : ""
                  }`}
                  onClick={() => toggleFilter(filter.name)}
                >
                  <span className={styles.text_filter}>{filter.name}</span>
                </div>
              ))}
            </div>
            <div className={styles.cards_container}>
              {filteredCards.map((card) => (
                <a key={card.id} href={card.link}>
                  <div className={styles.card}>
                    <div className={styles.picture_in_card}>
                      <img src={card.image} alt="card" />
                    </div>
                    <div className={styles.down_card}>
                      <span>{card.title}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </>
        );

      case 1:
        return (
          <div className={styles.cards_container}>
            {gamesData.map((game) => (
              <Link to={game.link}>
                <div className={styles.card_igri}>
                  <div className={styles.picture_in_card}>
                    <img src={game.image} alt="slova" />
                  </div>
                  <div className={styles.down_card}>
                    <span>{game.title}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        );

      case 2:
        return <div></div>;
      default:
        return null;
    }
  };

  const filteredCards = activeFilter
    ? programsData.filter((card) => card.category === activeFilter)
    : programsData;

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

            {renderContent()}
          </div>
        </div>
      </div>
    </LayoutProfile>
  );
}

export default Programi;
