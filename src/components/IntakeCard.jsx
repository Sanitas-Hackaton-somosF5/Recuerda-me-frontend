import React from "react";
import styles from "./IntakeCard.module.css";

const statusMap = {
  PENDING: "Pendiente",
  TAKEN: "Tomada",
  MISSED: "Perdida"
};

const statusClassMap = {
  PENDING: "status-pending",
  TAKEN: "status-taken",
  MISSED: "status-missed"
};

const IntakeCard = ({ name, description, dosage, status, slot, onUpdateStatus }) => {
  return (
    <div className={styles["intake-card"]}>
      <div className={styles["intake-header"]}>
        <h3 className={styles["intake-name"]}>{name}</h3>
      </div>
      <div className={styles["intake-body"]}>
        <p className={styles["intake-slot"]}>🕒 Horario: {slot}</p>
        <p className={`${styles["intake-status"]} ${styles[statusClassMap[status]]}`}>
          {statusMap[status] || status}
        </p>
        <p className={styles["intake-dosage"]}>💊 Dosis: {dosage}</p>
        <p className={styles["intake-description"]}>Descripción: {description}</p>

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
