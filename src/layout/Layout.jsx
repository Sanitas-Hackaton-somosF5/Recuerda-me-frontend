import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import NavBar from "../components/NavBar.jsx";
import MedicineForm from "../components/MedicineForm.jsx";
import styles from './Layout.module.css';


const Layout = () => {
    const [showMedicationModal, setShowMedicationModal] = useState(false);
    return (
        <>
            <NavBar setShowMedicationModal={setShowMedicationModal} />
            <Outlet />
            <Footer />

            {showMedicationModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <MedicineForm />
                        <button
                            className={styles.closeBtn}
                            onClick={() => setShowMedicationModal(false)}
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )}

        </>
    )
}

export default Layout