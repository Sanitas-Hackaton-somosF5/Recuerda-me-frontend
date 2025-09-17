import React from "react";
import styles from "./NavigationTabs.module.css";

const NavigationTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "today", label: "Hoy" },
    { id: "medications", label: "Medicamentos" },
  ];

  return (
    <nav className={styles.navbar}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`${styles.tab} ${activeTab === tab.id ? styles.active : ""}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default NavigationTabs;
