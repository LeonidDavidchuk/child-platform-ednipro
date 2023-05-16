import React, { useContext } from "react";
import styles from "./HeaderAccount.module.css";
import logo from "../../pages/Registration/images/ednipro_logo.svg";
import peopleLogout from "./images/people_logout.svg";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";

function HeaderAccount() {
  const { user } = useContext(UserContext);
  const firstName = user?.firstName || "User";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

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
            src={peopleLogout}
            alt="people logout"
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderAccount;
