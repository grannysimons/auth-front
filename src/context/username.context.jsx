import { useState } from 'react';
import {createContext} from 'react';

//REDUX/MOBX

const usernameContext = createContext();    //em crea el context i em permet accedir als valors

const UsernameProviderWrapper = (props) => {    //component que em delimita l'scope on els valors estaràn dsponibles
    const [nom, setNom] = useState("");
    const [cognom, setCognom] = useState("");

    const updateNom = (nom) => {
        setNom(nom);
    }
    const updateCognom = (cognom) => {
        setCognom(cognom);
    }

    return(
        <usernameContext.Provider value={{nom, cognom, updateNom, updateCognom}}>
            {props.children}
        </usernameContext.Provider>
    );
}

export {usernameContext, UsernameProviderWrapper};