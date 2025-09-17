import React from 'react'
import MedicationCard from '../components/MedicationCard'
import TodayTimeStamp from '../components/TodayTimeStamp'


const Today = () => {

    //Mock up Data
    const medications = [
        { id: 1, name: "Omeprazol", description: "Pastillas antiinflamatorias para el pie", dosage: "200mg" },
        { id: 2, name: "Paracetamol", description: "Sobrecillos anticoagulante para la trombosis", dosage: "400mg" },
        { id: 3, name: "Ibuprofeno", description: "Gotas para la otitis", dosage: "600mg" }
    ]


    return (
        <div>
            <TodayTimeStamp />
            
            <ul>
                {medications.map(med => (
                    <MedicationCard 
                    key={med.id} 
                    name={med.name} 
                    description={med.description} 
                    dosage={med.dosage} />
                ))}
            </ul>
        </div>
    )
}

export default Today