import React from "react";
import styles from "./RegistrationParent.module.css";
import Layout from "../../components/Layout/Layout";
import plus from "./images/plus.svg";

function RegistrationParent() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.top}>
          <span>Добрий день, Марія!</span>
          <span>Для початку роботи додайте свою дитину</span>
        </div>

        <div className={styles.down}>
          <button className={styles.roundedButton}>
            <div className={styles.buttonContent}>
              <img src={plus} alt="plus" className={styles.plusIcon} />
              <span>Додати дитину</span>
            </div>
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default RegistrationParent;
