import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";
import LayoutProfile from "../../components/LayoutProfile/LayoutProfile";
import plus from "./images/plus.svg";
import ponchik from "./images/ponchik.svg";
import programi from "./images/programi.svg";
import igri from "./images/igri.svg";
import chitannya from "./images/chitannya.svg";
import withAuth from "../../components/WithAuth/WithAuth";
import { UserContext } from "../../UserContext";

function Profile() {
  const [activeButton, setActiveButton] = useState(0);
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

            <div className={styles.blocks}>
              <Link to="/cards_content/0">
                <div className={styles.programi}>
                  <div className={styles.programi_text}>
                    <span>Учбові</span>
                    <span>програми</span>
                  </div>
                  <img
                    className={styles.programi_img}
                    src={programi}
                    alt="programi"
                  />
                </div>
              </Link>

              <Link to="/cards_content/1">
                <div className={styles.igri}>
                  <div className={styles.igri_text}>
                    <span>Розвиваючі</span>
                    <span>ігри</span>
                  </div>
                  <img className={styles.igri_img} src={igri} alt="igri" />
                </div>
              </Link>

              <Link to="/cards_content/2">
                <div className={styles.chitannya}>
                  <div className={styles.chitannya_text}>
                    <span>Читання та</span>
                    <span>аудіокниги</span>
                  </div>
                  <img
                    className={styles.chitannya_img}
                    src={chitannya}
                    alt="chitannya"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LayoutProfile>
  );
}

export default withAuth(Profile);
