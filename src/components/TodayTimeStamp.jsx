import React from "react";

const TodayTimeStamp = () => {
    const today = new Date();
    const timestamp = today.toLocaleString("es-ES", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return <h2>Hoy es {timestamp}</h2>;
};

export default TodayTimeStamp;
