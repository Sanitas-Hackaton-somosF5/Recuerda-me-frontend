import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Icono y título principal */}
          <div className={styles.mainInfo}>
            <div className={styles.icon}>🏥</div>
            <p className={styles.title}>8ª Hackathon Educativa</p>
          </div>

          {/* Partnership info */}
          <div className={styles.partnership}>
            <span>Una colaboración entre</span>
          </div>

          {/* Brands */}
          <div className={styles.brands}>
            <div className={styles.brand}>
              <div className={styles.brandIcon}>F5</div>
              <span className={styles.brandName}>SomosF5</span>
            </div>

            <div className={styles.separator}>×</div>

            <div className={styles.brand}>
              <div className={styles.brandIcon}>S</div>
              <span className={styles.brandName}>Sanitas</span>
            </div>
          </div>

          {/* Additional info */}
          <div className={styles.additional}>
            <p>Equipo 5 de desarrollo</p>
            <p>Lara Pla, Alexandra Rojas, Paula Apsé, Jesús Martín, Mariany Araujo, Mari Carmen Tajuelo</p>
            <p>Desarrollando soluciones innovadoras para el cuidado de la salud</p>
            <p>© 2025 - Proyecto Hackathon</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
