import React from "react";
import styles from "./MedicineCard.module.css";

const MedicineCard = ({ id, name, dose, startDate, endDate, description, onDelete }) => {
    return (
        <div className={styles["medicine-card"]}>
            <div className={styles["medicine-header"]}>
                <h3 className={styles["medicine-name"]}>{name}</h3>
                <button className={styles["delete-btn"]} onClick={() => onDelete(id)}>Borrar</button>
            </div>
            <div className={styles["medicine-divider"]}></div>
            <div>
                <p className={styles["medicine-dosage"]}>💊 Dosis: {dose}</p>
                <p className={styles["medicine-dates"]}>📅 {startDate} a {endDate}</p>
                {description && <p>📋 {description}</p>}
            </div>
        </div>
    );
};

export default MedicineCard;