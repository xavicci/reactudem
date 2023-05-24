import { useCounter, useFecth } from '../hooks';
import { LoadingQuote, Quote } from './';


export const MultipleCustomHooks = () => {

    const { counter, increment, decrement, reset } = useCounter(8);
    const { data, isLoading, hasError } = useFecth(`https://gis.elecgalapagos.com.ec/server/rest/services/Hosted/RED_PROVINCIAL_DE_GALAPAGOS__WFL1/FeatureServer/${counter}?f=pjson`);

    const { name, id } = !!data && data;

    return (
        <>
            <h1>Rick and Morty Quotes</h1>
            <hr />
            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote name={name} id={id} />
            }
            <button
                className="btn btn-primary"
                onClick={() => increment()}
                disabled={isLoading}>
                Next Quotes
            </button>
        </>
    )
}