import React from 'react'
const URL_API_MEDICINE = "http://localhost:8080/api/v1/medications";
const URL_API_GET_MEDICINE_BY_USER = "http://localhost:8080/api/v1/medications/user/1";
const URL_API_INTAKES_TODAY = "http://localhost:8080/api/v1/intakes/today";
const URL_API_INTAKES = "http://localhost:8080/api/v1/intakes";


export async function createMedicine(medicine) {
    try {
        const res = await fetch(URL_API_MEDICINE, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(medicine)
        });
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}

export async function getAllMedicines() {
    try {
        const res = await fetch(URL_API_GET_MEDICINE_BY_USER);
        console.log(res);
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}

export async function getMedicineById(id) {
    try {
        const res = await fetch(`${URL_API_MEDICINE}/${id}`);
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}

export async function updateMedicine(id, updatedData) {
    try {
        const res = await fetch(`${URL_API_MEDICINE}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData)
        });
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}

export async function deleteMedicine(id) {
    try {
        const res = await fetch(`${URL_API_MEDICINE}/${id}`, {
            method: "DELETE"
        });
        return res.ok; // true si se eliminó correctamente
    } catch (err) {
        console.error(err);
    }
}

// Crear toma
export async function createIntake(intake) {
    try {
        const res = await fetch(`${URL_API_INTAKES_TODAY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(intake)
        });
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}


export async function getAllIntakes() {
    try {
        const res = await fetch(URL_API_INTAKES_TODAY);
        //console.log(res);
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}

// Obtener toma por ID
export async function getIntakeById(id) {
    try {
        const res = await fetch(`${URL_API_INTAKES_TODAY}/${id}`);
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}

// Actualizar toma
/*export async function updateIntake(id, status) {
    try {
        const res = await fetch(`${URL_API_INTAKES_TODAY}/${id}/${TAKEN}`, {
            method: "PUT", //Patch
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData)// Nao pprecisa enviar o corpo
        });
        return await res.json();// Nao pprecisa enviar o corpo
    } catch (err) {
        console.error(err);
    }
}*/


export async function updateIntake(id, status) {
    // TAKEN, PENDING, MISSED...
    try {
        const res = await fetch(`${URL_API_INTAKES}/${id}/${status}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" }
        });
        return res.ok; 
    } catch (err) {
        console.error(err);
        return false;
    }
}



// Eliminar toma
export async function deleteIntake(id) {
    try {
        const res = await fetch(`${URL_API_INTAKES_TODAY}/${id}`, {
            method: "DELETE"
        });
        return res.ok;
    } catch (err) {
        console.error(err);
    }
}