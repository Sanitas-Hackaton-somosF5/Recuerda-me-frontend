import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import NavBar from "../components/NavBar.jsx";

const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout