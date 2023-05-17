import React, { useContext } from "react";
import styles from "./RegistrationParent.module.css";
import Layout from "../../components/Layout/Layout";
import plus from "./images/plus.svg";
import { Link } from "react-router-dom";
import withAuth from "../../components/WithAuth/WithAuth";
import { UserContext } from "../../UserContext";

function RegistrationParent() {
  const { user } = useContext(UserContext);
  const firstName = user?.firstName || "User";

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.top}>
          <span>Добрий день, {firstName}!</span>
          <span>Для початку роботи додайте свою дитину</span>
        </div>

        <div className={styles.down}>
          <Link to="/formschild" className={styles.no_underline}>
            <button className={styles.roundedButton}>
              <div className={styles.buttonContent}>
                <img src={plus} alt="plus" className={styles.plusIcon} />
                <span>Додати дитину</span>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(RegistrationParent);
