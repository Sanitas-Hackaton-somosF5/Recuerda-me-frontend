import { expect, describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer component", () => {
    test("renders main info correctly", () => {
        render(<Footer />);

        // Verifica que el título principal exista
        expect(screen.getByText("8ª Hackathon Educativa")).not.toBeNull();

        // Verifica que aparezca el icono de hospital
        expect(screen.getByText("🏥")).not.toBeNull();

        // Verifica marcas y partnership
        expect(screen.getByText("Una colaboración entre")).not.toBeNull();
        expect(screen.getByText("SomosF5")).not.toBeNull();
        expect(screen.getByText("Sanitas")).not.toBeNull();

        // Verifica el copyright
        expect(screen.getByText("© 2025 - Proyecto Hackathon")).not.toBeNull();
    });
});