import React, { useState, useRef, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ setShowMedicationModal }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef(null);

  // Detect click outside and close menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo/Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>💊</div>
          <span className={styles.brandName}>RecuerdaMe</span>
        </div>

        {/* Menu Items */}
        <div className={styles.menu}>
          {/* Add Medication Modal */}
          <button
            className={styles.addButton}
            onClick={() => setShowMedicationModal(true)}
          >
            <span className={styles.addIcon}>+</span>
            <span className={styles.addText}>Medicamento</span>
          </button>

          {/* User Menu */}
          <div className={styles.userMenu} ref={userMenuRef}>
            <button
              className={styles.userButton}
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <div className={styles.userAvatar}>U</div>
              <span className={styles.userLabel}>Usuario</span>
              <svg
                className={styles.dropdownIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {/* Dropdown */}
            {showUserMenu && (
              <div className={styles.dropdown}>
                <button className={styles.dropdownItem}>👤 Mi Perfil</button>
                <button className={styles.dropdownItem}>⚙️ Configuración</button>
                <button className={styles.dropdownItem}>📊 Estadísticas</button>
                <div className={styles.dropdownDivider}></div>
                <button className={styles.logout}>🚪 Cerrar Sesión</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
