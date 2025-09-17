import React, { useEffect, useState } from 'react'
import MedicationCard from '../components/MedicationCard'
import TodayTimeStamp from '../components/TodayTimeStamp'


const Today = () => {

    const [intakes, setIntakes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/intakes-today")
            .then((res) => res.json())
            .then((data) => setIntakes(data))
            .catch((err) => console.error("Error fetching intakes:", err));
    }, []);

    return (
        <div>
            <h2>Recordatorio de medicación</h2>
            <TodayTimeStamp />

            {intakes.length === 0 ? (
                <p>No tienes tomas programadas para hoy ✅.</p>
            ) : (
                intakes.map((intake) => (
                    <MedicationCard
                        key={intake.id}
                        name={intake.medication_name}
                        dosage={intake.dose}
                        description={intake.description}
                        status={intake.status}
                        slot={intake.slot}
                    />
                ))
            )}
        </div>
    );
};

export default Today