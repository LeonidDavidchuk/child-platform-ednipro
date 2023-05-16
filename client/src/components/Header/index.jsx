import React, { useContext } from "react";
import styles from "./Header.module.css";
import logo from "../../pages/Registration/images/ednipro_logo.svg";
import peopleProfile from "./images/people_profile.svg";
import { UserContext } from "../../UserContext";

function Header() {
  const { user } = useContext(UserContext);
  const firstName = user?.firstName || "User";

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />

      <div className={styles.right}>
        <div className={styles.texts}>
          <span className={styles.text1}>Особистий кабінет</span>
          <span className={styles.text2}>{firstName}</span>
        </div>

        <div className={styles.right2}>
          <img
            className={styles.people}
            src={peopleProfile}
            alt="people profile"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
