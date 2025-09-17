import React from "react";
import styles from "./MedicationCard.module.css";

const MedicationCard = ({ name, description, dosage, status, slot }) => {
    return (
        <div className={styles["medication-card"]}>
            <div className={styles["medication-header"]}>
                <h3 className={styles["medication-name"]}>{name}</h3>
            </div>
            <div className={styles["medication-body"]}>

                <p className={styles["medication-slot"]}>🕒 Horario: {slot}</p>
                <p className={styles["medication-status"]}>Estado: {status}</p>
                <p className={styles["medication-dosage"]}>💊 Dosis: {dosage}</p>
                
                
                <p className={styles["medication-description"]}>Descripción: {description}</p>

            </div>

        </div>
    );
};

export default MedicationCard;
