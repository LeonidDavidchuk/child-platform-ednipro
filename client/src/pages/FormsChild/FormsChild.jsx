import React, { useRef, useState } from "react";
import api from "../../api";
import styles from "./FormsChild.module.css";
import Layout from "../../components/Layout/Layout";
import plus from "./images/plus.svg";
import withAuth from "../../components/WithAuth/WithAuth";
import { useNavigate } from "react-router-dom";

function FormsChild() {
  const inputRef = useRef();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    sexId: "",
    photo: null,
  });

  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setFormData({ ...formData, photo: file });
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const photoExist = !!formData.photo;
      let url = "";
      if (photoExist) {
        const fileData = new FormData();
        fileData.append("", formData.photo);
        const { data } = await api.post("/upload", fileData);
        url = data.url;
      }
      const { photo, ...dataWithoutPhoto } = formData;
      const response = await api.post(
        "/child",
        url
          ? { ...dataWithoutPhoto, photo: `http://localhost:3000/${url}` }
          : dataWithoutPhoto
      );
      console.log(response.data);
      navigate("/profile");
    } catch (error) {
      console.error("Ошибка при отправке данных: ", error);
      setError(error);
    }
  };

  return (
    <Layout>
      <div className={styles.full_height}>
        <div className={styles.center}>
          <span className={styles.ditina}>Дитина</span>
          <form onSubmit={handleSubmit} className={styles.forms_and_text}>
            <div className={styles.forms_and_text}>
              <div className={styles.form1}>
                <span className={styles.imya}>Ім'я </span>
                <input
                  className={styles.form}
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.form1}>
                <span className={styles.imya}>Прізвище </span>
                <input
                  className={styles.form}
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.form1}>
                <span className={styles.imya}>Вік</span>
                <input
                  className={styles.form5}
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.gender_selector}>
                <span className={styles.imya}>Стать </span>
                <label className={styles.radio_label}>
                  <input
                    className={styles.radio_input}
                    type="radio"
                    name="sexId"
                    value={2}
                    onChange={handleInputChange}
                  />
                  <span className={styles.radio_button}></span>
                  Дівчинка
                </label>
                <label className={styles.radio_label}>
                  <input
                    className={styles.radio_input}
                    type="radio"
                    name="sexId"
                    value={1}
                    onChange={handleInputChange}
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
              <button className={styles.button_registration} type="submit">
                Додати дитину
              </button>
            </div>
          </form>
          <div className={styles["error-message-container"]}>
            {error && (
              <div className={styles["error-message"]}>
                Помилка при додаванні дитини
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(FormsChild);
