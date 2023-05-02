import React, { useRef } from "react";
import styles from "./FormsChild.module.css";
import Layout from "../../components/Layout/Layout";
import plus from "./images/plus.svg";

function FormsChild() {
  const inputRef = useRef();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      console.log(file);
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

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
                Дівчинка
              </label>
              <label className={styles.radio_label}>
                <input
                  className={styles.radio_input}
                  type="radio"
                  name="gender"
                  value="female"
                />
                <span className={styles.radio_button}></span>
                Хлопчик
              </label>
            </div>

            <div className={styles.form1}>
              <div className={styles.photo_text}>
                <span className={styles.imya}>Фото</span>
                <span>(за бажанням)</span>
              </div>
              <div className={styles.upload_image} onClick={handleClick}>
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
                <img className={styles.plus_upload} src={plus} alt="plus" />
                <span>Завантажити фото</span>
              </div>
            </div>
          </div>
          <div className={styles.button_container}>
            <button className={styles.button_registration}>
              Додати дитину
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default FormsChild;
