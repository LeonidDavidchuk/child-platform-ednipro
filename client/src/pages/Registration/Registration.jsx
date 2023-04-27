import React from "react";
import styles from "./Registration.module.css";
import ednipro_logo from "../Registration/images/ednipro_logo.svg";
import child from "../Registration/images/child.svg";

function Registration() {
  return (
    <div className={styles.container}>
      <img src={child} className={styles.child_photo} alt="child" />

      <div className={styles.container__right}>
        <img
          className={styles["logo-top-right"]}
          src={ednipro_logo}
          alt="ednipro logo"
        />

        <div className={styles.content}>
          <div className={styles.registration_text}>
            <p>Реєстрація</p>
          </div>
          <div className={styles.forms_all}>
            <div className={styles.forms}>
              <input
                className={styles.form}
                type="text"
                placeholder="Прізвище та Ім'я "
              />
              <input
                className={styles.form}
                type="text"
                placeholder="Пароль : "
              />
            </div>
            <div className={styles.form2}>
              <input
                className={styles.form}
                type="text"
                placeholder="E-mail : "
              />
              <button className={styles.button_registration}>
                {" "}
                Зареєструватися{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
