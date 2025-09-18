import React, { useEffect, useState } from "react";
import { getAllMedicines } from "../services/Service.jsx";

const MedicineList = () => {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        const fetchMedicines = async () => {
            try {
                const data = await getAllMedicines();
                setMedicines(data);
            } catch (err) {
                console.error("Error fetching medicines:", err);
            }
        };

        fetchMedicines();
    }, []);

    return (
        <div><h2>Lista de Medicamentos</h2>
            {medicines.length === 0 ? (
                <p>No hay medicamentos registrados.</p>
            ) : (
                <ul>
                    {medicines.map((med) => (
                        <li key={med.id}>
                            {med.name} - {med.dose} ({med.startDate} a {med.endDate})
                        </li>
                    ))}
                </ul>
            )}</div>
    )
}

export default MedicineList