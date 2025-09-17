import React from "react";
import styles from "./Header.module.css"; // importas el CSS module

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles["header-title"]}>Tu asistente de medicación</h1>
      <p className={styles["header-subtitle"]}>Nunca olvides tomar tus medicamentos</p>
    </header>
  );
};

export default Header;
