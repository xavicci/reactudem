import { renderHook, act } from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter'

describe('Pruebas en el usecounter', () => {
    test('debe de retornar los valores por defecto', () => {

        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment } = result.current;

        expect(counter).toBe(5);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
    });

    test('debe de retornar el valor de 100', () => {

        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100);

    });

    test('debe  de incrementar el contador', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, increment } = result.current;
        act(() => {
            increment();
            increment(2);
        });
        expect(result.current.counter).toBe(103);
    });

    test('debe  de decrementar el contador', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, decrement } = result.current;
        act(() => {
            decrement();
            decrement(2);
        });
        expect(result.current.counter).toBe(97);
    });

});