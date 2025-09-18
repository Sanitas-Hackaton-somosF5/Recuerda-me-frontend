// src/test/MedicineCard.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import MedicineCard from "../components/MedicineCard";

describe("MedicineCard component", () => {
    const baseProps = {
        id: "1",
        name: "Paracetamol",
        dose: "500mg",
        startDate: "2025-09-18",
        endDate: "2025-09-25",
        description: "Para el dolor de cabeza",
        onDelete: vi.fn(),
    };

    it("renders medicine info correctly", () => {
        render(<MedicineCard {...baseProps} />);

        expect(screen.getByText("Paracetamol")).toBeTruthy();
        expect(screen.getByText("💊 Dosis: 500mg")).toBeTruthy();
        expect(screen.getByText("📅 18-09-2025 a 25-09-2025")).toBeTruthy();
        expect(screen.getByText("📋 Para el dolor de cabeza")).toBeTruthy();
    });

    it("calls onDelete when the delete button is clicked", () => {
        render(<MedicineCard {...baseProps} />);

        const deleteButton = screen.getByText("Borrar");
        fireEvent.click(deleteButton);

        expect(baseProps.onDelete).toHaveBeenCalledWith("1");
    });

    it("does not render description paragraph if description is not provided", () => {
        const propsWithoutDescription = { ...baseProps, description: "" };
        render(<MedicineCard {...propsWithoutDescription} />);

        expect(screen.queryByText(/📋/)).toBeNull();
    });
});