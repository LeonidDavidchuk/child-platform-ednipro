import React from "react";
import styles from "./Header.module.css";
import logo from "../../pages/Registration/images/ednipro_logo.svg";
import people_profile from "./images/people_profile.svg";

function Header() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />

      <div className={styles.right}>
        <div className={styles.texts}>
          <span className={styles.text1}>Особистий кабінет</span>
          <span className={styles.text2}>Дубровська Марія</span>
        </div>

        <div className={styles.right2}>
          <img
            className={styles.people}
            src={people_profile}
            alt="people profile"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
