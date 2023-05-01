import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutWrapper}>
      <Header />
      <div className={styles.layoutContent}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
