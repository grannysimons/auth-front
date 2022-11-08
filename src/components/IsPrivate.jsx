import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import {authContext} from '../context/auth.context';

function IsPrivate(props) {

    const {isLoggedIn, carregant} = useContext(authContext);

    console.log("----------------> ISPRIVATE");

    if(carregant) {
        return <p>carregant resultats...</p>
    }
    else if(isLoggedIn) {
        return props.children
    }
    else {
        return <Navigate to="/login" />
    }

}

export default IsPrivate;