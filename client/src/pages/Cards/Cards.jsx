import React, { useState } from "react";
import { useContext } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Link, useParams } from "react-router-dom";
import styles from "./Cards.module.css";
import LayoutProfile from "../../components/LayoutProfile/LayoutProfile";
import ponchik from "./images/ponchik.svg";
import plus from "../Profile/images/plus.svg";
import programi_gray from "./images/programi_gray.svg";
import igri_gray from "./images/igri_gray.svg";
import chitannya_gray from "./images/chitannya_gray.svg";
import programi_active from "./images/programi_active.svg";
import igri_active from "./images/igri_active.svg";
import chitannya_active from "./images/chitannya_active.svg";
import alphabet_image from "./images/alphabet_image.svg";
import withAuth from "../../components/WithAuth/WithAuth";
import { UserContext } from "../../UserContext";

import cat from "./images/cat.svg";
import card_slova from "./images/card_slova.svg";
import card_rahui from "./images/card_rahui.svg";
import card_figuri from "./images/card_figuri.svg";

import book1_image from "./images/book1_image.jpg";

import book1 from "./assets/books/book1.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Cards() {
  const { id } = useParams();
  const [activeButton, setActiveButton] = useState(0);
  const [activeSection, setActiveSection] = useState(+id || 0);
  const [activeFilter, setActiveFilter] = useState(null);

  const [pdfModalVisible, setPdfModalVisible] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

  const { user } = useContext(UserContext);
  const firstName = user?.firstName || "User";

  const handleBookClick = (pdf) => {
    setPdfFile(pdf);
    setPdfModalVisible(true);
    pdfjs.getDocument(pdf).promise.then((pdfDoc) => {
      setNumPages(pdfDoc.numPages);
    });
  };

  const closeModal = () => {
    setPdfModalVisible(false);
  };

  const handleClick = (index) => {
    setActiveButton(index);
  };

  const nextPage = () => {
    setPageNumber((prevPageNumber) =>
      prevPageNumber < numPages ? prevPageNumber + 1 : prevPageNumber
    );
  };

  const prevPage = () => {
    setPageNumber((prevPageNumber) =>
      prevPageNumber > 1 ? prevPageNumber - 1 : prevPageNumber
    );
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
    { id: 6, name: "Музика" },
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

  const booksData = [
    {
      id: 1,
      title: "Вика и Алик",
      category: "Читання та аудіокниги",
      pdf: book1,
      image: book1_image,
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
        return (
          <div className={styles.cards_container}>
            {booksData.map((book) => (
              <div
                key={book.id}
                className={styles.card_book}
                onClick={() => handleBookClick(book.pdf)}
              >
                <div className={styles.picture_in_card_book}>
                  <img src={book.image} alt={book.title} />
                </div>
                <div className={styles.down_card}>
                  <span>{book.title}</span>
                </div>
              </div>
            ))}
          </div>
        );
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
              <a className={styles.no_underline} href="/formschild">
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
            {pdfModalVisible && (
              <div className={styles.modal_wrapper} onClick={closeModal}>
                <div className={styles.modal}>
                  <div
                    className={styles.modal_content}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Document file={pdfFile}>
                      {<Page pageNumber={pageNumber} width={500} scale={2} />}
                    </Document>
                    <button className={styles.prev_page} onClick={prevPage}>
                      {"<<"}
                    </button>
                    <button className={styles.next_page} onClick={nextPage}>
                      {">>"}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </LayoutProfile>
  );
}

export default withAuth(Cards);
