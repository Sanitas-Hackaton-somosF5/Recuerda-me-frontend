import React, { useEffect, useState } from 'react'
import IntakeCard from '../components/IntakeCard'
import TodayTimeStamp from '../components/TodayTimeStamp'
import styles from './Today.module.css'
import Header from '../components/Header'



const Today = () => {

    const [intakes, setIntakes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/intakes-today")
            .then((res) => res.json())
            .then((data) => setIntakes(data))
            .catch((err) => console.error("Error fetching intakes:", err));
    }, []);

    return (
        <div className={styles["today-container"]}>
            <Header />
            <TodayTimeStamp />

            {intakes.length === 0 ? (
                <p>No tienes tomas programadas para hoy ✅.</p>
            ) : (
                intakes.map((intake) => (
                    <IntakeCard
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