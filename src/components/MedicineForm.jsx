import React, { useState } from "react";
import { createMedicine } from "../services/Service.jsx";
import styles from "./MedicineForm.module.css"

const MedicineForm = () => {
    const [form, setForm] = useState({
        name: "",
        dose: "",
        startDate: "",
        endDate: "",
        description: "",
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
            console.log("Medicine created: ", response);
            handleReset();
        } catch (err) {
            console.error("Error creating medicine: ", err);
        }
    };

    const handleReset = () => {
        setForm({
            name: "",
            dose: "",
            startDate: "",
            endDate: "",
            description: "",
            intakeSlots: [],
        });
    };
    const today = new Date().toISOString().split("T")[0];

    return (
        <div>
            <h2 className="text-center">Agregar Medicamiento</h2>
            <form className={`form-background ${styles.formGroup}`} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre Medicamento: </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ej: Metformina"
                        value={form.name}
                        onChange={handleChange}
                        className={styles.inputSpacing}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="dose">Dosis: </label>
                    <input
                        type="text"
                        name="dose"
                        placeholder="Ej: 850mg"
                        value={form.dose}
                        onChange={handleChange}
                        className={styles.inputSpacing}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="startDate">Fecha de inicio: </label>
                    <input
                        type="date"
                        name="startDate"
                        value={form.startDate}
                        onChange={handleChange}
                        className={styles.dateInput}
                        min={today}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="endDate">Fecha de finalización: </label>
                    <input
                        type="date"
                        name="endDate"
                        value={form.endDate}
                        onChange={handleChange}
                        className={styles.dateInput}
                        min={today}
                        required
                    />
                </div>
                <label htmlFor="description">Descripción: </label>
                <input
                    type="text"
                    name="description"
                    placeholder="Ej: Para control de glucosa"
                    value={form.description}
                    onChange={handleChange}
                    className="input-spacing"
                />
                <div className={styles.intakeSlots}>
                    <label htmlFor="" >Horario:</label>
                    <label>
                        <input
                            type="checkbox"
                            value="BREAKFAST"
                            checked={form.intakeSlots.includes("BREAKFAST")}
                            onChange={handleCheckbox}
                        />
                        Desayuno
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="LUNCH"
                            checked={form.intakeSlots.includes("LUNCH")}
                            onChange={handleCheckbox}
                        />
                        Comida
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="DINNER"
                            checked={form.intakeSlots.includes("DINNER")}
                            onChange={handleCheckbox}
                        />
                        Cena
                    </label>
                </div>

                <div className={styles.buttonGroup}>
                    <button className="btn-filled input-spacing" type="submit">Agregar</button>
                    <button className="btn-outline input-spacing" type="button" onClick={handleReset}>Limpiar</button>
                </div>
            </form>
        </div >
    );
};

export default MedicineForm;
