import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { expect } from "chai";
import Header from "../components/Header";

describe("Header component", () => {
    it("renders the title and subtitle", () => {
        render(<Header />);
        const title = screen.getByText("Tu asistente de medicación");
        const subtitle = screen.getByText("Nunca olvides tomar tus medicamentos");
        expect(title).to.exist;
        expect(subtitle).to.exist;
    });
});