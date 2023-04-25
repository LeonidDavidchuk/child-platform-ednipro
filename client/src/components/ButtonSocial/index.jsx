import React from "react";
import styles from "./Button.module.css";
import google from "./images/logo_google.svg";
import facebook from "./images/logo_facebook.svg";
import twitter from "./images/logo_twitter.svg";

function ButtonSocial() {
  return (
    <div className={styles.container}>
      <button className={styles.button_social}>
        <img src={google} alt="google" />
        <span className={styles.name_social}>Увійти за допомогою Google</span>
      </button>

      <button className={styles.button_social}>
        <img src={facebook} alt="facebook" />
        <span className={styles.name_social}>Увійти за допомогою Google</span>
      </button>

      <button className={styles.button_social}>
        <img src={twitter} alt="twitter" />
        <span className={styles.name_social}>Увійти за допомогою Google</span>
      </button> 
    </div>
  );
}

export default ButtonSocial;
