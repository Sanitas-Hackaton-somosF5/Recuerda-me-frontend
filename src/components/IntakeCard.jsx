import React from "react";
import styles from "./IntakeCard.module.css";

const IntakeCard = ({ name, description, dosage, status, slot }) => {
    return (
        <div className={styles["intake-card"]}>
            <div className={styles["intake-header"]}>
                <h3 className={styles["intake-name"]}>{name}</h3>
            </div>
            <div className={styles["intake-body"]}>

                <p className={styles["intake-slot"]}>🕒 Horario: {slot}</p>
                <p className={styles["intake-status"]}>Estado: {status}</p>
                <p className={styles["intake-dosage"]}>💊 Dosis: {dosage}</p>
                
                
                <p className={styles["intake-description"]}>Descripción: {description}</p>

            </div>

        </div>
    );
};

export default IntakeCard;
