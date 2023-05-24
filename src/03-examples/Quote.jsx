import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ name, id }) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, heigth: 0 });

    useLayoutEffect(() => {
        const { width, heigth } = pRef.current.getBoundingClientRect();
        setBoxSize({ width, heigth })

    }, [name])

    return (
        <>
            <blockquote
                className="blockquote text-end"
                style={{ display: 'flex' }}
            >
                <p ref={pRef} className="mb-1"> Soy el Feature: {name} </p>
                <footer className="blockquote-footer"> Mi ID es: {id} </footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}