import React from 'react'
import MedicationCard from '../components/MedicationCard'

const Today = () => {

    //Mock up Data
    const medications = [
        { id: 1, name: "Omeprazol", description: "Pastillas antiinflamatorias para el pie", dosage: "200mg" },
        { id: 2, name: "Paracetamol", description: "Sobrecillos anticoagulante para la trombosis", dosage: "400mg" },
        { id: 3, name: "Ibuprofeno", description: "Gotas para la otitis", dosage: "600mg" }
    ]


    return (
        <div>
            <h2>Hoy</h2>
            //TODO Hoy 17 septiembre
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