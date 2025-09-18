import React, { useEffect, useState } from 'react';
import IntakeCard from '../components/IntakeCard';
import TodayTimeStamp from '../components/TodayTimeStamp';
import styles from './Today.module.css';
import Header from '../components/Header';
import { getAllIntakes } from '../services/Service';

const slotOrder = ["DESAYUNO", "COMIDA", "CENA"];

const Today = () => {
    const [intakes, setIntakes] = useState([]);

    useEffect(() => {
        getAllIntakes()
            .then(data => setIntakes(data))
            .catch(err => console.error("Error fetching intakes:", err));
    }, []);

    const updateIntakeStatus = (id, status) => {
        setIntakes(intakes.map(intake =>
            intake.id === id ? { ...intake, status } : intake
        ));
    };

    // Agrupar intakes por slot
    const groupedIntakes = slotOrder.reduce((acc, slot) => {
        acc[slot] = intakes.filter(intake => intake.slot === slot);
        return acc;
    }, {});

    return (
        <div className={styles["today-container"]}>
            <Header />
            <TodayTimeStamp />

            {intakes.length === 0 ? (
                <p>No tienes tomas programadas para hoy ✅.</p>
            ) : (
                slotOrder.map(slot => (
                    groupedIntakes[slot]?.length > 0 && (
                        <div key={slot} className={styles["slot-group"]}>
                            <h3 className={styles["slot-title"]}>{slot}</h3>
                            {groupedIntakes[slot].map(intake => (
                                <IntakeCard
                                    key={intake.id}
                                    name={intake.medication_name}
                                    dosage={intake.dose}
                                    description={intake.description}
                                    status={intake.status}
                                    slot={intake.slot}
                                    onUpdateStatus={(newStatus) => {
                                        setIntakes(intakes.map(i =>
                                            i.id === intake.id ? { ...i, status: newStatus } : i
                                        ));
                                    }}
                                />
                            ))}
                        </div>
                    )
                ))
            )}
        </div>
    );
};

export default Today;