import React from 'react'

const Today = () => {
    //Fake Data

    const medications = [
        { id: 1, name: "Omeprazol", time: "08:00", status: "Tomado" }
        { id: 2, name: "Paracetamol", time: "14:00", status: "Pendiente" }
        { id: 3, name: "Ibuprofeno", time: "20:00", status: "Retrasado" }
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