import React from "react";
import styles from "./MedicationCard.module.css";

const MedicationCard = ({ name, description, dosage }) => {
    return (
        <div className="med-card">
            <h3>{name}</h3>
            <p>Descripción: {description}</p>
            <p>Dosis: {dosage}</p>
        </div>
    )
}

export default MedicationCard
