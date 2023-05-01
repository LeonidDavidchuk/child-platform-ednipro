import React from "react";
import styles from "./FormsChild.module.css";
import Layout from "../../components/Layout/Layout";

function FormsChild() {
  return (
    <Layout>
      <div className={styles.full_height}>
        <div className={styles.center}>
          <span className={styles.ditina}>Дитина</span>
          <div className={styles.forms_and_text}>
            <div className={styles.form1}>
              <span className={styles.imya}>Ім'я </span>
              <input className={styles.form} type="text" />
            </div>

            <div className={styles.form1}>
              <span className={styles.imya}>Прізвище </span>
              <input className={styles.form} type="text" />
            </div>

            <div className={styles.form1}>
              <span className={styles.imya}>Вік</span>
              <input className={styles.form5} type="text" />
            </div>

            <div className={styles.gender_selector}>
              <span className={styles.imya}>Стать </span>
              <label className={styles.radio_label}>
                <input
                  className={styles.radio_input}
                  type="radio"
                  name="gender"
                  value="male"
                />
                <span className={styles.radio_button}></span>
                Жіноча
              </label>
              <label className={styles.radio_label}>
                <input
                  className={styles.radio_input}
                  type="radio"
                  name="gender"
                  value="female"
                />
                <span className={styles.radio_button}></span>
                Чоловіча
              </label>
            </div>
          </div>
        </div>
        <div className={styles.button_container}>
          <button className={styles.button_registration}>
            Зареєструватися
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default FormsChild;
