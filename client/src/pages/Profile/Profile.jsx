import React, { useState } from "react";
import styles from "./Profile.module.css";
import LayoutProfile from "../../components/LayoutProfile/LayoutProfile";
import plus from "./images/plus.svg";
import baby from "./images/baby_photo_profile.jpeg";
import programi from "./images/programi.svg";
import igri from "./images/igri.svg";
import chitannya from "./images/chitannya.svg";

function Profile() {
  const [activeButton, setActiveButton] = useState(0);

  const handleClick = (index) => {
    setActiveButton(index);
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
            <a className={styles.no_decoration} href="/formschild">
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

            <div className={styles.blocks}>
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

              <div className={styles.igri}>
                <div className={styles.igri_text}>
                  <span>Розвиваючі</span>
                  <span>ігри</span>
                </div>
                <img className={styles.igri_img} src={igri} alt="igri" />
              </div>

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
            </div>
          </div>
        </div>
      </div>
    </LayoutProfile>
  );
}

export default Profile;
