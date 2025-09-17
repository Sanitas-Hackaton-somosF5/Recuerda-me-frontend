import React from 'react'

const Today = () => {

    //Fake Data
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
                    <li key={med.id}>
                        {med.name} - {med.time} - {med.status}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Today