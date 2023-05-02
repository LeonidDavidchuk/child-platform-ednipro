import React from "react";
import Footer from "../Footer";
import styles from "./LayoutProfile.module.css";
import HeaderAccount from "../HeaderAccount";

const LayoutProfile = ({ children }) => {
  return (
    <div className={styles.layoutWrapper}>
      <HeaderAccount />
      <div className={styles.layoutContent}>{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutProfile;
