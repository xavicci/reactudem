import { useContext } from 'react'
import { UserContext } from '../Context/UserContext';

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <h1>LoginPage <small> {user?.name}</small> </h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button
                className="btn btn-primary"
                onClick={() => setUser({ id: 123, name: 'Juan', email: 'juan@google.com' })}
            >
                Establecer Usuario
            </button>

        </>
    )
}
