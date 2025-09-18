import React from "react";
import { updateIntake } from "../services/intakes"; // tu función del backend

function IntakeItem({ intake, onStatusChange }) {

  const handleClick = async (newStatus) => {
    const success = await updateIntake(intake.id, newStatus);
    if (success) {
      onStatusChange(intake.id, newStatus); // avisamos al componente padre
    } else {
      alert("No se pudo actualizar la toma");
    }
  };

  return (
    <div>
      <span>{intake.name} - Estado: {intake.status}</span>
      <button onClick={() => handleClick("TAKEN")}>Tomada</button>
      <button onClick={() => handleClick("PENDING")}>Pendiente</button>
      <button onClick={() => handleClick("MISSED")}>Perdida</button>
    </div>
  );
}

export default IntakeItem;
