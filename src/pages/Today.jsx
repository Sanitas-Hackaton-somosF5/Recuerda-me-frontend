import React from 'react'
import MedicationCard from '../components/MedicationCard'

const Today = () => {

    //Mock up Data
    const medications = [
        { id: 1, name: "Omeprazol", description: "Descripcion del medicamento Omeprazol", dosage: "200mg" },
        { id: 2, name: "Paracetamol", description: "Descripcion del medicamento Paracetamol", dosage: "400mg" },
        { id: 3, name: "Ibuprofeno", description: "Descripcion del medicamento Ibuprofeno", dosage: "600mg" }
    ]


    return (
        <div>
            <h2>Hoy</h2>
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