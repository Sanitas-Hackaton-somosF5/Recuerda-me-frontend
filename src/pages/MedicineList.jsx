import React, { useEffect, useState } from "react";
import { getAllMedicines, deleteMedicine } from "../services/Service.jsx";
import MedicineCard from "../components/MedicineCard.jsx";
import styles from './Today.module.css';

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

    const handleDelete = async (id) => {
        const ok = await deleteMedicine(id);
        if (ok) {
            setMedicines(prev => prev.filter(med => med.id !== id));
        }
    };

    return (
        <div className={styles["today-container"]}>
            <h2>Lista de Medicamentos</h2>
            {medicines.length === 0 ? (
                <p>No hay medicamentos registrados.</p>
            ) : (
                <div className={styles["slot-group"]}>
                    {medicines.map((med) => (
                        <MedicineCard
                            key={med.id}
                            id={med.id}
                            name={med.name}
                            dose={med.dose}
                            startDate={med.startDate}
                            endDate={med.endDate}
                            description={med.description}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MedicineList;
