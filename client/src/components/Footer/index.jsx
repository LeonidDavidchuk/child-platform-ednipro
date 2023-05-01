import React from "react";
import styles from "./Footer.module.css";
import logo from "../../pages/Registration/images/ednipro_logo.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p>Розроблено</p>

          <img className={styles.image_logo} src={logo} alt="logo" />
        </div>
        <div className={styles.right}>
          <span>Служба підтримки:</span>
          <span> 098 745 65 21 </span>
          <span>095 874 65 44 </span>
          <span>097 456 21 45 </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
