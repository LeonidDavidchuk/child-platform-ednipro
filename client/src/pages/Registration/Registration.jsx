import React, { useContext, useState } from "react";
import styles from "./Registration.module.css";
import ednipro_logo from "../Registration/images/ednipro_logo.svg";
import child from "../Registration/images/child.svg";
import child_mobile from "../Registration/images/child_mobile.svg";
import child_tablet from "../Registration/images/child_tablet.svg";
import { UserContext } from "../../UserContext";

import { useNavigate } from "react-router-dom";
import api from "../../api";

function Registration() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { setUser } = useContext(UserContext);

  const handleChangeFullName = (e) => {
    const [firstName, lastName] = e.target.value.split(" ");
    setFormData({ ...formData, firstName, lastName });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await api.post("/user/register", formData);

      if (response.status === 201) {
        localStorage.setItem("token", response.data.token);
        setUser(response.data);
        navigate("/registrationparent");
      } else {
        setErrorMessage(response.data.message || "Помилка реєстрації");
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage("Помилка реєстрації");
      } else {
        setErrorMessage("Помилка реєстрації");
      }
    }
  };

  return (
    <div className={styles.container}>
      <img src={child} className={styles.child_photo} alt="child" />
      <img
        src={child_mobile}
        className={styles.child_mobile}
        alt="child mobile"
      />
      <img
        src={child_tablet}
        className={styles.child_tablet}
        alt="child tablet"
      />

      <div className={styles.container__right}>
        <a href="/">
          <img
            className={styles["logo-top-right"]}
            src={ednipro_logo}
            alt="ednipro logo"
          />
        </a>

        <div className={styles.content}>
          <div className={styles.registration_text}>
            <p>Реєстрація</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className={styles.forms_all}>
              <div className={styles.forms}>
                <input
                  className={styles.form}
                  type="text"
                  name="fullName"
                  placeholder="Ім'я та Прізвище"
                  onChange={handleChangeFullName}
                />
                <input
                  className={styles.form}
                  type="password"
                  name="password"
                  placeholder="Пароль : "
                  onChange={handleChange}
                />
              </div>
              <div className={styles.form2}>
                <input
                  className={styles.form}
                  type="email"
                  name="email"
                  placeholder="E-mail : "
                  onChange={handleChange}
                />
                <button className={styles.button_registration} type="submit">
                  Зареєструватися
                </button>
              </div>
            </div>
          </form>
          <div className={styles["error-message-container"]}>
            {errorMessage && (
              <div className={styles["error-message"]}>{errorMessage}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
