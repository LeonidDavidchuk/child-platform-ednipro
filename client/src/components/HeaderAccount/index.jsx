import React from "react";
import styles from "./HeaderAccount.module.css";
import logo from "../../pages/Registration/images/ednipro_logo.svg";
import people_logout from "./images/people_logout.svg";

function HeaderAccount() {
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
            src={people_logout}
            alt="people logout"
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderAccount;
