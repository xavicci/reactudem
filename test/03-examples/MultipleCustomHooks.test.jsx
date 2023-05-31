import { fireEvent, render, screen } from '@testing-library/react'
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFecth } from '../../src/hooks/useFecth';
import { useCounter } from '../../src/hooks/useCounter';
import { act } from 'react-dom/test-utils';

jest.mock('../../src/hooks/useFecth');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {


        useFecth.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        })

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...'))
        expect(screen.getByText('Rick and Morty Quotes'))

        const nextButton = screen.getByRole('button', { name: 'Next Quotes' });
        expect(nextButton.disable).toBeFalsy();

        screen.debug();
    });



    test('debe de mostrar un Quote', () => {

        useFecth.mockReturnValue({
            data: { name: 'Transformadores', id: 8 },
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Next Quotes')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next Quotes' });
        expect(nextButton.disable).toBeFalsy();
    });


    test('debe de llamar la funcion de incrementar', () => {

        useFecth.mockReturnValue({
            data: { name: 'Transformadores', id: 8 },
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Next Quotes' });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();

    });

});