import React from "react";
import styles from "./IntakeCard.module.css";

const statusMap = {
  PENDING: "Pendiente",
  TAKEN: "✅ Tomada",
  MISSED: "Perdida",
};

const statusClassMap = {
  PENDING: "status-pending",
  TAKEN: "status-taken",
  MISSED: "status-missed",
};

const IntakeCard = ({ name, dosage, status, description, onUpdateStatus }) => {
  return (
    <div className={styles["intake-card"]}>
      {/* Header */}
      <div className={styles["intake-header"]}>
        <h3 className={styles["intake-name"]}>{name}</h3>
        <span
          className={`${styles["intake-status"]} ${styles[statusClassMap[status]]}`}
        >
          {statusMap[status] || status}
        </span>
      </div>

      {/* Divider */}
      <div className={styles["intake-divider"]}></div>

      {/* Body */}
      <div className={styles["intake-body"]}>
        <p className={styles["intake-dosage"]}>💊 Dosis: {dosage}</p>
        <p className={styles["intake-description"]}> 📋 Descripción: {description}</p>

        {status !== "TAKEN" ? (
          <button
            className={styles["intake-btn"]}
            onClick={() => onUpdateStatus("TAKEN")}
          >
            Marcar como tomada
          </button>
        ) : (
          <button
            className={styles["intake-btn"]}
            onClick={() => onUpdateStatus("PENDING")}
          >
            Marcar como no tomada
          </button>
        )}
      </div>
    </div>
  );
};

export default IntakeCard;
