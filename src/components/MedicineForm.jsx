import React, { useState } from "react";
import { createMedicine } from "../services/Service.jsx";

const MedicineForm = () => {
    const [form, setForm] = useState({
        name: "",
        dose: "",
        startDate: "",
        endDate: "",
        intakeSlots: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleCheckbox = (e) => {
        const { value, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            intakeSlots: checked
                ? [...prev.intakeSlots, value]
                : prev.intakeSlots.filter((slot) => slot !== value),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createMedicine(form);
            console.log("Medicamento criado:", response);
            handleReset();
        } catch (err) {
            console.error("Erro ao criar medicamento:", err);
        }
    };

    const handleReset = () => {
        setForm({
            name: "",
            dose: "",
            startDate: "",
            endDate: "",
            intakeSlots: [],
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Medicamento"
                value={form.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="dose"
                placeholder="Dosis"
                value={form.dose}
                onChange={handleChange}
            />
            <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
            />
            <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
            />

            <label>
                <input
                    type="checkbox"
                    value="DESAYUNO"
                    checked={form.intakeSlots.includes("DESAYUNO")}
                    onChange={handleCheckbox}
                />
                Desayuno
            </label>
            <label>
                <input
                    type="checkbox"
                    value="COMIDA"
                    checked={form.intakeSlots.includes("COMIDA")}
                    onChange={handleCheckbox}
                />
                Comida
            </label>
            <label>
                <input
                    type="checkbox"
                    value="CENA"
                    checked={form.intakeSlots.includes("CENA")}
                    onChange={handleCheckbox}
                />
                Cena
            </label>

            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
                Reset
            </button>
        </form>
    );
};

export default MedicineForm;
