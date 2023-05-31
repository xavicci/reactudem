import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {



    const { } = useFetch('https://rickandmortyapi.com/api/character/2');


    return (
        <>
            <h1>Rick and Morty Quotes</h1>
            <hr />
        </>
    )
}

