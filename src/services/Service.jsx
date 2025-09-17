import React from 'react'
const URL_API_MEDICINE = "http://localhost:3000/medicines/";
const URL_API_USERS = "http://localhost:3000/users/";
const URL_API_INTAKES = "http://localhost:3000/intakes/";


export async function getAllMedicines() {
    try {
        const res = await fetch(URL_API_MEDICINE);
        console.log(res);
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}


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