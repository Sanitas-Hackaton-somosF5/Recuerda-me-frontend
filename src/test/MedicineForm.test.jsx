import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import MedicineForm from '../components/MedicineForm';
import '@testing-library/jest-dom';

// Mock the imported createMedicine function
vi.mock('../services/Service.jsx', () => ({
    createMedicine: vi.fn()
}));

import { createMedicine } from '../services/Service.jsx';

describe('MedicineForm component', () => {
    beforeEach(() => {
        createMedicine.mockResolvedValue({}); // Simulate successful response
    });

    it('renders all input fields, checkboxes, and buttons', () => {
        const { container } = render(<MedicineForm />);

        // Inputs by placeholder
        expect(screen.getByPlaceholderText(/Ej: Metformina/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Ej: 850mg/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Ej: Para control de glucosa/i)).toBeInTheDocument();

        // Date inputs by name (avoiding label association)
        expect(container.querySelector('input[name="startDate"]')).toBeInTheDocument();
        expect(container.querySelector('input[name="endDate"]')).toBeInTheDocument();

        // Checkboxes
        expect(screen.getByLabelText(/Desayuno/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Comida/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Cena/i)).toBeInTheDocument();

        // Buttons
        expect(screen.getByRole('button', { name: /Agregar/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Limpiar/i })).toBeInTheDocument();
    });

    it('calls createMedicine with the correct data including intakeSlots', () => {
        const { container } = render(<MedicineForm />);

        // Fill fields
        fireEvent.change(screen.getByPlaceholderText(/Ej: Metformina/i), { target: { value: 'Paracetamol' } });
        fireEvent.change(screen.getByPlaceholderText(/Ej: 850mg/i), { target: { value: '500mg' } });
        fireEvent.change(screen.getByPlaceholderText(/Ej: Para control de glucosa/i), { target: { value: 'Pain reliever' } });

        const startDateInput = container.querySelector('input[name="startDate"]');
        const endDateInput = container.querySelector('input[name="endDate"]');
        fireEvent.change(startDateInput, { target: { value: '2025-09-18' } });
        fireEvent.change(endDateInput, { target: { value: '2025-09-25' } });

        // Select checkboxes
        fireEvent.click(screen.getByLabelText(/Desayuno/i));
        fireEvent.click(screen.getByLabelText(/Cena/i));

        // Submit
        fireEvent.click(screen.getByRole('button', { name: /Agregar/i }));

        expect(createMedicine).toHaveBeenCalledWith({
            name: 'Paracetamol',
            dose: '500mg',
            description: 'Pain reliever',
            startDate: '2025-09-18',
            endDate: '2025-09-25',
            intakeSlots: ['BREAKFAST', 'DINNER'],
        });
    });

    it('required fields have the required attribute', () => {
        const { container } = render(<MedicineForm />);

        // Check required attributes
        expect(screen.getByPlaceholderText(/Ej: Metformina/i)).toBeRequired();
        expect(screen.getByPlaceholderText(/Ej: 850mg/i)).toBeRequired();
        expect(container.querySelector('input[name="startDate"]')).toBeRequired();
        expect(container.querySelector('input[name="endDate"]')).toBeRequired();

        // Description is not required
        expect(screen.getByPlaceholderText(/Ej: Para control de glucosa/i)).not.toBeRequired();
    });
});