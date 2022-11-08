import { createContext, useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const BACK_URL = "http://localhost:5005/api/auth";

const authContext = createContext();

const AuthProviderWrapper = (props) => {
    
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [carregant, setCarregant] = useState(true);
    const [token, setToken] = useState("");
    const storeToken = (token) => {
        setToken(token);
        localStorage.setItem("authToken", token);
    }
    const logOutUser = () => {
        localStorage.removeItem("authToken");
        authenticateUser();
    }
    const authenticateUser = () => {
        const token = localStorage.getItem("authToken");

        if(token) {
            axios.get(`${BACK_URL}/verify`, {headers: {Authorization: `Bearer ${token}`}})
            .then(response => {
                setUser(response.data);
                setIsLoggedIn(true);
                console.log("----------------> AUTHENTICATEUSER");
                setToken(token);
                setTimeout(() => {
                    setCarregant(false);
                }, 1000)
            })
        } else {
            setIsLoggedIn(false);
            setUser({});
            setToken("");
            setCarregant(false);
        }
    }

    useEffect(()=>{
        authenticateUser();
    }, []);


    return(
        <authContext.Provider value={{carregant, logOutUser, user, isLoggedIn, token, storeToken, authenticateUser}}>
            {props.children}
        </authContext.Provider>
    );
}

export {authContext, AuthProviderWrapper};