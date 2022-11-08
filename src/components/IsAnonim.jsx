import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import {authContext} from '../context/auth.context';

function IsAnonim(props) {

    const {isLoggedIn, carregant} = useContext(authContext);

    if(carregant) {
        return <p>carregant resultats...</p>
    }
    else if(!isLoggedIn) {
        return props.children
    }
    else {
        return <Navigate to="/add" />
    }

}

export default IsAnonim;