import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import ednipro_logo from "../Registration/images/ednipro_logo.svg";
import child from "../Registration/images/child.svg";
import child_mobile from "../Registration/images/child_mobile.svg";
import child_tablet from "../Registration/images/child_tablet.svg";

import api from "../../api";
import { UserContext } from "../../UserContext";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { setUser } = useContext(UserContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await api.post("/user/login", formData);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        setUser(response.data);
        navigate("/profile");
      } else {
        setErrorMessage("Помилка входу");
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage("Помилка входу");
      } else {
        setErrorMessage("Помилка входу");
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
        <a href="/login">
          <img
            className={styles["logo-top-right"]}
            src={ednipro_logo}
            alt="ednipro logo"
          />
        </a>

        <div className={styles.content}>
          <div className={styles.registration_text}>
            <p>Авторизація</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.forms_all}>
              <div className={styles.forms}>
                <input
                  className={styles.form}
                  type="text"
                  placeholder="E-mail : "
                  name="email"
                  onChange={handleChange}
                />
                <input
                  className={styles.form}
                  type="text"
                  placeholder="Пароль : "
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.remember_password}>
                <input type="checkbox" />
                <label>Запам'ятати мене</label>
              </div>
              <div className={styles.form2}>
                <button className={styles.button_registration} type="submit">
                  {" "}
                  Увійти{" "}
                </button>
              </div>
            </div>
            <div className={styles["error-message-container"]}>
              {errorMessage && (
                <div className={styles["error-message"]}>{errorMessage}</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
