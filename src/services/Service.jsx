import React from 'react'
const URL_API_MEDICINE = "http://localhost:3000/medicines/";
const URL_API_INTAKES_TODAY = "http://localhost:3000/intakes-today";


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
        const res = await fetch(URL_API_MEDICINE);
        console.log(res);
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}

export async function getMedicineById(id) {
    try {
        const res = await fetch(`${BASE_URL}${id}`);
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}

export async function updateMedicine(id, updatedData) {
    try {
        const res = await fetch(`${BASE_URL}${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData)
        });
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}

export async function getAllItakes() {
    try {
        const res = await fetch(URL_API_INTAKES_TODAY);
        console.log(res);
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}
