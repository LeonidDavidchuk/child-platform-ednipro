import React from "react";
import styles from "./Registration.module.css";
import ednipro_logo from "../Registration/images/ednipro_logo.svg";
import child from "../Registration/images/child.svg";
import ButtonSocial from "../../components/ButtonSocial/index.jsx";

function Registration() {
  return (
    <div className={styles.container}>
      <img src={child} className={styles.child_photo} alt="child" />

      <div className={styles.ednipro_logo_container}>
        <img className={styles.logo} src={ednipro_logo} alt="ednipro logo" />
      </div>

      <div className={styles.buttons}>
        <div>
          <ButtonSocial />
        </div>
      </div>
    </div>
  );
}

export default Registration;
